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
    document.getElementById('btnBack').onclick = function() {
        window.location.href = 'MovieList.html';
    };
    document.getElementById('btnNext').onclick = function() {
        window.location.href = 'ReceiveEstimates.html';
    };