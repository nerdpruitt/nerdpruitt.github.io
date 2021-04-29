/**
 * @description Add support for .closest selector
 */

if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
    Element.prototype.closest = function (selector) {
        let node = this;

        while (node) {
            if (node.matches(selector)) {
                return node;
            } else {
                node = node.tagName === 'svg' ? node.parentNode : node.parentElement;
            }
        }

        return null;
    };
}
