document.addEventListener('DOMContentLoaded', function() {
    const photoUpload = document.getElementById('photo-upload');
    const namaInput = document.getElementById('nama');
    const jabatanInput = document.getElementById('jabatan');
    const perusahaanInput = document.getElementById('perusahaan');
    const emailInput = document.getElementById('email');
    const teleponInput = document.getElementById('telepon');
    const alamatInput = document.getElementById('alamat');
    const generateButton = document.getElementById('generate-card');
    const printButton = document.getElementById('print-card');

    const previewPhoto = document.getElementById('preview-photo');
    const previewNama = document.getElementById('preview-nama');
    const previewJabatan = document.getElementById('preview-jabatan');
    const previewPerusahaan = document.getElementById('preview-perusahaan');
    const previewEmail = document.getElementById('preview-email');
    const previewTelepon = document.getElementById('preview-telepon');
    const previewAlamat = document.getElementById('preview-alamat');

    photoUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewPhoto.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });

    generateButton.addEventListener('click', function() {
        previewNama.textContent = namaInput.value || 'Nama Anda';
        previewJabatan.textContent = jabatanInput.value || 'Jabatan';
        previewPerusahaan.textContent = perusahaanInput.value || 'Perusahaan';
        previewEmail.textContent = emailInput.value || 'email@contoh.com';
        previewTelepon.textContent = teleponInput.value || '08123456789';
        previewAlamat.textContent = alamatInput.value || 'Jl. Contoh No. 123, Kota, Negara';
    });

    printButton.addEventListener('click', function() {
        window.print();
    });
});