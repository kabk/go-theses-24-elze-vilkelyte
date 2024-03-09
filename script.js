document.addEventListener("DOMContentLoaded", function() {
  const leftSplit = document.getElementById('leftSplit');
  const rightSplit = document.getElementById('rightSplit');
  const mediaBlocks = document.querySelectorAll('.media-block');

  leftSplit.addEventListener('scroll', function () {
    const scrollTop = leftSplit.scrollTop;
    const windowHeight = leftSplit.clientHeight;
    const fullHeight = leftSplit.scrollHeight;
    const percentScrolled = (scrollTop / (fullHeight - windowHeight)) * 100;
    const indexToShow = Math.floor((percentScrolled / 100) * mediaBlocks.length);

    // Hide all images in the right split
    mediaBlocks.forEach((block) => {
      block.style.display = 'none';
    });

    // Show the corresponding image in the right split
    const correspondingImage = document.getElementById('image' + (indexToShow + 1));
    if (correspondingImage) {
      correspondingImage.style.display = 'block';
    }
  });

  // Sync the scroll position of the right split with the left split
  rightSplit.addEventListener('scroll', function () {
    leftSplit.scrollTop = rightSplit.scrollTop;
  });
});
