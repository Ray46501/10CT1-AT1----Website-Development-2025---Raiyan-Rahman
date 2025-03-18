function uploadFile() {
    let fileInput = document.getElementById("fileUpload");
    let message = document.getElementById("uploadMessage");
    
    if (fileInput.files.length > 0) {
        message.textContent = "File uploaded: " + fileInput.files[0].name;
    } else {
        message.textContent = "Please select a file.";
    }
}
