document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.education-item');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    }

    // Initially show the first item
    showItem(currentIndex);

    // Add event listeners for next and prev buttons
    document.querySelector('.next').addEventListener('click', nextItem);
    document.querySelector('.prev').addEventListener('click', prevItem);
});
