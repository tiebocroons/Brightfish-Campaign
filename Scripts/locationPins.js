document.addEventListener("DOMContentLoaded", () => {
    // Highlight pins when checkbox is checked
    document.querySelectorAll('.location-checkbox').forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const location = this.getAttribute('data-location');
            const pin = document.querySelector('.map-pin[data-location="' + location + '"]');
            if (pin) {
                if (this.checked) {
                    pin.classList.add('highlighted');
                } else {
                    pin.classList.remove('highlighted');
                }
            }
        });
    });

    // Check checkbox when pin is clicked
    document.querySelectorAll('.map-pin').forEach(function(pin) {
        pin.addEventListener('click', function() {
            const location = this.getAttribute('data-location');
            const checkbox = document.querySelector('.location-checkbox[data-location="' + location + '"]');
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
                checkbox.dispatchEvent(new Event('change'));
            }
        });
    });
});