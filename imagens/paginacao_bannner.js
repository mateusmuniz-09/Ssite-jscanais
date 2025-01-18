function clikBanner() {
    const banner =
        document.getElementById('banner');
    banner.classList.toggle('shop');
}


setInterval(clikBanner, 3000);