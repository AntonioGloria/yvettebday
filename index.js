const row = document.querySelector('.row');
const nodeList = [...document.querySelectorAll('.item')];

const scroll = (scrollY) => {
  nodeList.forEach(node => {
    const top = node.offsetTop;
    const height = node.clientHeight;
    const inView = (top <= scrollY && scrollY < top + height);
    inView ? node.classList.add('in-view') : node.classList.remove('in-view');
  });
}

window.addEventListener("load", event => {
  scroll(row.scrollTop);

  row.addEventListener("scroll", event => {
    scroll(row.scrollTop);
  });
});