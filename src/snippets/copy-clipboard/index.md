```js
/**
 * @param {string} text - The text you want copied to the clipboard
 * @returns {Promise}
 *
 * @description
 * Copy text to the clipboard. Uses navigator.clipboard if supported,
 * with a fallback to document.execCommand
 */

function copyClipboard (text) {
	// Use the Async Clipboard API when available. Requires a secure browsing
	// context (i.e. HTTPS)
		if (navigator.clipboard) {
		return navigator.clipboard.writeText(text).catch(function (err) {
			throw (err !== undefined ? err : new DOMException('The request is not allowed', 'NotAllowedError'));
		});
	}

	// ...Otherwise, use document.execCommand() fallback

	// Put the text to copy into a <span>
	var span = document.createElement('span');
	span.textContent = text;

	// Preserve consecutive spaces and newlines
	span.style.whiteSpace = 'pre';

	// Add the <span> to the page
	document.body.appendChild(span);

	// Make a selection object representing the range of text selected by the user
	var selection = window.getSelection();
	var range = window.document.createRange();
	selection.removeAllRanges();
	range.selectNode(span);
	selection.addRange(range);

	// Copy text to the clipboard
	var success = false;
	try {
		success = window.document.execCommand('copy');
	} catch (err) {
		console.log('error', err);
	}

	// Cleanup
	selection.removeAllRanges();
	window.document.body.removeChild(span);

	return success ? Promise.resolve() : Promise.reject(new DOMException('The request is not allowed', 'NotAllowedError'));
}

export default copyClipboard;
```