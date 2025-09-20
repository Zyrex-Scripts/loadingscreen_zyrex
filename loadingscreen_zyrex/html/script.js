// Keyboard controls:
// SPACE = pause/play music
// UP/DOWN ARROW = music volume
// LEFT/RIGHT ARROW = loading change/first loading
//
// Control info is displayed in UI

// Optimized loading screen script.js

document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const music = document.getElementById('bg-music');
    const statusDiv = document.getElementById('music-status');
    const showInfoBtn = document.getElementById('show-info-btn');
    const mainUi = document.getElementById('main-ui');
    const videoToggle = document.getElementById('video-toggle');
    let infoHidden = false;

    // All remaining parts for slideshow and devlog have been removed. Verified that only logic for music, UI and info panels remains.

    // Hide/show info panels
    function toggleInfo() {
        infoHidden = !infoHidden;
        document.querySelectorAll('.hideable').forEach(el => {
            el.classList.toggle('hidden', infoHidden);
        });
    }

    // Music status
    function updateMusicStatus() {
        if (!statusDiv) return;
        if (music.paused || music.currentTime === 0) {
            statusDiv.textContent = 'Volume: Off';
        } else {
            statusDiv.textContent = 'Volume: ' + Math.round(music.volume * 100) + ' %';
        }
    }

    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        switch (e.code) {
            case 'KeyP':
                if (music.paused || music.currentTime === 0) {
                    music.currentTime = 0;
                    music.play();
                } else {
                    music.pause();
                    music.currentTime = 0;
                }
                updateMusicStatus();
                e.preventDefault();
                break;
            case 'ArrowDown':
                music.volume = Math.max(0, music.volume - 0.1);
                updateMusicStatus();
                e.preventDefault();
                break;
            case 'ArrowUp':
                music.volume = Math.min(1, music.volume + 0.1);
                updateMusicStatus();
                e.preventDefault();
                break;
            case 'ArrowRight':
                toggleInfo();
                e.preventDefault();
                break;
        }
    });

    // Events for music status
    ['play', 'pause', 'volumechange'].forEach(ev => music.addEventListener(ev, updateMusicStatus));
    updateMusicStatus();

    // Info button (if exists)
    if (showInfoBtn) {
        showInfoBtn.addEventListener('click', () => {
            infoHidden = false;
            document.querySelectorAll('.hideable').forEach(el => el.classList.remove('hidden'));
        });
    }

    // First loading toggle (if exists)
    if (videoToggle && mainUi && showInfoBtn) {
        videoToggle.addEventListener('click', () => {
            const hidden = mainUi.classList.toggle('hide-ui');
            videoToggle.textContent = hidden ? 'First loading: On' : 'First loading: Off';
            showInfoBtn.style.display = hidden ? 'block' : 'none';
        });
    }
});
