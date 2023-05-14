$(document).ready(function () {
    fetch('/header.html')
        .then(function (response) {
            return response.text();
        }).then(function (headerHtml) {
            $('#main-header').html(headerHtml);
        });

    fetch('/footer.html')
        .then(function (response) {
            return response.text();
        }).then(function (footerHtml) {
            $('#main-footer').html(footerHtml);
        });
});