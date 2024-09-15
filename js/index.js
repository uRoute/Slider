var items = document.querySelectorAll('.item');
var layer = document.querySelector('.layer');
var closeBtn = document.querySelector('#closeBtn')
var rowElement = document.querySelector('.row');
var currentIndex = 0;
rowElement.addEventListener('click',function(e){
  var itemClicked = e.target.closest('.item')
  if(itemClicked){
    layer.classList.replace('d-none','d-flex');
    var imgSrc = itemClicked.querySelector('img').getAttribute('src');
    layer.querySelector('.container').style.backgroundImage = `url(${imgSrc})`;
    currentIndex = +itemClicked.dataset.imageIndex;
  } 
})
function slide(step){
  currentIndex = currentIndex + step;
  if(currentIndex == items.length){
    currentIndex = 0;
  }else if (currentIndex == -1){
    currentIndex = items.length - 1;
  }
  var imgSrc = items[currentIndex].querySelector('img').getAttribute('src');
  layer.querySelector('.container').style.backgroundImage = `url(${imgSrc})`;
}
function closeSlider(){
  layer.classList.replace('d-flex','d-none');
  currentIndex = null;
}
closeBtn.nextElementSibling.addEventListener('click',function(){
  slide(1)
})
closeBtn.previousElementSibling.addEventListener('click',function(){
  slide(-1)
})
closeBtn.addEventListener('click',function(){
  closeSlider()
})
layer.addEventListener('click',function(e){
  if(e.target == e.currentTarget){
    closeSlider()
  }
})
document.addEventListener('keydown',function(e){
  if(e.key == 'ArrowRight'){
    slide(1);
  }else if(e.key == 'ArrowLeft'){
    slide(-1);
  }else if( e.key == 'Escape'){
    closeSlider()
  }
})