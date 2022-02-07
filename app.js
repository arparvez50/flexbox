// Dark Mode Goes Here
let darkModeBtn = document.querySelector('#switch');
let root = document.querySelector(':root');

darkModeBtn.addEventListener('change', function () {
    if (darkModeBtn.checked) {
        root.style.setProperty('--gray', '#1C2833');
        root.style.setProperty('--light-blue', '#2C3E50');
        root.style.setProperty('--black', '#fff');
        root.style.setProperty('--medium-blue', '#F4D03F');
        root.style.setProperty('--dark-blue', '#F4D03F');
    } else {
        root.style.setProperty('--gray', '#D7DBDD');
        root.style.setProperty('--light-blue', '#D6EAF8');
        root.style.setProperty('--black', '#000');
        root.style.setProperty('--medium-blue', '#AED6F1');
        root.style.setProperty('--dark-blue', '#3498DB');
    }
})