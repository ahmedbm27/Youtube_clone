<script>
import { validate_slots } from "svelte/internal";


export let video;
export let opened;
export let player=false;

    

    let convertStats = () => {
        let views = parseInt(video.statistics.viewCount);
        if (views>= 10000000) {
            views<= 10999999
                ? (views= views.toString().slice(0, 2) + "M")
                : (views= views.toString().slice(0, 2) + "M");
        }
        if (views>= 1000000) {
            views<= 1009999
                ? (views= views.toString().slice(0, 1) + "M")
                : (views=
                      views.toString().slice(0, 1) +
                      "." +
                      views.toString().slice(1, 2) +
                      "M");
        }
        if (views>= 100000) {
            views<= 100999
                ? (views= views.toString().slice(0, 3) + "k")
                : (views= views.toString().slice(0, 3) + "k");
        }

        if (views>= 10000) {
            views<= 10999
                ? (views= views.toString().slice(0, 2) + "k")
                : (views= views.toString().slice(0, 2) + "k");
        }

        if (views>= 1000) {
            views<= 1099
                ? (views= views.toString()[0] + "k")
                : (views= views.toString()[0] + "." + views.toString()[1] + "k");
        }

        return views
    };


    let getDate = () =>{
        let current = firebase.firestore.Timestamp.now().toDate() 
        let publishDate =  new Date(video.publishTime)
        let difference = (current.getTime() - publishDate.getTime()) / (1000 * 3600 * 24) // in days
        if(difference > 365){
            difference = ~~(difference/365) 
            difference > 1 ?  difference = difference +" years" : difference = difference + " year"
            return difference
        }
        if(difference > 30){
            difference = ~~(difference/30)
            difference > 1 ?  difference = difference +" months" : difference = difference + " month"
            return difference
        }

        difference = ~~difference
        difference > 1 ?  difference = difference +" days" : difference = difference + " day"
        return difference
        
    }

    function convert_time() {
    
    let a = video.duration.match(/\d+/g)
    let duration;

    if(a.length == 3) {
        if(parseInt(a[1]) < 10 ){
            if (parseInt(a[2]) < 10){
                duration = parseInt(a[0]) + ":0" + parseInt(a[1]) + ":0" + parseInt(a[2]);
            }else{
                duration = parseInt(a[0]) + ":0" + parseInt(a[1]) + ":" + parseInt(a[2]);
            }
        }else{
            if (parseInt(a[2]) < 10){
                duration = parseInt(a[0]) + ":" + parseInt(a[1]) + ":0" + parseInt(a[2]);
            }else{
                duration = parseInt(a[0]) + ":" + parseInt(a[1]) + ":" + parseInt(a[2]);
            }
        }

    }

    if(a.length == 2) {
        if(parseInt(a[1]) < 10 ){
            duration = parseInt(a[0]) + ":0" + parseInt(a[1])
        }else{
            duration = parseInt(a[0]) + ":" + parseInt(a[1])
        }
    }

    if(a.length == 1) {
        duration = "0:" + parseInt(a[0])
    }
    console.log(duration);
    return duration
}
    let videoTime = convert_time()
    let publishDate =  getDate()
    let views = convertStats();
</script>

<a href="/watch?v={video.id}"  class="container" class:smallSideNav={!opened} class:player>
   
    <div class="thumbnailContainer">
        <div class="thumbnailImg" >
            <img src={video.thumbnails.medium.url} alt="thumbnail" />
        </div>
        <div class="time">{videoTime}</div>
    </div>
   

    <div class="bottomPart" class:player>
        <div class="channelLogo">
            <img src="imgs/channelLogo.jpg" alt="logo" />
        </div>
        <div class="videoInfo">
            <div class="title">{video.title}</div>
            <div class="channelName">{video.channelTitle}</div>
            <div class="viewsDate">
                <div class="views">{views} views</div>
                <div class="dot">•</div>
                <div class="date">{publishDate} ago</div>
            </div>
        </div>
    </div>
</a>

<style>

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0px 15px 30px 15px;
    flex: 1 1 20%;
    text-decoration: none; 
    
}
.container.player{
    margin: 0;
    flex-direction: row;
}
.container.player .thumbnailContainer{
    margin-right: 10px;
}
.bottomPart.player{
    margin-top: 0;
}
.bottomPart.player .channelLogo {
    display: none;
}
.videoInfo .title{
    cursor: auto;
    -webkit-user-select: text;
    -moz-select: text;
    -ms-select: text;
    user-select: text;
}
.thumbnailContainer{
    position: relative;
    width: 100%;
    height: 100%;
    
}

.thumbnailContainer .thumbnailImg img{
    width: 100%;
    height: 100%;
}
.thumbnailContainer .time{
    position: absolute;
    bottom:8px;
    right: 4px;
    background-color: rgba(0,0,0,.8);
    color: white;
    padding: 1px 4px;
    border-radius: 3px;
    font-size: 0.75rem;
    font-weight: 600;
}
.bottomPart{
    display: flex;
    flex-direction: row;
    margin-top: 12px;
    width: 100%;
}
.bottomPart .channelLogo{
    margin-right: 15px;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
}
.bottomPart .channelLogo img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.videoInfo{
    display: flex;
    flex-direction: column; 
    color: #727272;
}
.videoInfo .title{
    font-weight: 600;
    font-size: 1rem;
    color: black;
}
.videoInfo .viewsDate{
    display: flex;
    flex-direction: row;
    font-size: 0.8rem;
    flex-wrap: wrap;
 
}
.videoInfo .viewsDate .dot{
    margin:0 5px
}

.videoInfo .channelName {
    font-size: 0.9rem;
}
.container.smallSideNav{
    flex: 1 1 18%;
}
@media only screen and (max-width:1350px){
    .container{
        flex: 1 1 20%;
    }
    .container.smallSideNav{
    flex: 1 1 20%;
} 
}
@media only screen and (max-width:1100px){

    .container{
        flex: 1 1 23%;
    }
    .container.smallSideNav{
    flex: 1 1 23%;
} 
}

@media only screen and (max-width:800px){
.container{
    flex: 1 1 51%;
}
.container.smallSideNav{
flex: 1 1 51%;
} 
.container{
    margin: 0px 0px 30px 0px;
}
.bottomPart{
    margin-left: 12px;
    width: 95%;
}
}
</style>


