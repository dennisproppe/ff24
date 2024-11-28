// Header and footer content
const headerHTML = `
<header class="bg-indigo-600 text-white shadow-lg">
    <nav class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
            <a href="index.html" class="text-2xl font-bold hover:text-indigo-200">Future Founder '24</a>
            <ul class="hidden md:flex space-x-8">
                <li><a href="index.html#overview" class="hover:text-indigo-200 transition-colors">Overview</a></li>
                <li><a href="friday.html" class="hover:text-indigo-200 transition-colors">Friday</a></li>
                <li><a href="saturday.html" class="hover:text-indigo-200 transition-colors">Saturday</a></li>
                <li><a href="tools.html" class="hover:text-indigo-200 transition-colors">Tools</a></li>
            </ul>
        </div>
    </nav>
</header>`;

const footerHTML = `
<footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-6 text-center">
        <p>Future Founder Build Weekend '24 by Dr. Dennis Proppe</p>
    </div>
</footer>`;

// Load components
document.addEventListener('DOMContentLoaded', function() {
    // Insert header
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }

    // Insert footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
});
