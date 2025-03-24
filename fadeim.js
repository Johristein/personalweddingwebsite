window.addEventListener('scroll', function () {
    let content = document.getElementById('content');
    let scrollPos = window.scrollY;
    let opacity = Math.min(scrollPos / 300, 1);
    content.style.opacity = opacity;
});
