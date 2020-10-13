document.querySelectorAll('[data-section]').forEach(el => {
    setTimeout(()=> {
        el.classList.remove('is-hidden');
    }, parseInt(el.dataset.section) * 150);
});