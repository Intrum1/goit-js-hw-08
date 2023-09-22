import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const playerCurrentTime = 'videoplayer-current-time';

const saveCurrentTime = throttle(() => {
    player.getCurrentTime().then(currentTime => {
    localStorage.setItem(playerCurrentTime, currentTime);
    });
}, 1000);

function initializePlayer() {
    
    player.on('timeupdate', () => {
        saveCurrentTime();
    });

    const savedTime = localStorage.getItem(playerCurrentTime, '120');
    if (savedTime !== null) {
        player.setCurrentTime(savedTime).then(() => {
            return;
        });
    }
}
initializePlayer();    
