<script>
    let hidden = false
    export let opened;
    export let player

    let openCloseMenu = () =>{
    opened = true;
    console.log(opened);
    }

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
.opened{
    display: none;
}
.menuItem.smallSideNav{
    flex-direction: column !important;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 600;
    padding: 16px 5px 14px 5px;
}
.menuItem.smallSideNav img{
    margin: 0;
}
.container.smallSideNav{
    width: max-content;
    min-width: max-content;
}
.baseMenuSection.smallSideNav{
    padding: 0;
}
#smallMenu,#bigMenu{
    display: none;
}
#bigMenu{
    transition: left 300ms cubic-bezier(0.77, 0, 0.175, 1);
    
}
@media only screen and (max-width:800px){
.container.smallSideNav{
    position: fixed;
    bottom: 0;
    z-index: 3;
    height: max-content;
    min-height: fit-content;
    
}
.baseMenuSection.smallSideNav{
    display: flex;
}
.container.smallSideNav .baseMenuSection{
    width: 100vw;
}

.menuItem.smallSideNav {
    padding: 10px 0;
    width: 100%;
}
.baseMenuSection.smallSideNav .librarySection{
    flex-direction: column !important;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 600;
    width: 100%;
    height: max-content;
}
}


#defaultMenu.player{
    display: none !important;
}
#smallMenu.player{
    display: none !important;
}
#bigMenu.bigMenuOpen.player{
    display: block;
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    
}
#bigMenu.bigMenuNotOpen.player{
    display: block;
    position: absolute;
    z-index: 5;
    top: 0;
    left:-240px;
        
}

    @keyframes slideMenuToRight {
        from {left: -240px;}
        to {left: 0;}
    }
    @keyframes slideMenuToLeft {
        from {left: 0;}
        to {left: -240px;}
    }
    #bigMenu.player .logoMenuBtn{
        display: flex;
    }
    .background.bigMenuOpen.player{
        background-color: rgba(0, 0, 0, 0.5);
        display: block;
        position: absolute;
        z-index: 4;
        top: 0;
        width: 100vw;
        height: 100vh;
    }
@media only screen and (max-width:1350px){
    #defaultMenu{
        display: none;
    }
    #smallMenu{
        display: flex;
    }
    #bigMenu.bigMenuOpen{
        display: block;
        position: absolute;
        z-index: 5;
        top: 0;
        left: 0;
        
    }
    #bigMenu.bigMenuNotOpen{
        display: block;
        position: absolute;
        z-index: 5;
        top: 0;
        left:-240px;
        
        
    }

    @keyframes slideMenuToRight {
        from {left: -240px;}
        to {left: 0;}
    }
    @keyframes slideMenuToLeft {
        from {left: 0;}
        to {left: -240px;}
    }
    #bigMenu .logoMenuBtn{
        display: flex;
    }
    .background.bigMenuOpen{
        background-color: rgba(0, 0, 0, 0.5);
        display: block;
        position: absolute;
        z-index: 4;
        top: 0;
        width: 100vw;
        height: 100vh;
    }
}
</style>

<div class="container" class:smallSideNav={!opened} id="defaultMenu" class:player>
    <div class="logoMenuBtn">
        <div class="closeNav"><img src="imgs/icons/menu.svg" alt="ytb"></div>
        <div class="logo"><img src="imgs/logo.svg" alt="ytb"></div>
    </div>
    <div class="baseMenuSection" class:smallSideNav={!opened} >
        <div class="home menuItem" class:smallSideNav={!opened}>
            <img src="imgs/icons/home.svg" alt="">
            <div class="title" >Home</div>
        </div>
        <div class="explore menuItem" class:smallSideNav={!opened}>
            <img src="imgs/icons/explore.svg" alt="">
            <div class="title" >Explore</div>
        </div>
        <div class="subs menuItem" class:smallSideNav={!opened}>
            <img src="imgs/icons/subs.svg" alt="">
            <div class="title" >Subscriptions</div>
        </div>
        <hr class:opened={!opened}>
        <div class="librarySection">
            <div class="library menuItem" class:smallSideNav={!opened}>
                <img src="imgs/icons/library.svg" alt="">
                <div class="title" >Library</div>
            </div>

            <div class="history menuItem" class:opened={!opened}>
                <img src="imgs/icons/history.svg" alt="">
                <div class="title">History</div>
            </div>
            <div class="yourVideos menuItem" class:opened={!opened}>
                <img src="imgs/icons/yourVideos.svg" alt="">
                <div class="title">Your videos</div>
            </div>
            <div class="watchLater menuItem" class:opened={!opened}>
                <img src="imgs/icons/watchLater.svg" alt="">
                <div class="title">Watch later</div>
            </div>
            <div class="likedVideos menuItem" class:opened={!opened}>
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
            class:opened={!opened}
            on:click={()=>hidden=!hidden}>
                <img src="imgs/icons/showMore.svg" alt="">
                <div class="title">Show more</div>
            </div>
            <hr class:opened={!opened}>

            <div class="gaming menuItem" class:opened={!opened}>
                <img src="imgs/icons/subs.svg" alt="">
                <div class="title">Gaming</div>
            </div>
            <div class="live menuItem" class:opened={!opened}>
                <img src="imgs/icons/subs.svg" alt="">
                <div class="title">Live</div>
            </div>
            <div class="sports menuItem" class:opened={!opened}>
                <img src="imgs/icons/subs.svg" alt="">
                <div class="title">Sports</div>
            </div>
            <hr class:opened={!opened}>
            <div class="settings menuItem" class:opened={!opened}>
                <img src="imgs/icons/subs.svg" alt="">
                <div class="title">Settings</div>
            </div>
            <div class="reportHistory menuItem" class:opened={!opened}>
                <img src="imgs/icons/subs.svg" alt="">
                <div class="title">Report history</div>
            </div>
            <div class="help menuItem" class:opened={!opened}>
                <img src="imgs/icons/subs.svg" alt="">
                <div class="title">Help</div>
            </div>
            <div class="feedback menuItem" class:opened={!opened}>
                <img src="imgs/icons/subs.svg" alt="">
                <div class="title">Send feedback</div>
            </div>
            <hr class:opened={!opened}>


        </div>
        
        
    </div>
</div>


<!--******Mobile Menu**** -->
<!--Small Menu-->
<div class="container smallSideNav" id="smallMenu" class:player>
    <div class="logoMenuBtn">
        <div class="closeNav"><img src="imgs/icons/menu.svg" alt="ytb"></div>
        <div class="logo"><img src="imgs/logo.svg" alt="ytb"></div>
    </div>
    <div class="baseMenuSection smallSideNav"  >
        <div class="home menuItem smallSideNav" >
            <img src="imgs/icons/home.svg" alt="">
            <div class="title" >Home</div>
        </div>
        <div class="explore menuItem smallSideNav" >
            <img src="imgs/icons/explore.svg" alt="">
            <div class="title" >Explore</div>
        </div>
        <div class="subs menuItem smallSideNav" >
            <img src="imgs/icons/subs.svg" alt="">
            <div class="title" >Subscriptions</div>
        </div>
        
        <div class="librarySection">
            <div class="library menuItem smallSideNav" >
                <img src="imgs/icons/library.svg" alt="">
                <div class="title" >Library</div>
            </div>
        </div>
        
        
    </div>
</div>


<!--Big Menu-->

<div class="background" class:bigMenuOpen={!opened} class:player>
<div class="container {opened ? "bigMenuNotOpen" : "bigMenuOpen"}" id="bigMenu" >
    <div class="logoMenuBtn">
        <div class="closeNav" on:click={openCloseMenu}><img src="imgs/icons/menu.svg" alt="ytb"></div>
        <div class="logo"><img src="imgs/logo.svg" alt="ytb"></div>
    </div>
    <div class="baseMenuSection"  >
        <div class="home menuItem" >
            <img src="imgs/icons/home.svg" alt="">
            <div class="title" >Home</div>
        </div>
        <div class="explore menuItem" >
            <img src="imgs/icons/explore.svg" alt="">
            <div class="title" >Explore</div>
        </div>
        <div class="subs menuItem" >
            <img src="imgs/icons/subs.svg" alt="">
            <div class="title" >Subscriptions</div>
        </div>
        <hr>
        <div class="librarySection">
            <div class="library menuItem" >
                <img src="imgs/icons/library.svg" alt="">
                <div class="title" >Library</div>
            </div>

            <div class="history menuItem" >
                <img src="imgs/icons/history.svg" alt="">
                <div class="title">History</div>
            </div>
            <div class="yourVideos menuItem" >
                <img src="imgs/icons/yourVideos.svg" alt="">
                <div class="title">Your videos</div>
            </div>
            <div class="watchLater menuItem" >
                <img src="imgs/icons/watchLater.svg" alt="">
                <div class="title">Watch later</div>
            </div>
            <div class="likedVideos menuItem" >
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
            <hr >

            <div class="gaming menuItem" >
                <img src="imgs/icons/subs.svg" alt="">
                <div class="title">Gaming</div>
            </div>
            <div class="live menuItem">
                <img src="imgs/icons/subs.svg" alt="">
                <div class="title">Live</div>
            </div>
            <div class="sports menuItem" >
                <img src="imgs/icons/subs.svg" alt="">
                <div class="title">Sports</div>
            </div>
            <hr >
            <div class="settings menuItem">
                <img src="imgs/icons/subs.svg" alt="">
                <div class="title">Settings</div>
            </div>
            <div class="reportHistory menuItem" >
                <img src="imgs/icons/subs.svg" alt="">
                <div class="title">Report history</div>
            </div>
            <div class="help menuItem" >
                <img src="imgs/icons/subs.svg" alt="">
                <div class="title">Help</div>
            </div>
            <div class="feedback menuItem" >
                <img src="imgs/icons/subs.svg" alt="">
                <div class="title">Send feedback</div>
            </div>
            <hr >


        </div>
        
        
    </div>
</div>

</div>

<!--End of bigMenu-->
