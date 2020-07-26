//put videos names here
const videos =  ["video1.mkv","video2.mkv","video3.mkv"]
//other html tags
const body = document.querySelector("body")
const controls = document.querySelectorAll("button")
const video = document.querySelector("video")
//buttons
const btnPlay = controls[0]
const btnPause = controls[1]
const btnStop = controls[2]
const btnVideo = controls[3]
//progress bar and volume control
const progress = document.querySelector("#progress")
const volume = document.querySelector("#volume")
//display time
const currentTime = document.querySelector("#currentTime")
const totalTime = document.querySelector("#totalTime")

//play-video
btnPlay.addEventListener("click", (event) => {
    event.preventDefault
    video.play()
})

//pause-video
btnPause.addEventListener("click", (event) => {
    event.preventDefault
    video.pause()
})

//stop-video
btnStop.addEventListener("click", (event) => {
    event.preventDefault
    video.pause()
    video.currentTime = 0
})

//next-video
let vidPos = 0
btnVideo.addEventListener("click",(event)=>{
    
    vidPos++
    if(vidPos == videos.length){
        vidPos = 0
    }
    video.src = videos[vidPos]
    setTimeout(loadTotalTime,100);
})


//move progress bar
video.addEventListener("timeupdate",()=>{
    progress.max = String(video.duration)
    progress.value = (video.currentTime)
    ajustCurrentTime()
})

//adjust volume
volume.addEventListener("input",()=>{
    video.volume = volume.value
})

//change video current time 
progress.addEventListener("input",()=>{
    video.currentTime = progress.value
})

//show current time and total duration
const loadTotalTime = ()=>{
    let mins = video.duration/60
    let seg = video.duration%60
    totalTime.innerHTML = `<a>${Math.floor(mins)}:${Math.floor(seg)}</a>`
}
const ajustCurrentTime = ()=>{
    let mins = video.currentTime/60
    let seg = video.currentTime%60
    currentTime.innerHTML = `<a>${Math.floor(mins)}:${Math.floor(seg)}</a>`
}