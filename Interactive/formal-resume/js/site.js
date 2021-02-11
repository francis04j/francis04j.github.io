if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("/service-worker.js").then(function (registration) {
            console.log("ServiceWorker registration successful with scope: ", registration.scope);
        }, function (err) {
            console.log("ServiceWorker registration failed: ", err);
        });
    });
}

const btn = document.querySelector('.btn-toggle');

// Listen for a click on the button
btn.addEventListener('click', function() {
    toggleMode();
})

function toggleMode() {
    document.body.classList.toggle('dark-mode'); 
}
