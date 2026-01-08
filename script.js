<script>
  let images = [
  "img1.jpg.png",
  "img2.jpg.png",
  "img3.jpg.png"
];

let index = 0;

function showImage() {
    document.getElementById("slider-img").src = images[index];
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}
</script>

