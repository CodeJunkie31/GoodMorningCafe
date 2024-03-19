document.addEventListener("DOMContentLoaded", function() {
    const topLeftImg = document.querySelector('.img-top-left');
    const bottomRightImg = document.querySelector('.img-bottom-right');
    const introParagraph = document.querySelector('.Intro p');

    function fadeInImages() {
        const introParagraphPosition = introParagraph.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (introParagraphPosition < windowHeight * 0.75) {
            topLeftImg.style.opacity = '1';
            bottomRightImg.style.opacity = '1';
        }
    }

    window.addEventListener('scroll', fadeInImages);
});
