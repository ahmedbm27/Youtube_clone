<script>
    let hidden = false
    export let opened;

</script>


<style>
.container{
    width: 240px;
    min-width: 240px;
    min-height:240px;
    background-color: white;
    height: 100vh;
    
}
.logoMenuBtn{
    display: flex;
    flex-direction: row;
    padding: 0 13px 0 13px;
    align-items: center;
    display: none;
}
.logoMenuBtn .closeNav img{
    width: 30px;
    height: 30px;
    padding: 13px;
    filter: invert(38%) sepia(65%) saturate(0%) hue-rotate(
208deg
) brightness(88%) contrast(104%);
cursor: pointer;
}
.logoMenuBtn .logo img {
    width: 80px;
    height: 24px;
    padding: 13px;
}
.menuItem {
    display: flex;
    flex-direction: row;
    height: 48px;
    padding: 0 24px;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
}
.menuItem.home{
    background-color: #E5E5E5;
    font-weight: 600;
}
.menuItem:hover{
    background-color:#D9D9D9 ;
}


.menuItem img{
    width: 25px;
    filter: invert(38%) sepia(65%) saturate(0%) hue-rotate(
208deg
) brightness(88%) contrast(104%);
    margin-right: 24px;
}
hr{
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    border: none;
}
.showMoreItems{
    display: none;
}

.showMoreItems.hidden{
    display: block;
}
.showMore.hidden img{
    transform: rotate(180deg);
}

.baseMenuSection{
    padding: 0 13px 0 0;
}

</style>
{#if opened}
<div class="container">
    <div class="logoMenuBtn">
        <div class="closeNav"><img src="imgs/icons/menu.svg" alt="ytb"></div>
        <div class="logo"><img src="imgs/logo.svg" alt="ytb"></div>
    </div>
    <div class="baseMenuSection">
        <div class="home menuItem">
            <img src="imgs/icons/home.svg" alt="">
            <div class="title">Home</div>
        </div>
        <div class="explore menuItem">
            <img src="imgs/icons/explore.svg" alt="">
            <div class="title">Explore</div>
        </div>
        <div class="subs menuItem">
            <img src="imgs/icons/subs.svg" alt="">
            <div class="title">Subscriptions</div>
        </div>
        <hr>
        <div class="librarySection">
            <div class="library menuItem">
                <img src="imgs/icons/library.svg" alt="">
                <div class="title">Library</div>
            </div>

            <div class="history menuItem">
                <img src="imgs/icons/history.svg" alt="">
                <div class="title">History</div>
            </div>
            <div class="yourVideos menuItem">
                <img src="imgs/icons/yourVideos.svg" alt="">
                <div class="title">Your videos</div>
            </div>
            <div class="watchLater menuItem">
                <img src="imgs/icons/watchLater.svg" alt="">
                <div class="title">Watch later</div>
            </div>
            <div class="likedVideos menuItem">
                <img src="imgs/icons/likedVideos.svg" alt="">
                <div class="title">Liked videos</div>
            </div>

         

            <div class="showMoreItems" class:hidden >
                <div class="menuItem">
                    <img src="imgs/icons/showMoreElement.svg" alt="">
                    <div class="title">Lorem lorem</div>
                </div>
                <div class="menuItem">
                    <img src="imgs/icons/showMoreElement.svg" alt="">
                    <div class="title">Lorem lorem</div>
                </div>
                <div class="menuItem">
                    <img src="imgs/icons/showMoreElement.svg" alt="">
                    <div class="title">Lorem lorem</div>
                </div>
            </div>
            <div 
            class="showMore menuItem" 
            class:hidden
            on:click={()=>hidden=!hidden}>
                <img src="imgs/icons/showMore.svg" alt="">
                <div class="title">Show more</div>
            </div>
            <hr>

            <div class="gaming menuItem">
                <img src="imgs/icons/subs.svg" alt="">
                <div class="title">Gaming</div>
            </div>
            <div class="live menuItem">
                <img src="imgs/icons/subs.svg" alt="">
                <div class="title">Live</div>
            </div>
            <div class="sports menuItem">
                <img src="imgs/icons/subs.svg" alt="">
                <div class="title">Sports</div>
            </div>
            <hr>
            <div class="settings menuItem">
                <img src="imgs/icons/subs.svg" alt="">
                <div class="title">Settings</div>
            </div>
            <div class="reportHistory menuItem">
                <img src="imgs/icons/subs.svg" alt="">
                <div class="title">Report history</div>
            </div>
            <div class="help menuItem">
                <img src="imgs/icons/subs.svg" alt="">
                <div class="title">Help</div>
            </div>
            <div class="feedback menuItem">
                <img src="imgs/icons/subs.svg" alt="">
                <div class="title">Send feedback</div>
            </div>
            <hr>


        </div>
        
        
    </div>
</div>
{/if}