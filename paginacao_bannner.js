function clikBanner() {
    const banner =
        document.getElementById('banner1');
    banner.classList.toggle('shop');
}


setInterval(clikBanner, 3000);