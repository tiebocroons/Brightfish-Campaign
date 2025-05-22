const tabAd = document.getElementById('tab-ad');
    const tabImages = document.getElementById('tab-images');
    const contentAd = document.getElementById('content-ad');
    const contentImages = document.getElementById('content-images');
    tabAd.onclick = () => {
        tabAd.classList.add('active');
        tabImages.classList.remove('active');
        contentAd.style.display = '';
        contentImages.style.display = 'none';
    };
    tabImages.onclick = () => {
        tabImages.classList.add('active');
        tabAd.classList.remove('active');
        contentImages.style.display = '';
        contentAd.style.display = 'none';
    };

    // Ad file upload
    const adDropzone = document.getElementById('ad-dropzone');
    const adFileInput = document.getElementById('ad-file-input');
    const adSelectBtn = document.getElementById('ad-select-btn');
    const adUploadedList = document.getElementById('ad-uploaded-list');
    adDropzone.addEventListener('click', () => adFileInput.click());
    adSelectBtn.addEventListener('click', (e) => { e.stopPropagation(); adFileInput.click(); });
    adDropzone.addEventListener('dragover', e => { e.preventDefault(); adDropzone.classList.add('dragover'); });
    adDropzone.addEventListener('dragleave', e => { adDropzone.classList.remove('dragover'); });
    adDropzone.addEventListener('drop', e => {
        e.preventDefault();
        adDropzone.classList.remove('dragover');
        adFileInput.files = e.dataTransfer.files;
        showAdFiles();
    });
    adFileInput.addEventListener('change', showAdFiles);
    function showAdFiles() {
        adUploadedList.innerHTML = '';
        if (adFileInput.files.length > 0) {
            for (const file of adFileInput.files) {
                const li = document.createElement('li');
                li.textContent = file.name;
                adUploadedList.appendChild(li);
            }
        }
    }

    // Images upload
    const imagesDropzone = document.getElementById('images-dropzone');
    const imagesFileInput = document.getElementById('images-file-input');
    const imagesSelectBtn = document.getElementById('images-select-btn');
    const imagesUploadedList = document.getElementById('images-uploaded-list');
    imagesDropzone.addEventListener('click', () => imagesFileInput.click());
    imagesSelectBtn.addEventListener('click', (e) => { e.stopPropagation(); imagesFileInput.click(); });
    imagesDropzone.addEventListener('dragover', e => { e.preventDefault(); imagesDropzone.classList.add('dragover'); });
    imagesDropzone.addEventListener('dragleave', e => { imagesDropzone.classList.remove('dragover'); });
    imagesDropzone.addEventListener('drop', e => {
        e.preventDefault();
        imagesDropzone.classList.remove('dragover');
        imagesFileInput.files = e.dataTransfer.files;
        showImagesFiles();
    });
    imagesFileInput.addEventListener('change', showImagesFiles);
    function showImagesFiles() {
        imagesUploadedList.innerHTML = '';
        if (imagesFileInput.files.length > 0) {
            for (const file of imagesFileInput.files) {
                const li = document.createElement('li');
                li.textContent = file.name;
                imagesUploadedList.appendChild(li);
            }
        }
    }

    // Navigation buttons (example, adjust as needed)
     document.getElementById('btnBack').addEventListener('click', function (e) {
            e.preventDefault();
            document.body.classList.add('fade-out');
            setTimeout(function () {
                window.location.href = 'Movielist.html'; // Replace with the actual previous page URL
            }, 500); // Match the duration of the fade-out animation
        });

        document.getElementById('btnNext').addEventListener('click', function (e) {
            e.preventDefault();
            document.body.classList.add('fade-out');
            setTimeout(function () {
                window.location.href = 'Summary.html'; // Replace with the actual next page URL
            }, 500); // Match the duration of the fade-out animation
        });

        // Image preview for "Generate ad from images"
document.getElementById('images-file-input').addEventListener('change', function(e) {
    const preview = document.getElementById('images-preview');
    preview.innerHTML = '';
    Array.from(e.target.files).forEach(file => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(evt) {
                const img = document.createElement('img');
                img.src = evt.target.result;
                img.style.maxWidth = '120px';
                img.style.maxHeight = '80px';
                img.style.margin = '6px';
                img.style.borderRadius = '8px';
                preview.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });
});

// Video preview for "Upload existing ad"
document.getElementById('ad-file-input').addEventListener('change', function(e) {
    const preview = document.getElementById('ad-preview');
    preview.innerHTML = '';
    const file = e.target.files[0];
    if (file && file.type === 'video/quicktime') {
        const url = URL.createObjectURL(file);
        const video = document.createElement('video');
        video.src = url;
        video.controls = true;
        video.style.maxWidth = '220px';
        video.style.maxHeight = '120px';
        video.style.margin = '6px';
        video.style.borderRadius = '8px';
        preview.appendChild(video);
    }
});