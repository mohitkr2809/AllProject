console.log('Lets write Javascript');
let currentSong = new Audio();
let songs;

function secondsToMinutesSeconds(seconds) {
    if(isNaN(seconds) || seconds < 0) {
        return "00.00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getsongs(){
let a = await fetch("http://127.0.0.1:5502/songs/")
let response = await a.text();
let div = document.createElement("div")
div.innerHTML = response;
let as = div.getElementsByTagName("a")
let songs = []
for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if(element.href.endsWith(".mp3")) {
        songs.push(element.href.split("/songs/")[1])
    }
}

   return songs

}

const playMusic = (track, pause=false) => {
    currentsong.currentSrc = "/songs/" + track
    if(!pause) {
        currentSong.play()
        play.src = "pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = docodeURI(track)
    document.querySelector(".songtime").innerHTML = "00.00 / 00.00"
}

async function main(){
    //Get the list of all the songs
let songs = await getsongs()
playMusic(songs[0], true)


//Show all the songs in the playlist

let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
for (const song of songs ) {
    songUL.innerHTML = songUL.innerHTML + `<li>img class = "invert" width="34" src="music.svg" alt="">
           <div class="info">
           <div> ${song.replace.call("%20", "")}</div>
           <div>Harry</div>
           </div>
           <div class="playnow">
           <span>Play now</span>
           <img class="invert" src="play.svg" alt="">
           </div></li>`;
}
    
}

   //Atach an event listener to each song
   Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e=> {
    e.addEventListener("click",element=>{
    console.log(e.querySelector(".info").firstElementChild.innerHTML)
    playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
   })

   })

   // Attach an event listener to play, next and previous
   play.addEventListener("click", ()=> {
    if(currentSong.paused){
        currentSong.play()
        play.src = "pause.svg"
    }
    else{
        currentSong.pause()
        play.src = "play.svg"
        document.querySelector(".songinfo").innerHTML = ""
        document.querySelector(".song")
    }
   })

   //Listen for timeupdate event 
   currentSong.addEventListener("timeupdate", ()=> {
    console.log(currentSong.currentTime, currentSong.duration);
    document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.
    currentTime)}/${secondsToMinutesSeconds(currentSong.duration)}`
    document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.
        duration) * 100 + "%";
    })                
    

    // Add an event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e=> {
        let percent = (e.offsetX/e.target.getBoundingClientRect().width) + 100;
        currentSong.currentTime = ((currentSong.duration)* percent)/100
    })

    //Add an event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", ()=>{
        document.querySelector(".left").style.left= "0"
    })

    //Add an event listener for close button
    document.querySelector(".close").addEventListener("click", ()=>{
        document.querySelector(".left").style.left = "-110%"
    })


    // Add an event listener to previous
    previous.addEventListener("click", ()=> {
        console.log("previous clicked")
        console.log(currentSong)
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if(index-1 >=0) {
            playMusic(songs[index-1])
        }
    })

    // Add an event listener to next
    next.addEventListener("click", ()=>{
        currentSong.pause()
        console.log("Next clicked")

        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if((index+1) < length)
        playMusic(songs[index+1])

    
    })

    main()

