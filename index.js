// Get the modal
const modal = document.getElementById("myModal");
const thumbs = document.querySelectorAll('.clickable');
const imgViewer = document.querySelector('#img01')

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementById("myImg");
const modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

//Array of img Urls.

const images = ['./images/image-product-1.jpg', './images/image-product-2.jpg', './images/image-product-3.jpg', './images/image-product-4.jpg']

thumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    imgViewer.setAttribute('src', images[index])
  })
})