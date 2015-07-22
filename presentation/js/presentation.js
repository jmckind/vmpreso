// Initialize the presentation
(function() {

    // Full list of configuration options available at:
    // https://github.com/hakimel/reveal.js#configuration
    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,

        transition: 'slide', // none/fade/slide/convex/concave/zoom

        // Optional reveal.js plugins
        dependencies: [
            { src: '/lib/reveal.js-3.1.0/lib/js/classList.js', condition: function() { return !document.body.classList; } },
            { src: '/lib/reveal.js-3.1.0/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
            { src: '/lib/reveal.js-3.1.0/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
            { src: '/lib/reveal.js-3.1.0/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
            { src: '/lib/reveal.js-3.1.0/plugin/zoom-js/zoom.js', async: true },
            { src: '/lib/reveal.js-3.1.0/plugin/notes/notes.js', async: true }
        ]
    });

})();
