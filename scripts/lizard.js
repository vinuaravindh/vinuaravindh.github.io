let myImage = document.querySelector('img')

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/godzilla.jpg') {
    myImage.setAttribute('src', 'images/lizard_cute.jpg');
    myImage.setAttribute('height', '300');
  } else {
    myImage.setAttribute('src', 'images/godzilla.jpg');
  }
}