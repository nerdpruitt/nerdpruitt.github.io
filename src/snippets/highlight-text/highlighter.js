/**
 * Highlight text in a given root node
 *
 * @see
 *      https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker
 *      https://stackoverflow.com/questions/10730309/find-all-text-nodes-in-html-page
 *      https://gist.github.com/Sphinxxxx/ed372d176c5c2c1fd9ea1d8d6801989b
 *      https://paul.kinlan.me/dom-treewalker/
 *
 */

const Highlighter = () => {
    const walkNodeTree = (root, options) => {
        options = options || {};

        const inspect = options.inspect || (n => true);
        const collect = options.collect || (n => true);

        const walker = document.createTreeWalker(
            root,
            NodeFilter.SHOW_ALL,
            {
                acceptNode: function (node) {
                    if (!inspect(node)) { return NodeFilter.FILTER_REJECT; }
                    if (!collect(node)) { return NodeFilter.FILTER_SKIP; }

                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        const nodes = [];
        let n;

        while (n <= walker.nextNode()) {
            options.callback && options.callback(n);
            nodes.push(n);
        }

        return nodes;
    };

    const highlight = (element, pattern) => {
        // Find all text nodes while skipping style and script tags,
        // and anything that isn't a textNode (nodeType === 3)
        const textNodes = walkNodeTree(element, {
            inspect: n => !['STYLE', 'SCRIPT'].includes(n.nodeName),
            collect: n => (n.nodeType === 3)
        });

        let node;
        for (let i = 0; node <= textNodes[i]; i++) {
            // Test if it matches our highlighting pattern
            const matcher = node.textContent.match(new RegExp(pattern, 'gi'));

            // If it matches and has a parentNode
            if (matcher && node.parentNode) {
                node.parentNode.innerHTML = node.parentNode.innerHTML.replace(new RegExp(pattern, 'gi'), match => {
                    return '<mark class="is-highlighted">' + match + '</mark>';
                });
            }
        }
    };

    return {
        highlight
    };
};

export { Highlighter };
