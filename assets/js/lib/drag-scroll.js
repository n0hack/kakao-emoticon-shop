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

    if (window.innerWidth < this.breakpoint) {
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
  }

  onDragStart(e) {
    const isTouches = e.touches ? true : false;
    this.startX = isTouches ? e.touches[0].clientX : e.clientX;
    this.translateX = this.getTranslateX();

    window.addEventListener('mousemove', this.onDragging);
    window.addEventListener('touchmove', this.onDragging, { passive: false });
    window.addEventListener('mouseup', this.onDragEnd);
    window.addEventListener('touchend', this.onDragEnd);

    e.preventDefault();
  }

  onDragging(e) {
    const isTouches = e.touches ? true : false;
    this.nowX = isTouches ? e.touches[0].clientX : e.clientX;

    this.setTranslateX({ x: this.nowX - this.startX, reset: false });

    e.preventDefault();
  }

  onDragEnd(e) {
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
