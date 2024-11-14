function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = 'index.html';
    }
}

function refreshPage() {
    location.reload(); // Reloads the entire page
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/pushalert-sw.js')
        .then(function(registration) {
            console.log('PushAlert Service Worker Registered with scope:', registration.scope);
        })
        .catch(function(error) {
            console.error('PushAlert Service Worker registration failed:', error);
        });
}
