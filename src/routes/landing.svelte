<script>
import Video from '../components/videoLanding.svelte'
import SideNav from "../components/sidenav.svelte"
import {db} from "../firebase.js"
export let opened;





 let data ="";	
let getAllVideos = async () =>{
    await  db.collection("ALL").doc("LvaVLDcVcMyTrw3PRYic").get().then((doc) => {
    if (doc.exists) {
       data = doc.data();
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

}
getAllVideos();





</script>

<style>
    .landingContainer{
        background-color: #F9F9F9;
        width: 100%;
        height: 100%;
        display: flex;
      
    }
    .videosContainer{
        background-color: #F9F9F9;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-items: baseline;
        overflow-y: scroll;
        height: 100vh;
        padding: 24px 15px 0 15px;
    }
    .videosContainer.smallSideNav{
        padding: 24px 65px 0 65px;
    }

    
@media only screen and (max-width:1350px){
    .videosContainer{
        padding: 24px 15px 0 15px;
    }
}

@media only screen and (max-width:800px){
    .videosContainer{
        padding: 24px 5px 0 5px;
    }
}
</style>
{#if Object.keys(data).length != 0}
<div class="landingContainer">
    <SideNav class="sidenav" bind:opened={opened}/>
    <div class="videosContainer" class:smallSideNav={!opened} >
        {#each data.videos as video }
        <Video video ={video} bind:opened={opened}/>
        {/each}
    </div>
</div>
{/if}
