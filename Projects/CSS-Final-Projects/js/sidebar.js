
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const container = document.getElementById('main-container');

    if (sidebar && container) {
        sidebar.classList.toggle('collapsed');
        container.classList.toggle('main-w');
    } else {
        console.error("Sidebar or container element not found");
    }
};