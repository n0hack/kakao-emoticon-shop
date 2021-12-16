class DragScroll {
  constructor({ list, items, breakpoint }) {
    this.list = list;
    this.items = items;
    this.breakpoint = breakpoint || 768;

    this.beforeInnerWidth = window.innerWidth;
    this.listClientWidth = list.clientWidth;
    this.listScrollWidth = list.scrollWidth;
    this.itemsTotalWidth = [...this.items].reduce((acc, item) => acc + item.clientWidth, 0);
    this.startX;
    this.translateX = 0;

    this.onResize = this.onResize.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragging = this.onDragging.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);

    this.bindEvent();
  }

  bindEvent() {
    this.list.addEventListener('mousedown', this.onDragStart);
    this.list.addEventListener('touchstart', this.onDragStart, { passive: false });
    // 클릭 이벤트 처리
    // 가장 마지막에 호출됨
    // 드래그를 하지 않은 경우에 대해 클릭 이벤트 처리하면 될 듯 (아주 미세한 움직임?)
    // Todo: onClick
    this.list.addEventListener('click', () => {
      console.log('click');
    });
    window.addEventListener('resize', this.onResize);
  }

  onResize() {
    if (window.innerWidth < this.breakpoint) {
      this.list.addEventListener('mousedown', this.onDragStart);
      this.list.addEventListener('touchstart', this.onDragStart, { passive: false });
    } else {
      this.list.removeEventListener('mousedown', this.onDragStart);
      window.removeEventListener('mousemove', this.onDragging);
      window.removeEventListener('mouseup', this.onDragEnd);

      this.list.removeEventListener('touchstart', this.onDragStart);
      window.removeEventListener('touchmove', this.onDragging);
      window.removeEventListener('touchend', this.onDragEnd);
    }

    let nowInnerWidth = window.innerWidth;
    this.listClientWidth = this.list.clientWidth;
    if (this.beforeInnerWidth !== nowInnerWidth) {
      if (this.beforeInnerWidth < nowInnerWidth) {
        if (this.listScrollWidth >= this.listClientWidth) {
          if (this.translateX <= -(this.listScrollWidth - this.listClientWidth)) {
            this.setTranslateX({ x: -(this.listScrollWidth - this.listClientWidth), reset: true });
            this.translateX = -(this.listScrollWidth - this.listClientWidth);
          }
        } else {
          this.setTranslateX({ x: 0, reset: true });
          this.translateX = 0;
        }
      }
      this.beforeInnerWidth = nowInnerWidth;
    }
  }

  onDragStart(e) {
    console.log('down');
    const isTouches = e.touches ? true : false;
    this.startX = isTouches ? e.touches[0].clientX : e.clientX;
    this.translateX = this.getTranslateX();

    window.addEventListener('mousemove', this.onDragging);
    window.addEventListener('touchmove', this.onDragging, { passive: false });
    window.addEventListener('mouseup', this.onDragEnd);
    window.addEventListener('touchend', this.onDragEnd);

    e.preventDefault();
    e.stopPropagation();
  }

  onDragging(e) {
    console.log('drag');
    const isTouches = e.touches ? true : false;
    this.nowX = isTouches ? e.touches[0].clientX : e.clientX;

    this.setTranslateX({ x: this.nowX - this.startX, reset: false });

    e.preventDefault();
    e.stopPropagation();
  }

  onDragEnd(e) {
    console.log('up');
    this.checkValidate();
    this.translateX = this.getTranslateX();

    this.list.removeEventListener('mousedown', this.onDragStart);
    window.removeEventListener('mousemove', this.onDragging);
    window.removeEventListener('mouseup', this.onDragEnd);

    this.list.removeEventListener('touchstart', this.onDragStart);
    window.removeEventListener('touchmove', this.onDragging);
    window.removeEventListener('touchend', this.onDragEnd);

    setTimeout(() => {
      this.setTransition('');
      this.list.addEventListener('mousedown', this.onDragStart);
      this.list.addEventListener('touchstart', this.onDragStart, { passive: false });
    }, 300);
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  checkValidate() {
    this.translateX = this.getTranslateX();
    if (this.listClientWidth >= this.listScrollWidth) {
      if (this.translateX !== 0) {
        this.setTranslateX({ x: 0, reset: true });
        this.setTransition('all 0.3s ease-in-out');
      }
    } else {
      if (this.translateX > 0) {
        this.setTranslateX({ x: 0, reset: true });
        this.setTransition('all 0.3s ease-in-out');
      }

      if (this.translateX < -(this.listScrollWidth - this.listClientWidth)) {
        this.setTranslateX({ x: -(this.listScrollWidth - this.listClientWidth), reset: true });
        this.setTransition('all 0.3s ease-in-out');
        this.translateX = -(this.listScrollWidth - this.listClientWidth);
      }
    }
  }

  getTranslateX() {
    return parseInt(getComputedStyle(this.list).transform.split(/[^\-0-9]+/g)[5]);
  }

  setTranslateX({ x, reset }) {
    if (reset) this.list.style.transform = `translateX(${x}px)`;
    else this.list.style.transform = `translateX(${this.translateX + x}px)`;
  }

  setTransition(value) {
    this.list.style.transition = value;
  }
}
