function filterActivities() {
    const input = document.getElementById('search').value.toLowerCase();
    const activities = document.querySelectorAll('.activity');
    
    activities.forEach(act => {
        const title = act.querySelector('h3').textContent.toLowerCase();
        const desc = act.querySelector('p').textContent.toLowerCase();
        act.style.display = (title.includes(input) || desc.includes(input)) ? 'block' : 'none';
    });
}