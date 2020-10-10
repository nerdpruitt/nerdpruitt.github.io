document.querySelectorAll('[data-section]').forEach((el, i) => {
    setTimeout(()=> {
        el.classList.remove('is-hidden');
    }, parseInt(el.dataset.section) * 150);
});