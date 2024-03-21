document.addEventListener("DOMContentLoaded", function () {
  // first, define variables
  const leftSplit = document.getElementById("leftSplit");
  const rightSplit = document.getElementById("rightSplit");
  const subchapters = document.querySelectorAll(".heading-font");
  const mediaBlocks = document.querySelectorAll(".media-block");
  let currentMediaBlock = null;

  // Function to handle smooth scrolling
  function smoothScrollTo(target) {
    rightSplit.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  }

  // Event listener for links in the left split
  leftSplit.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const targetId = event.target.getAttribute("href").substring(1); // Remove the '#' from the href
      const targetElement = document.getElementById(targetId);
      smoothScrollTo(targetElement);
    }
  });

  function toggleMenu() {
    var menuContent = document.getElementById("menuContent");
    if (menuContent.style.display === "block") {
      menuContent.style.display = "none";
    } else {
      menuContent.style.display = "block";
    }
  }

  // Function to check if element is in viewport
  function isElementInViewport(el) {
    // Get the bounding rectangle of the element
    const rect = el.getBoundingClientRect();

    // Check if any part of the element is in the viewport
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to create Intersection Observer
  function observeElementsInViewport(elements, callback, options) {
    elements.forEach((element, i) => {
      // Create new Intersection Observer
      const observer = new IntersectionObserver((entries, observer) => {
        // Iterate over each entry
        entries.forEach((entry) => {
          // If entry is in viewport, execute callback
          if (entry.isIntersecting) {
            callback(entry.target, i);
          }
        });
      }, options);

      // Start observing the target element
      observer.observe(element);
    });
  }

  // Create Intersection Observer to observe element
  observeElementsInViewport(
    subchapters,
    (element, i) => {
      console.log("Element entered viewport:" + i, element);
      const mediaBlockToShow = mediaBlocks[i];

      //alert(currentMediaBlock);
      //alert(mediaBlockToShow);

      // Check if the media block to show is different from the current one
      if (mediaBlockToShow !== currentMediaBlock) {
        // Hide the current media block
        if (currentMediaBlock) {
          currentMediaBlock.style.display = "none";
        }

        // Show the new media block
        mediaBlockToShow.style.display = "block";
        currentMediaBlock = mediaBlockToShow;
      }
    },
    {
      root: document.querySelector("#leftSplit"),
      threshold: 0,
    }
  ); // You can adjust the threshold as needed

  // close menu when menu link clicked

  const menuBtn = document.querySelector("#menuBtn");
  const navbar = document.querySelector("#navbar");

  //const closebtn = document.querySelector('.closebtn');

  menuBtn.addEventListener("click", () => {
    if (navbar.classList.contains("collapsed")) {
      navbar.classList.remove("collapsed");
    } else {
      navbar.classList.add("collapsed");
    }
  });

  navbar.addEventListener("click", () => {
    navbar.classList.add("collapsed");
  });
});

function toggleFootnote(footnoteId) {
  var footnote = document.getElementById(footnoteId);
  if (footnote.style.display === "none") {
    footnote.style.display = "block";
  } else {
    footnote.style.display = "none";
  }
}
