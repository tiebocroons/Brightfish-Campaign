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

  document.querySelector('#step1').addEventListener('mouseover', function () {
    this.innerHTML= 'Date';
  });
  document.querySelector('#step1').addEventListener('mouseout', function () {
    this.innerHTML= '1';
  });

  document.querySelector('#step2').addEventListener('mouseover', function () {
    this.innerHTML= 'Location';
  });
  document.querySelector('#step2').addEventListener('mouseout', function () {
    this.innerHTML= '2';
  });

  document.querySelector('#step3').addEventListener('mouseover', function () {
    this.innerHTML= 'Movie';
  });
  document.querySelector('#step3').addEventListener('mouseout', function () {
    this.innerHTML= '3';
  });

  document.querySelector('#step4').addEventListener('mouseover', function () {
    this.innerHTML= 'Ad';
  });
  document.querySelector('#step4').addEventListener('mouseout', function () {
    this.innerHTML= '4';
  });

  document.querySelector('#step5').addEventListener('mouseover', function () {
    this.innerHTML= 'Summary';
  });
  document.querySelector('#step5').addEventListener('mouseout', function () {
    this.innerHTML= '5';
  });

  document.querySelector('#step6').addEventListener('mouseover', function () {
    this.innerHTML= 'Contact';
  });
  document.querySelector('#step6').addEventListener('mouseout', function () {
    this.innerHTML= '6';
  });