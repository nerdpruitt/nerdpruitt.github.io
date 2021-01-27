// handle opening in new tab by detecting modifier
// handle scroll position
// handle anchor links
// handle history - push, replace, and pop state
// cache pages


// potentially move to utility
function dispatchEvent(name, info) {
    const event = new CustomEvent(name, {
        detail: info,
    });

    document.dispatchEvent(event);
}

/**
 * @description - Update the title and HTML content of the current page
 * @param {String} title - The new title for the page
 * @param {String} content - The new HTML content for the page
 */
function updateContent (title, content) {
    document.title = title;
    document.querySelector('[data-element="main-content"]').innerHTML = content;

    // hide loading element
}

const onClick = (event) => {
    if (!event.target.closest(selector)) {
        return;
    }

    const url = event.target.getAttribute('href');

    fetch(url).then((response) => {
        // show loading element

        return response.text();
    }).then((html) => {
        // Convert the HTML string into a document object
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');

        // Get the title and main content
        const title = page.querySelector('title').textContent;
        const content = page.querySelector('[data-element="main-content"]').innerHTML;

        updateContent(title, content);

        // hide loading element
    }).catch((error) => {
        // There was an error
        console.warn('Something went wrong.', error);
    });
};

document.addEventListener('click', onClick);
