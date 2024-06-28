document.getElementById('convertBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('upload');

    if (!fileInput.files.length) {
        alert('Please select a WEBP file first.');
        return;
    }

    const file = fileInput.files[0];
    const fileName = file.name.split('.').slice(0, -1).join('.') + '.png';
    const reader = new FileReader();

    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            canvas.toBlob(function(blob) {
                const url = URL.createObjectURL(blob);
                const outputImage = document.getElementById('outputImage');
                outputImage.src = url;
                outputImage.style.display = 'block';

                const downloadLink = document.getElementById('downloadLink');
                downloadLink.href = url;
                downloadLink.download = fileName;
                downloadLink.style.display = 'inline-block';
            }, 'image/png');
        };
        img.src = event.target.result;
    };

    reader.readAsDataURL(file);
});
document.getElementById('convertBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('upload');

    if (!fileInput.files.length) {
        alert('Please select a WEBP file first.');
        return;
    }

    const file = fileInput.files[0];
    const fileName = file.name.split('.').slice(0, -1).join('.') + '.png';
    const reader = new FileReader();

    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            canvas.toBlob(function(blob) {
                const url = URL.createObjectURL(blob);
                const outputImage = document.getElementById('outputImage');
                outputImage.src = url;
                outputImage.style.display = 'block';

                const downloadLink = document.getElementById('downloadLink');
                downloadLink.href = url;
                downloadLink.download = fileName;
                downloadLink.style.display = 'inline-block';
            }, 'image/png');
        };
        img.src = event.target.result;
    };

    reader.readAsDataURL(file);
});