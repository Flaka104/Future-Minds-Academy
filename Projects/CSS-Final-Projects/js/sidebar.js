
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
///////////////////////////////////////////////////////drop down lista///////////////////////////////

/*document.addEventListener("DOMContentLoaded", function () {
    const subButtons = document.querySelectorAll('.arrow');

    subButtons.forEach(function (subButton) {
        subButton.addEventListener('click', function () {
            const parentLi = this.closest('li');
            const subMenu = parentLi.querySelector('.submenu');

            if (subMenu) {
                subMenu.classList.toggle('expanded');
                this.classList.toggle('rotate');
            }
        });
    });
});*/
// document.addEventListener("DOMContentLoaded", function () {
   
//     const subButtons = document.querySelectorAll('.arrow');

//     subButtons.forEach(function (subButton) {
//         subButton.addEventListener('click', function () {
//             const parentLi = this.closest('li');
//             const subMenu = parentLi.querySelector('.submenu');

//            if (subMenu) {
//                 subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
//                 this.classList.toggle('rotate');
//             }
//         });
//     });
// });



/*document.addEventListener("DOMContentLoaded", function () {
    const subButtons = document.querySelectorAll('.arrow');

    if (subButtons.length === 0) {
        console.error('No elements with class "arrow" found.');
    }

    subButtons.forEach(function (subButton) {
        subButton.addEventListener('click', function () {
            const parentLi = this.closest('li');
            const subMenu = parentLi.querySelector('.submenu');

            if (!subMenu) {
                console.error('No submenu found for the clicked arrow.');
                return;
            }

            console.log('Clicked on arrow:', this);
            console.log('Parent li:', parentLi);
            console.log('Submenu:', subMenu);

            subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
            this.classList.toggle('rotate');
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const dropdownItem = document.querySelector('.dropdown-item');

    dropdownItem.addEventListener('click', function () {
        const submenu = this.querySelector('.submenu');
        const arrowIcon = this.querySelector('.arrow');

        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        arrowIcon.classList.toggle('rotate-down');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var dropdownItem = document.querySelector('.dropdown-item');
    
    dropdownItem.addEventListener('click', function() {
        var submenu = this.querySelector('.submenu');
        var arrow = this.querySelector('.arrow');

        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
            arrow.style.transform = 'rotate(0deg)';
        } else {
            submenu.style.display = 'block';
            arrow.style.transform = 'rotate(180deg)';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var dropdownItem = document.querySelector('.dropdown-item');

    dropdownItem.addEventListener('click', function() {
        var submenu = this.querySelector('.submenu');
        var arrow = this.querySelector('.arrow');

        if (window.getComputedStyle(submenu).display === 'block') {
            submenu.style.display = 'none';
            arrow.style.transform = 'rotate(0deg)';
        } else {
            submenu.style.display = 'block';
            arrow.style.transform = 'rotate(180deg)';
        }
    });
});*/






  














 












