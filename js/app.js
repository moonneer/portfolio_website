const sections = document.querySelectorAll('.section');
const section_buttons = document.querySelectorAll('.controls');
const section_button = document.querySelectorAll('.control');
const all_sections = document.querySelector('.main-content');


function PageTransitions() {

    // Onclick -> event occurs (active-btn added to class):
    for (let i = 0; i < section_button.length; i++) {
        section_button[i].addEventListener('click', function() {
            let current_button = document.querySelectorAll('.active-btn');
            current_button[0].className = current_button[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    // Section's active class:
    all_sections.addEventListener('click', (e) => {
        // Target the clicked element's data id:
        const id = e.target.dataset.id;
        if (id) {
            section_buttons.forEach((button) => {
                button.classList.remove('active');
            });

            e.target.classList.add('active');

            // Hide other sections:
            sections.forEach((section) => {
                section.classList.remove('active');
            });
    
            const element = document.getElementById(id);
            element.classList.add('active');
         }

    })

    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        let name = document.querySelector(".change"); // Fix: Use querySelector instead of getElementsByClassName

        element.classList.toggle('light-mode');
        
        // Check if the body has the 'light-mode' class
        if (element.classList.contains('light-mode')) {
            name.style.color = '#f56692'; // Change text color to #f56692
        } else {
            // Reset to the default color (you can set it to the original color)
            name.style.color = ''; 
        }
    })
}

PageTransitions();