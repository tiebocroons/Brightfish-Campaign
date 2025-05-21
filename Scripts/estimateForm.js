document.addEventListener('DOMContentLoaded', function () {
    const backBtn = document.getElementById('btnBack');
    if (backBtn) {
        backBtn.addEventListener('click', function (e) {
            e.preventDefault();
            document.body.classList.add('fade-out');
            setTimeout(function () {
                window.location.href = 'Summary.html';
            }, 500);
        });
    }

    const form = document.getElementById('estimateForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const data = new FormData(form);

            fetch('https://formspree.io/f/mzzrwjad', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    window.location.href = 'Checkout.html';
                } else {
                    alert('There was an error sending your request. Please try again.');
                }
            })
            .catch(() => {
                alert('There was an error sending your request. Please try again.');
            });
        });
    }
});