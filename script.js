window.onload = () => {
  let text = document.querySelector('.frapper__text');

  hideText(text);
  addListenerForSpace(text);
}



function hideText(elem) {

  elem.addEventListener("click", () => {
    elem.style.visibility = 'hidden';
  });  
};

function addListenerForSpace(elem) {
  document.addEventListener("keydown", (event) => {
    if (event.code === 'Space') {
      elem.remove();
      alert('Элемент "р" с текстом удалён')
    }
  })  
};