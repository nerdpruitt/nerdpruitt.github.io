// replace addClass, removeClass,  and scrollToTop

// @ie11 needs the feature check
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype
    ) {
    const backToTopNode = document.createElement('button');
    addClass(backToTopNode, 'back-to-top-btn');
    addClass(backToTopNode, 'hidden');
    backToTopNode.setAttribute('type', 'button');
    backToTopNode.innerHTML = '<svg class="icon" role="img" viewBox="0 0 48 48"><path fill="currentColor" d="M0 24C0 10.742 10.742 0 24 0s24 10.742 24 24-10.742 24-24 24S0 37.258 0 24zm13.897 2.797l7.006-7.307v17.671a2.317 2.317 0 0 0 2.323 2.323h1.548a2.317 2.317 0 0 0 2.323-2.323v-17.67l7.006 7.306c.9.938 2.4.958 3.32.038l1.054-1.064c.91-.91.91-2.38 0-3.28L25.645 9.647c-.91-.91-2.38-.91-3.28 0L9.513 22.49c-.91.91-.91 2.381 0 3.281l1.055 1.064c.929.92 2.429.9 3.329-.038z"/></svg>';

    const config = {
        root: null,
        rootMargin: '50% 0px 0px'
    };

    let isLeaving = false;
    let observer = new IntersectionObserver(function (entries, self) {
        const $backToTop = $('.back-to-top-btn');

        // Hide if the header is intersecting.
        // Show if it is more than 50% outside the visiblility
        // of the top of the window.
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                addClass($backToTop, 'hidden');
                isLeaving = true;
            } else if (isLeaving) {
                removeClass($backToTop, 'hidden');
                isLeaving = false;
            }
        });
    }, config);

    const backToTop = (event) => {
        event.preventDefault();
        scrollToTop();
    };

    const init = () => {
        // Don't init if the overall length of the page is less than twice the height of the window
        // or if the header is not on the page
        if ((document.body.offsetHeight > (window.innerHeight * 2)) || !$('.super-header-spacer')) {
            return;
        }

        // Append Back to Top Button
        document.body.appendChild(backToTopNode);
        $('.back-to-top-btn').addEventListener('click', backToTop);

        // Observe viewport top distance from the header
        const $header = $('.super-header-spacer');
        observer.observe($header);
    }

    domReady().then(init);
}
