


/*document.addEventListener("DOMContentLoaded", function () {
    const colorCircles = document.querySelectorAll('.color-circle');

    colorCircles.forEach(circle => {
        circle.addEventListener('click', function () {
            const color = this.dataset.color;
            document.documentElement.style.setProperty('--color-background', color);

            // Update and store the settings object in local storage
            const storedSettings = { colorBackground: color };
            localStorage.setItem('settings', JSON.stringify(storedSettings));
        });
    });
});*/
document.addEventListener("DOMContentLoaded", function () {
    
    const storedSettings = JSON.parse(localStorage.getItem('settings')) || { colorBackground: 'red' };

   
    document.documentElement.style.setProperty('--color-background', storedSettings.colorBackground);

    const colorCircles = document.querySelectorAll('.color-circle');

    colorCircles.forEach(circle => {
        circle.addEventListener('click', function () {
            const color = this.dataset.color;
            document.documentElement.style.setProperty('--color-background', color);

           
            const updatedSettings = { colorBackground: color };
            localStorage.setItem('settings', JSON.stringify(updatedSettings));
        });
    });
});

//change sidebar backgorund
document.addEventListener("DOMContentLoaded", function () {
    
    const savedSettings = JSON.parse(localStorage.getItem('settings')) || {};
    const sidebar = document.querySelector('.sidebar');

    
    applySettings(savedSettings);

    const whiteBackground = document.querySelector('.white');
    const blackBackground = document.querySelector('.black');

   
    whiteBackground.addEventListener('click', function () {
      
        savedSettings.backgroundColor = 'white';

        
        applySettings(savedSettings);

     
        localStorage.setItem('settings', JSON.stringify(savedSettings));
    });

    blackBackground.addEventListener('click', function () {
        savedSettings.backgroundColor = 'black';
        applySettings(savedSettings);
        localStorage.setItem('settings', JSON.stringify(savedSettings));
    });

    
    function applySettings(settings) {
       
        sidebar.style.backgroundColor = settings.backgroundColor || '';
    }
});


/*document.addEventListener("DOMContentLoaded", function () {
    const whiteBackground = document.querySelector('.white');
    const blackBackground = document.querySelector('.black');
    const sidebar = document.querySelector('.sidebar');

    whiteBackground.addEventListener('click', function () {
        sidebar.style.backgroundColor = 'white';
    });

    blackBackground.addEventListener('click', function () {
        sidebar.style.backgroundColor = 'black';
    });
});*/


/*document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector('.sidebar');
    const imageElements = document.querySelectorAll('.images-w img');

    imageElements.forEach(function(image) {
        image.addEventListener('click', function () {
            const imagePath = this.getAttribute('src');
            sidebar.style.backgroundImage = `url("${imagePath}")`;
        });
    });
});*/

//change image backgorund
document.addEventListener("DOMContentLoaded", function () {
   
    const savedSettings = JSON.parse(localStorage.getItem('settings')) || {};
    const sidebar = document.querySelector('.sidebar');
    const imageElements = document.querySelectorAll('.images-w img');

   
    applySettings(savedSettings);

    imageElements.forEach(function(image) {
        image.addEventListener('click', function () {
            const imagePath = this.getAttribute('src');

           
            savedSettings.backgroundImage = `url("${imagePath}")`;

           
            applySettings(savedSettings);

            
            localStorage.setItem('settings', JSON.stringify(savedSettings));
        });
    });

    
    function applySettings(settings) {
        
        sidebar.style.backgroundImage = settings.backgroundImage || '';
    }
});

//toggle
document.addEventListener("DOMContentLoaded", function () {
  
    const savedSettings = JSON.parse(localStorage.getItem('settings')) || {};
    const sidebar = document.querySelector('.sidebar');
    const imageElements = document.querySelectorAll('.images-w img');
    const toggleSwitch = document.querySelector('.toggle');

    
    applySettings(savedSettings);

    imageElements.forEach(function(image) {
        image.addEventListener('click', function () {
            const imagePath = this.getAttribute('src');

            
            savedSettings.backgroundImage = `url("${imagePath}")`;

           
            applySettings(savedSettings);

            
            localStorage.setItem('settings', JSON.stringify(savedSettings));
        });
    });

   
    toggleSwitch.addEventListener('click', function () {
      
        this.classList.toggle('toggle_on');
        
        
        savedSettings.imageToggle = this.classList.contains('toggle_on');
        
        
        applySettings(savedSettings);
        
       
        localStorage.setItem('settings', JSON.stringify(savedSettings));
    });

   
    function applySettings(settings) {
       
        sidebar.style.backgroundImage = settings.imageToggle ? settings.backgroundImage || '' : 'none';
    }
});
//shfaqe setting
document.addEventListener("DOMContentLoaded", function () {
    const settingsIcon = document.getElementById('settingsIcon');
    const sidebarSettings = document.getElementById('sidebarSettings');

    settingsIcon.addEventListener('click', function () {
       
        sidebarSettings.classList.toggle('show-settings');
    });
});






  

