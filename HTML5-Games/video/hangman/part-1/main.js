const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');

rulesBtn.addEventListener('click', function() {
    rules.classList.add('show')
});
closeBtn.addEventListener('click', function() {
    rules.classList.remove('show')
});