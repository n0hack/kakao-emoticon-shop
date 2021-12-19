const faqList = document.querySelector('.faq__categories');
const faqItems = document.querySelectorAll('.faq__category');

new DragScroll({ list: faqList, items: faqItems, breakpoint: 768 });
