const video = document.getElementById('video') as HTMLVideoElement;
const playBtn = document.getElementById('play') as HTMLButtonElement;
const stopBtn = document.getElementById('stop') as HTMLButtonElement;
const progress = document.getElementById('progress') as HTMLProgressElement;
const timestamp = document.getElementById('timestamp') as HTMLSpanElement;

// Play & pause video
const toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

// Update play icon
const updatePlayIcon = () => {
  if (video.paused) {
    playBtn.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    playBtn.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
};

// update progress & timestamp
const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;
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
