function updateProgressBar(currentStep) {
    const steps = document.querySelectorAll('.progress-step');
    const lines = document.querySelectorAll('.progress-line');
    steps.forEach((step, idx) => {
        if (idx < currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
    lines.forEach((line, idx) => {
        if (idx < currentStep - 1) {
            line.classList.add('active');
        } else {
            line.classList.remove('active');
        }
    });
}

// Automatically set progress based on data-step attribute
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar && progressBar.dataset.step) {
        updateProgressBar(Number(progressBar.dataset.step));
    }
});