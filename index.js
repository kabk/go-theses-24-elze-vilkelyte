// Get references to the left and right split elements
const leftSplit = document.getElementById('leftSplit');
const rightSplit = document.getElementById('rightSplit');

// Add scroll event listener to the left split
leftSplit.addEventListener('scroll', function () {
    // Set the scroll position of the right split to match the left split
    rightSplit.scrollTop = leftSplit.scrollTop;
});

// Add scroll event listener to the right split
rightSplit.addEventListener('scroll', function () {
    // Set the scroll position of the left split to match the right split
    leftSplit.scrollTop = rightSplit.scrollTop;
});
