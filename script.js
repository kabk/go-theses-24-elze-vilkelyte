document.addEventListener("DOMContentLoaded", function() {
  const leftSplit = document.getElementById('leftSplit');
  const rightSplit = document.getElementById('rightSplit');
  const mediaBlocks = document.querySelectorAll('.media-block');

  let currentMediaBlock = null;

  // Function to show the corresponding media block in the right split
  function showCorrespondingMedia() {
    const scrollTop = leftSplit.scrollTop;
    const windowHeight = leftSplit.clientHeight;
    const fullHeight = leftSplit.scrollHeight;
    const percentScrolled = (scrollTop / (fullHeight - windowHeight)) * 100;
    const indexToShow = Math.floor((percentScrolled / 100) * mediaBlocks.length);

    const mediaBlockToShow = mediaBlocks[indexToShow];

    // Check if the media block to show is different from the current one
    if (mediaBlockToShow !== currentMediaBlock) {
      // Hide the current media block
      if (currentMediaBlock) {
        currentMediaBlock.style.display = 'none';
      }
      
      // Show the new media block
      mediaBlockToShow.style.display = 'block';
      currentMediaBlock = mediaBlockToShow;
    }
  }

  // Call the function to initially show the corresponding media block
  showCorrespondingMedia();

  // Call the function whenever scrolling occurs in the left split
  leftSplit.addEventListener('scroll', showCorrespondingMedia);
});

document.addEventListener("DOMContentLoaded", function() {
  const leftSplit = document.getElementById('leftSplit');
  const rightSplit = document.getElementById('rightSplit');
  
  // Function to handle smooth scrolling
  function smoothScrollTo(target) {
    rightSplit.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  }
  
  // Event listener for links in the left split
  leftSplit.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1); // Remove the '#' from the href
      const targetElement = document.getElementById(targetId);
      smoothScrollTo(targetElement);
    }
  });
});
