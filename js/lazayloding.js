document.addEventListener('DOMContentLoaded', function() {
    var lazyIframes = [].slice.call(document.querySelectorAll('iframe.lazy'));
    if ("IntersectionObserver" in window) {
        let lazyIframeObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let iframe = entry.target;
                    iframe.src = iframe.dataset.src;
                    iframe.classList.remove('lazy');
                    lazyIframeObserver.unobserve(iframe);
                }
            });
        });
        lazyIframes.forEach(function(iframe) {
            lazyIframeObserver.observe(iframe);
        });
    }
});
