document.createElement("picture");
if (!window.HTMLPictureElement && document.addEventListener) {
    window.addEventListener("DOMContentLoaded", function() {
        var s = document.createElement("script");
        s.src = "https://waveexecutor.com/wp-content/plugins/webp-express/js/picturefill.min.js";
        document.body.appendChild(s);
    });
}