const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    const isDarkTheme = body.classList.contains('dark-theme');
    toggleButton.innerHTML = isDarkTheme
        ? '<i class="fas fa-moon"></i> Dark'
        : '<i class="fas fa-sun"></i> Light';
});

const toggleButton2 = document.getElementById('toggleButton');
        const myList = document.getElementById('myList');

        toggleButton2.addEventListener('click', () => {
            if (myList.style.display === 'none' || myList.style.display === '') {
                myList.style.display = 'block'; 
            } else {
                myList.style.display = 'none'; 
            }
});

toggleButton2.addEventListener('click', () => {
    myList.classList.toggle('show');
    toggleButton2.textContent = myList.classList.contains('show') 
    ? 'Hide' 
    : 'Show';
});