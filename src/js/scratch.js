// Detect which link clicks to follow
// Store scroll position
// History - push, replace, and pop state
// Fetch, validate pages and urls
// cache pages

// potentially move to utility
function dispatchEvent (name, info) {
    const event = new CustomEvent(name, {
        detail: info
    });

    document.dispatchEvent(event);
}

function expandURL (locatable) {
    const anchor = document.createElement('a');
    anchor.href = locatable.toString();
    return new URL(anchor.href);
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
        // inspect the html to make sure it's all good.

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
        console.warn('The guy who built this must be a hack because something went wrong.', error);
    });
};


class History {

}


class Page {

}

// Link click observer delegate
// willFollowLinkToLocation(link: Element, location: URL) {
//     return this.elementIsNavigable(link) &&
//         this.locationIsVisitable(location) &&
//         this.applicationAllowsFollowingLinkToLocation(link, location);
// }

// followedLinkToLocation(link: Element, location: URL) {
//     const action = this.getActionForLink(link)
//     this.visit(location.href, { action })
// }



class ScrollObserver {

}


class LinkObserver {
    start () {
        if (!this.started) {
            window.addEventListener('click', this.captureClick, true);
            this.started = true;
        }
    }

    stop () {
        if (this.started) {
            window.removeEventListener('click', this.captureClick, true);
            this.started = false;
        }
    }

    // Is this a click we should care about?
    // Or is it cmd + click, right click, etc.
    trackClick (event) {
        return !(
            (event.target && event.target.isContentEditable) ||
            event.defaultPrevent ||
            event.which > 1 ||
            event.altKey ||
            event.ctrlKey ||
            event.metaKey ||
            event.shiftKey
        );
    }

    clickBubble (event) {
        // Evaluate if we care about the click
        if (this.trackClick(event)) {
            const link = this.findLinkFromClickTarget(event.target);

            if (link) {
                const location = this.getLocationForLink(link);

                // If it's all good, fetch location and go!!

                // if (this.delegate.willFollowLinkToLocation(link, location)) {
                //     event.preventDefault();
                //     this.delegate.followedLinkToLocation(link, location);
                // }
            }
        }
    }

    captureClick () {
        window.removeEventListener('click', this.clickBubble);
        window.addEventListener('click', this.clickBubble);
    }

    findLinkFromClickTarget (target) {
        if (target) {
            // Not opening in a new window or a download
            return target.closest('a[href]:not([target^=_]):not([download])');
        }
    }

    getLocationForLink (link) {
        return expandURL(link.getAttribute('href') || '');
    }
}
