<script>
    export let video;
    export let opened;

    

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


    let views = convertStats();
</script>

<div class="container" class:smallSideNav={!opened}>
    <div class="thumbnailContainer">
        <div class="thumbnailImg">
            <img src={video.thumbnails.medium.url} alt="thumbnail" />
        </div>
        <div class="time">3:34</div>
    </div>

    <div class="bottomPart">
        <div class="channelLogo">
            <img src="imgs/videos/thumbnails/1.jpg" alt="logo" />
        </div>
        <div class="videoInfo">
            <div class="title">{video.title}</div>
            <div class="channelName">{video.channelTitle}</div>
            <div class="viewsDate">
                <div class="views">{views} views</div>
                •
                <div class="date">1 month ago</div>
            </div>
        </div>
    </div>
</div>

<style>

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0px 15px 30px 15px;
    flex: 1 1 20%;
    
    
}
.thumbnailContainer{
    position: relative;
    width: 100%;
    height: 100%;
    
}
.thumbnailContainer .thumbnailImg{
    
    
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
 
}
.videoInfo .viewsDate .views{
    margin-right: 5px;
}
.videoInfo .viewsDate .date{
    margin-left: 5px;
}
.videoInfo .channelName {
    font-size: 0.9rem;
}
.container.smallSideNav{
    flex: 1 1 18%;
}
</style>


