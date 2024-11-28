// Simple encode/decode functions
function encode(str) {
    return btoa(str);
}

function decode(str) {
    return atob(str);
}

// Encoded credentials
const _c = {
    u: 'Z3Vlc3Q=',  
    p: 'ZmYyNCE='  
};

function checkAuth() {
    // Check if user is already authenticated
    if (sessionStorage.getItem('authenticated') === 'true') {
        return true;
    }

    const userInput = prompt("Username:");
    if (userInput === null) return false;
    
    const passwordInput = prompt("Password:");
    if (passwordInput === null) return false;

    // Check credentials
    if (encode(userInput) === _c.u && encode(passwordInput) === _c.p) {
        sessionStorage.setItem('authenticated', 'true');
        return true;
    } else {
        alert("Invalid credentials!");
        window.location.href = "index.html";
        return false;
    }
}

// Additional security measures
(function() {
    // Disable console.log
    const noop = () => {};
    if (window.console) {
        const methods = ['log', 'debug', 'info'];
        methods.forEach(method => {
            console[method] = noop;
        });
    }
    
    // Prevent view source shortcuts
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'u' || e.key === 'i')) {
            e.preventDefault();
            return false;
        }
    });
})();

// Run auth check when page loads
if (!checkAuth()) {
    window.location.href = "index.html";
}
