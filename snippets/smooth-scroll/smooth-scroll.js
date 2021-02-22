/**
 * @description Detect if native smoothScroll is supported
 */
const supportsSmoothScroll = () => {
    let supports = false;

    try {
        const div = document.createElement('div');

        div.scrollTo({
            top: 0,
            get behavior () {
                supports = true;
                return 'smooth';
            }
        });
    } catch (err) {
        return false;
    }

    return supports;
};

/**
 * @param {string} element - the HTML Element selector
 * @param {number} offset - Optional integer if an offset is needed above the element
 * @description
 *
 * Scroll to the top of a page or the top of an element.
 * Includes an optional offset above the element for
 * special cases such as a fixed header.
 */
const scrollToEl = (element, offset) => {
    let elementOffset;

    if (offset) {
        elementOffset = element.offsetTop + offset;
    } else {
        elementOffset = element.offsetTop;
    }

    if (supportsSmoothScroll()) {
        window.scrollTo({
            top: elementOffset,
            left: 0,
            behavior: 'smooth'
        });
    } else {
        window.scrollTo(0, elementOffset);
    }
};

/**
 * @description Scroll to the top of the window
 */
const scrollToTop = () => {
    if (supportsSmoothScroll()) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    } else {
        window.scrollTo(0, 0);
    }
};

export { scrollToEl, scrollToTop };
