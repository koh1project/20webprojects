const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
// Play & pause video
const toggleVideoStatus = () => {
    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
};
// Update play icon
const updatePlayIcon = () => {
    if (video.paused) {
        playBtn.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }
    else {
        playBtn.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
};
// update progress & timestamp
const updateProgress = () => {
    progress.value = (video.currentTime / video.duration) * 100;
    // Get minutes
    let minsNum = Math.floor(video.currentTime / 60);
    let mins;
    if (minsNum < 10) {
        mins = '0' + minsNum.toString();
    }
    else {
        mins = minsNum.toString();
    }
    // Get seconds
    let secsNum = Math.floor(video.currentTime % 60);
    let secs;
    if (secsNum < 10) {
        secs = '0' + secsNum.toString();
    }
    else {
        secs = secsNum.toString();
    }
    timestamp.innerHTML = `${mins}:${secs}`;
};
// Set video time to progress
const setVideoProgress = () => {
    video.currentTime = (progress.value * video.duration) / 100;
};
// Stop video
const stopVideo = () => {
    video.currentTime = 0;
    video.pause();
};
// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
playBtn.addEventListener('click', toggleVideoStatus);
stopBtn.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
