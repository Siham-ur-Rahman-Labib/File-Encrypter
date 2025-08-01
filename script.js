function encryptFile() {
  const fileInput = document.getElementById('fileInput');
  const password = document.getElementById('password').value;
  const file = fileInput.files[0];

  if (!file) return alert("Upload a .txt file first!");
  if (!password) return alert("Enter a password to encrypt!");

  const reader = new FileReader();
  reader.onload = function(e) {
    const content = e.target.result;

    // Real AES encryption using CryptoJS
    const encrypted = CryptoJS.AES.encrypt(content, password).toString();

    const blob = new Blob([encrypted], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = url;
    downloadLink.style.display = 'block';
  };

  reader.readAsText(file);
}