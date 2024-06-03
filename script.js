// script.js

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('nav a');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.active').classList.remove('active');
            item.classList.add('active');
            document.querySelector('.content').innerHTML = `Cargando ${item.textContent}...`;
            setTimeout(() => {
                fetch(item.getAttribute('href'))
                    .then(response => response.text())
                    .then(html => {
                        document.querySelector('.content').innerHTML = html;
                    });
            }, 500);
        });
    });
});
