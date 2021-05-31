const log = document.getElementById('log');
console.log(log);
window.addEventListener('blur', () => {
    const today = new Date();
    const tag = document.createElement('p');
    const text = document.createTextNode(`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}:  >>>>> thoat ra`);
    tag.style.color = 'red';
    tag.appendChild(text)
    log.prepend(tag);
});

window.addEventListener('focus', () => {
    const today = new Date();
    const tag = document.createElement('p');
    const text = document.createTextNode(`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}:  <<<<< quay lai`);
    tag.style.color = 'green';
    tag.appendChild(text)
    log.prepend(tag);
})