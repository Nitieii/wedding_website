$(document).ready(function () {
    // delay for 2 seconds
    setTimeout(function () {
        makeItRain();
    }
        , 3000
    );

    var audio = new Audio('audio/marry-you.mp3');

    $(document).click(function () {
        makeItRain();
        // if (audio.paused) {
        //     audio.play().catch(function (e) {
        //         console.error('Error playing audio:', e);
        //     });
        // }
    });

    var s_round = '.s_round';

    $(s_round).hover(function () {
        $('.b_round').toggleClass('b_round_hover');
        return false;
    });

    $(s_round).click(function () {
        $('.slider').toggleClass('hidden');

        $('.flip_box').toggleClass('flipped');
        $(this).addClass('s_round_click');
        $('.s_arrow').toggleClass('s_arrow_rotate');
        $('.b_round').toggleClass('b_round_back_hover');

        makeItRain();

        if (audio.paused) {
            audio.play().catch(function (e) {
                console.error('Error playing audio:', e);
            });
        }

        return false;
    });

    $(s_round).on('transitionend', function () {
        $(this).removeClass('s_round_click');
        $(this).addClass('s_round_back');
        return false;
    });

    $('.address-btn').click(function () {
        // pause the audio
        audio.pause();
    });
});

function makeItRain() {
    var end = Date.now() + (2 * 1000);

    var colors = ['#9DC5ED', '#D97EB9'];

    function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    };
    frame();
}

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function showDesktopMessage() {
    document.getElementById('desktop-message').style.display = 'block';
    document.querySelector('.container').style.display = 'none';
}

if (!isMobile()) {
    showDesktopMessage();
}

window.addEventListener('resize', function () {
    if (!isMobile()) {
        showDesktopMessage();
    } else {
        document.getElementById('desktop-message').style.display = 'none';
        document.querySelector('.container').style.display = 'block';
    }
});
