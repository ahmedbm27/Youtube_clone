
<script>

</script>

<style>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 360px;
    flex-direction: column;
    margin: 0 15px 40px 15px;
}
.thumbnailContainer{
    position: relative;
    width: 360px;
    height: 202px;
}
.thumbnailContainer .thumbnailImg{
    width: 360px;
    height: 202px;  
    
}
.thumbnailContainer .thumbnailImg img{
    width: 100%;
    height: 100%;
}
.thumbnailContainer .time{
    position: absolute;
    bottom:4px;
    right: 4px;
    background-color: black;
    color: white;
    padding: 1px 4px;
    border-radius: 3px;
    font-size: 13px;
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
    font-size: 18px;
    color: black;
}
.videoInfo .viewsDate{
    display: flex;
    flex-direction: row;
    font-size: 14px;
 
}
.videoInfo .viewsDate .views{
    margin-right: 5px;
}
.videoInfo .viewsDate .date{
    margin-left: 5px;
}

</style>

<div class="container">

    <div class="thumbnailContainer">
        <div class="thumbnailImg"><img src="imgs/videos/thumbnails/1.jpg" alt="thumbnail"></div>
        <div class="time">3:34</div>
    </div>

    <div class="bottomPart">
        <div class="channelLogo"><img src="imgs/videos/thumbnails/1.jpg" alt="logo"></div>
        <div class="videoInfo">
            <div class="title">unboxing new laptop 2021</div>
            <div class="channelName">ZeeMe</div>
            <div class="viewsDate">
                <div class="views">1.6M views</div>•
                <div class="date">1 month ago</div>
            </div>
        </div>
    </div>

</div>

