var qr_input_box = document.getElementById("qr_input_box");

var qr_img_box = document.getElementById("qr_img_box");

var qr_img = document.getElementById("qr_img");



function generate_qr_code() {
  qr_img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qr_input_box.value;
}
