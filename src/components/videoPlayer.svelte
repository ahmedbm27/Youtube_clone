
<script>
import {onMount} from 'svelte'
import YouTube from 'svelte-youtube';
import {db} from "../firebase.js"
export let id
export let data="";

let height;
let width;
let videoSizeChecker= () =>{
let w = window.innerWidth;
let h = window.innerHeight;
if(w > 1754){
  width = 1280;
  height=720;
}
if(w < 1755 && w > 1114){
  width = 1280 - (1755 - w);
  height=720 - (1755-w)/2;
}
if(w < 1115 && w > 999){
  width = 640;
  height=360;
}
if(w < 1000){
  width = 969 - (999-w);
  height=534 - (999-w)/2;
}
return width,height
}
videoSizeChecker()
let openReport = false;
let exp =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
const options = {
    height: height,
    width: width,
    //  see https://developers.google.com/youtube/player_parameters
    playerVars: {
      autoplay: 0
    }
  };




let video =""
let publishDate ="";
let description =""
let getMyvideo = async () =>{
   
      video = data.videos.filter(obj => {
          return obj.id === id
          })
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
        publishDate = new Date(video[0].publishTime)
        publishDate =  months[publishDate.getMonth()] + " " + publishDate.getDate() + ", " + publishDate.getFullYear()

}



getMyvideo();

window.addEventListener('resize',async ()=>{
  videoSizeChecker();
  console.log(width,height);
  document.getElementsByClassName("videoPlayer")[0].childNodes[0].style.width=width+"px"
  document.getElementsByClassName("videoPlayer")[0].childNodes[0].style.height=height+"px"
})

</script>

<div class="PlayerContainer">
{#if Object.keys(video).length != 0}
<YouTube videoId={id} {options} class="videoPlayer" />
<div class="title">{video[0].title}</div>
<div class="viewsDate">
  <div class="views">{video[0].statistics.viewCount} views</div>
  •
  <div class="date">{publishDate}</div>
</div>
<div class="menuInfoContainer">
  <div class="likes menuItem"><img src="imgs/icons/likes.svg" alt="likes"> {video[0].statistics.likeCount}</div>
  <div class="dislikes menuItem"><img src="imgs/icons/dislikes.svg" alt="dislikes"> {video[0].statistics.dislikeCount}</div>
  <div class="share menuItem"><img src="imgs/icons/share.svg" alt="share"> Share</div>
  <div class="save menuItem"><img src="imgs/icons/save.svg" alt="save"> Save</div>
  <div class="more menuItem" on:click="{()=>openReport=!openReport}">
    <img src="imgs/icons/more.svg" alt="more">
    <div class="report menuItem" class:openReport><img src="imgs/icons/report.svg" alt="report"> Report</div>
  </div>
</div>
<hr>
<div class="channelInfo">
  <div class="channelLogo">
    <img src="imgs/channelLogo.jpg" alt="logo" />
  </div>
  <div class="info">
    <div class="channelTitle">{video[0].channelTitle}</div>
    <div class="subs">699K subscribers</div>
  </div>
</div>
<div class="description">
  {@html
    video[0].description.replace(/(#\S+)/g, '<a href="#" >$1</a>')
    .replace(/\n/g, "</br>").replace(exp,"<a href='$1' target='_blank'>$1</a>")
  }
</div>
<hr>
{/if}
</div>



<style>
 
  .PlayerContainer{
    width: 100%;
    margin-right: 25px;
  }
.info .subs{
  font-size: 0.8rem;
  color: #727272;
  margin-top: 15px;
}
.channelInfo{
display: flex;
flex-direction: row;
}

.channelLogo{
    margin-right: 15px;
    width: 48px;
    height: 48px;
    flex-shrink: 0;
}
.channelLogo img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.channelInfo .channelTitle{
    font-weight: 600;
    font-size: 1rem;
    color: black;
    margin: 0;
}
.title{
  font-weight: 400;
  font-size: 20px;
  margin-top: 15px;
}

.viewsDate{
    display: flex;
    flex-direction: row;
    font-size: 0.9rem;
    color: #727272;
    margin-top: 15px;
}
.viewsDate .views{
    margin-right: 5px;
}
.viewsDate .date{
    margin-left: 5px;
}
.menuInfoContainer{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10px;
}
.menuItem {
    display: flex;
    flex-direction: row;
    height: 30px;
    padding: 0 5px;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #909090;
}
.menuItem img{
    width: 25px;
    filter: invert(59%) sepia(1%) saturate(756%) hue-rotate(68deg) brightness(97%) contrast(96%);
    margin-right: 5px;
}
hr{
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    border: none;
   
}
.more{
  position: relative;
}
.report{
  display: none;
  position: absolute;
  background-color: white;
  padding: 12px 24px;
  border-radius: 5px;
  bottom: -55px;
  left:-10px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);;
}
.report.openReport{
  display: flex;
}
.description{
  margin-top: 20px;
  max-width: 615px;
  font-size: 0.9rem;
  margin-left: 64px;
}

@media only screen and (max-width:999px){
  .PlayerContainer{
    margin-right: 0;
  }
}
</style>

