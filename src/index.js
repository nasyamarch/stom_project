

const burgerButton = document.querySelector('.burger_button');
const sidebar = document.querySelector('.sidebar');
const header = document.querySelector('.header_head');

function updateSidebarPosition() {
    const headerHeight = header.offsetHeight;
    sidebar.style.top = headerHeight + 'px';
    sidebar.style.height = `calc(100vh - ${headerHeight}px)`;
}

function openMenu() {
    burgerButton.classList.add('active');
    sidebar.classList.add('active');
    updateSidebarPosition();
}

function closeMenu() {
    burgerButton.classList.remove('active');
    sidebar.classList.remove('active');
}

burgerButton.addEventListener('click', () => {
    sidebar.classList.contains('active') ? closeMenu() : openMenu();
})

document.addEventListener('click', (e) => {
    if (sidebar.classList.contains('active')
        && !sidebar.contains(e.target)
        && !burgerButton.contains(e.target)
    ) {
        closeMenu();
    }
})

window.addEventListener("resize", () => {
    if (sidebar.style.display === 'block') {
        updateSidebarPosition();
    }
});

window.addEventListener("load", updateSidebarPosition);
window.addEventListener('resize', updateSidebarPosition);