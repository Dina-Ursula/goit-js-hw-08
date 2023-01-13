import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onTimeUpdate = function (data) {
  localStorage.setItem(LOCAL_STORAGE_KEY, `${data.seconds}`);
};
const throttledFunction = throttle(onTimeUpdate, 1000);
player.on('timeupdate', throttledFunction);

const currentTime = +localStorage.getItem(LOCAL_STORAGE_KEY);
player.setCurrentTime(currentTime);
