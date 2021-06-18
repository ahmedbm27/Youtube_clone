<script>

const onFocus = e => {
    e.target.parentElement.style.borderColor="#065fd4"
    e.target.parentElement.style.boxShadow="10px 15px black;"
}

const onBlur = e => e.target.parentElement.style.borderColor="#CCCCCC"
export let opened = true;
let openCloseMenu = () =>{
opened = !opened;
}
</script>

<style>

nav{
display: flex;
flex-direction: row;
background-color: white;
height: 56px;
justify-content: space-between;
align-items: center;
padding: 0 13px 0 13px;

}
.leftPart,.rightPart,.searchBar{
display: flex;
flex-direction: row;
align-items: center;
}
.leftPart .sideNavBtn{
    width: 30px;
    height: 30px;
    padding: 13px;
    filter: invert(38%) sepia(65%) saturate(0%) hue-rotate(208deg) brightness(88%) contrast(104%); 
    cursor: pointer;
}
.leftPart .logo{
    height: 24px;
    width: 80px;
    padding: 13px;
    cursor: pointer;
}
.rightPart img{
    margin: 13px;
    cursor: pointer;
}
.rightPart .youtubeApp{
    width: 17px;
    height: 17px;
    filter: invert(38%) sepia(65%) saturate(0%) hue-rotate(208deg) brightness(88%) contrast(104%); 
}
.rightPart .upload{
    width: 20px;
    height: 20px;
    filter: invert(38%) sepia(65%) saturate(0%) hue-rotate(208deg) brightness(88%) contrast(104%); 
}
.rightPart .notification{
    width: 25px;
    height: 25px;
    filter: invert(38%) sepia(65%) saturate(0%) hue-rotate(208deg) brightness(88%) contrast(104%); 
}

.rightPart .accountIcon{
    width: 35px;
    height: 35px;
}
.searchBar{
    display: flex;
    flex: 0 1 650px;
    width: 100%;
    margin: 0 60px 0 60px;
}
.searchBar .searchIpnut input{
    font-family: 'Roboto','Noto',sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    max-width: 100%;
    margin: 0px;
    margin-left: 4px;
    height: 32px;
    width: 100%;
    -webkit-appearance: none;
    -webkit-font-smoothing: antialiased;
    background-color: transparent;
    border: none;
    box-shadow: none;
}
.searchBar .searchIpnut input:focus{
    outline:none
}
.searchBar .searchIpnut{
    width: 100%;
    height: 32px;
    border-radius: 2px 0px 0px 2px;
    border: 1px solid #CCCCCC;  
}
.searchBar .searchBtn{
    background-color: #F8F8F8;
    border-top: 1px solid #CCCCCC;
    border-right: 1px solid #CCCCCC;
    border-bottom: 1px solid #CCCCCC;
    width: 65px;
    height: 32px;
    border-radius: 0 2px 2px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.searchBar .searchBtn:hover{
    background-color: #e2e0e0;
}
.searchBar .searchBtn img{
    width: 20px;
    height: 20px;
    filter: invert(38%) sepia(65%) saturate(0%) hue-rotate(208deg) brightness(88%) contrast(104%);

    
}
@media only screen and (max-width:800px){
    .searchBar,.upload,.youtubeApp,.notification{
        display:none;
    }
}
</style>


<nav>

    <div class="leftPart">

        <img  
        class="sideNavBtn"
        src="imgs/icons/menu.svg" 
        alt="menu"
        on:click={openCloseMenu}>
        <a href="/"><img class="logo" src="imgs/logo.svg" alt="logo"></a>

    </div>
    

    <div class="searchBar">
        <div class="searchIpnut">
            <input type="text" placeholder="Search" on:focus={onFocus} on:blur={onBlur}>
        </div>
        
        <div class="searchBtn"><img src="imgs/icons/search.svg" alt="search"></div>
    </div>

    <div class="rightPart">
        <img class="upload" src="imgs/icons/upload.svg" alt="upload">
        <img class="youtubeApp" src="imgs/icons/youtubeApp.svg" alt="youtubeApp">
        <img class="notification" src="imgs/icons/notification.svg" alt="notification">
        <img class="accountIcon" src="imgs/icons/accountIcon.svg" alt="accountIcon">
    </div>

</nav>