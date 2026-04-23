let songImage = document.getElementById("coverArt");
let playPause = document.getElementById("play")
let previous = document.getElementById("previous")
let next = document.getElementById("next")
let loop = document.getElementById("loop")


const playhead = document.getElementById("playhead");



//update cover image


//stuff to keep track of the song playing
const audio = document.createElement("audio");
let currentSongIndex = 0;

//auto next song
function autoNext() {
  if (isLooping) {
    sound.play(); // repeat same song
    return;
  }
currentIndex = (currentIndex + 1) % songs.length;
  playSong(currentIndex);
}

//previous functions
previous.addEventListener("click", function(){
    console.log("previous has been clicked")
    

    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;

    playSong(currentSongIndex);

    if (sound.seek() > 3) {
  sound.seek(0); // restart instead of going previous
} else {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  playSong(currentIndex);
}

})
//play pause

let isPlaying = false;

playPause.addEventListener("click", function(){
    if (!sound)  return;

    if (sound.playing()) {
        sound.pause();
        playPause.src = "../media/control buttons/07 play.png"
        isPlaying = false
    }
    else {
        sound.play();
        playPause.src = "./media/control buttons/09 paused.png"
        isPlaying = true
    }

})

//next button
next.addEventListener("click", function(){
    console.log("Next track...")
  currentIndex = (currentIndex + 1) % songs.length;

  playSong(currentIndex);
});

//loop stuff

let isLooping = false

loop.addEventListener("click", function(){
    if (!sound) return;

  isLooping = !isLooping;

  sound.loop(isLooping);

  console.log("Looping:", isLooping);
 if (isLooping) {
  loop.src = "./media/control buttons/loopActive.png";
} else {
  loop.src = "./media/control buttons/loop.png";
}
})

//stuff for automatically switching to next song




// songs info
const songs = [
    {   cover:"../media/music/covers/song1.jpg",
        name: "When the stardust hits",
        trackNo: "1.",
        duration: "3:31",
        audio: "../media/music/song1.mp3"
    },
    {   cover:"../media/music/covers/song2.jpg",
        name: "Boss of me",
        trackNo: "2.",
        duration: "2:58",
        audio: "../media/music/song2.mp3"
    },

    {   cover:"../media/music/covers/song3.jpg",
        name: "Luxury",
        trackNo: "3.",
        duration: "3:26",
        audio: "../media/music/song3.mp3"
    },

    {   cover:"../media/music/covers/song4.jpg",
        name: "glitter ✩‧₊˚",
        trackNo: "4.",
        duration: "3:36",
        audio: "../media/music/song4.mp3"
    },

    {   cover:"../media/music/covers/song5.jpg",
        name: "Heaven",
        trackNo: "5.",
        duration: "2:31",
        audio: "../media/music/song5.mp3"
    },

    {   cover:"../media/music/covers/song6.jpg",
        name: "Romance",
        trackNo: "6.",
        duration: "3:31",
        audio: "../media/music/song6.mp3"
    },

    {   cover:"../media/music/covers/song7.jpg",
        name: "Sunny Duet",
        trackNo: "7.",
        duration: "3:34",
        audio: "../media/music/song7.mp3"
    },

    {   cover:"../media/music/covers/song8.jpg",
        name: "Girl like me",
        trackNo: "8.",
        duration: "2:26",
        audio: "../media/music/song8.mp3"
    },

    {   cover:"../media/music/covers/song9.jpg",
        name: "GOODBYENOKUBAY - SAYONARA!!",
        trackNo: "9.",
        duration: "2:46",
        audio: "../media/music/song9.mp3"
    },

    {   cover:"../media/music/covers/song10.jpg",
        name: "hyvät herrat – Rework",
        trackNo: "10.",
        duration: "2:09",
        audio: "../media/music/song10.mp3"
    },
]

//playerhead stuff
function updatePlayhead() {
  if (!sound) return;

  const currentTime = sound.seek();
  const duration = sound.duration();

  if (duration) {
    playhead.value = (currentTime / duration) * 100;
  }

  requestAnimationFrame(updatePlayhead);
}
//playhead updating song depending where its at
playhead.addEventListener("input", function () {
  if (!sound) return;

  const duration = sound.duration();
  const seekTime = (playhead.value / 100) * duration;

  sound.seek(seekTime);
});



console.log("i am hugnry")

//creating track names

window.addEventListener("DOMContentLoaded", () => {
  const trackHolder = document.querySelector(".trackholder");

  songs.forEach((song, index) => {
    const track = document.createElement("div");
    track.classList.add("track");

    track.innerHTML = `
      <p>${song.trackNo}</p>
      <p>${song.name}</p>
      <p>${song.duration}</p>
    `;
    //adding event listener for playing songs or whatever
    track.addEventListener("click",() =>{
        playSong(index)
        playPause.src = "../media/control buttons/09 paused.png"
        isPlaying = true
    })
    trackHolder.appendChild(track);
  });
});

let sound = null;
let currentIndex = 0;

function playSong(index) {
  const song = songs[index];
  currentIndex = index;

// stop previous song
  if (sound) {
    sound.stop();
    }

    sound = new Howl({
    src: [song.audio],
    html5: true,
    loop: isLooping,
    onend: autoNext,
    
    });
    
    sound.play();
    updatePlayhead();
    //update cover
    songImage.src = song.cover;
    console.log("Playing:", song.name);


}

