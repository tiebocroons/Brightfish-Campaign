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

// Map each step to its page filename
const stepPages = [
    'selectDate.html',      // Step 1
    'location.html',  // Step 2
    'MovieList.html',     // Step 3
    'UploadAd.html',        // Step 4
    'Summary.html',   // Step 5
    'ReceiveEstimates.html'    // Step 6
];

// Automatically set progress based on data-step attribute
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.querySelector('.progress-bar');
    let currentStep = 1;
    if (progressBar && progressBar.dataset.step) {
        currentStep = Number(progressBar.dataset.step);
        updateProgressBar(currentStep);
    }

// Add click event to progress steps
    const steps = document.querySelectorAll('.progress-step');
    steps.forEach((step, idx) => {
        step.addEventListener('click', function() {

            if (idx + 1 < currentStep) {
                // Navigate to the correct page for this step
                window.location.href = stepPages[idx];
            } else if (idx + 1 === currentStep) {
                // Optional: do nothing or give feedback if needed
            } else {
                // Shake animation for invalid forward click
                step.classList.add('shake');
                setTimeout(() => step.classList.remove('shake'), 500);
            }
        });
    });
});

// Shake animation CSS (add this to your CSS file)
/*

*/

function fadeTextChange(element, newText) {
    const span = element.querySelector('span');
    span.style.opacity = 0;
    setTimeout(() => {
        span.textContent = newText;
        span.style.opacity = 1;
    }, 200);
}

// Voor elk element:
const stepLabels = [
    { id: '#step1', hover: 'Date', out: '1' },
    { id: '#step2', hover: 'Location', out: '2' },
    { id: '#step3', hover: 'Movie', out: '3' },
    { id: '#step4', hover: 'Ad', out: '4' },
    { id: '#step5', hover: 'Summary', out: '5' },
    { id: '#step6', hover: 'Contact', out: '6' }
];

stepLabels.forEach(({ id, hover, out }) => {
    const el = document.querySelector(id);
    el.innerHTML = `<span>${out}</span>`;
    el.addEventListener('mouseover', () => fadeTextChange(el, hover));
    el.addEventListener('mouseout', () => fadeTextChange(el, out));
});