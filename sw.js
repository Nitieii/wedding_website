// var cacheName = 'sw-v1'

// const offlineUrl = 'offline/index.html'

// this.addEventListener('install', e => {
//     e.waitUntil(
//         caches.open(cacheName).then(cache => cache.addAll([
//             // '/media/offline/logo.svg',
//             offlineUrl
//         ]))
//     )
// })

// this.addEventListener('fetch', e => {
//     if (e.request.mode === 'navigate' || (e.request.method === 'GET' && e.request.headers.get('accept').includes('text/html'))) {
//         e.respondWith(fetch(e.request.url).catch(error => {
//             return caches.match(offlineUrl)
//         }))
//     }
//     return
// })

$(document).ready(function () {

    var s_round = '.s_round';

    $(s_round).hover(function () {
        $('.b_round').toggleClass('b_round_hover');
        return false;
    });

    $(s_round).click(function () {
        $('.flip_box').toggleClass('flipped');
        $(this).addClass('s_round_click');
        $('.s_arrow').toggleClass('s_arrow_rotate');
        $('.b_round').toggleClass('b_round_back_hover');
        return false;
    });

    $(s_round).on('transitionend', function () {
        $(this).removeClass('s_round_click');
        $(this).addClass('s_round_back');
        return false;
    });
});
