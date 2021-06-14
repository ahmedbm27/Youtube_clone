
<script>
export let video;
export let opened;
</script>

<style>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 24px 15px 40px 15px;
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

<div class="container" class:smallSideNav={!opened}>

    <div class="thumbnailContainer">
        <div class="thumbnailImg"><img src="{video.snippet.thumbnails.medium.url}" alt="thumbnail"></div>
        <div class="time">3:34</div>
    </div>

    <div class="bottomPart">
        <div class="channelLogo"><img src="imgs/videos/thumbnails/1.jpg" alt="logo"></div>
        <div class="videoInfo">
            <div class="title">{video.snippet.title}</div>
            <div class="channelName">{video.snippet.channelTitle}</div>
            <div class="viewsDate">
                <div class="views">1.6M views</div>•
                <div class="date">1 month ago</div>
            </div>
        </div>
    </div>

</div>

