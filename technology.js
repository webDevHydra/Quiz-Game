document.addEventListener('DOMContentLoaded', function() {
    const quizBoxes = document.querySelectorAll('.quiz-section');

    quizBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            window.location.href = page;
        });
    });
});
