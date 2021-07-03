<script>
import VideoPlayer from "../components/videoPlayer.svelte"
import RightPart from "../components/videoLanding.svelte"
import SideNav from "../components/sidenav.svelte"
import {db} from "../firebase.js"
let id = new URLSearchParams(window.location.search).get("v")
export let opened
let data="";
let getAllVideos = async () =>{
  await  db.collection("ALL").doc("LvaVLDcVcMyTrw3PRYic").get().then((doc) => {
  if (doc.exists) {
     data = doc.data();
     
      console.log(data.videos);
    
  } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
});

}
getAllVideos()

</script>

<style>
.container{
    padding: 24px 100px 0 100px;
    overflow-y: scroll;
    height: 90vh;
    display: flex;
}
.rightContainer{
  display: flex;
  flex-direction: column;
}
@media only screen and (max-width:1850px){
  .container{
    padding: 24px 15px 0 15px;
  }
}
@media only screen and (max-width:999px){
  .container{
    padding: 24px 15px 0 15px;
    flex-direction: column;
  }
}
</style>
<div class="container">
{#if Object.keys(data).length != 0}
<SideNav class="sidenav" bind:opened={opened} player= {true}/>
  <VideoPlayer id = {id} data = {data} />
  <div class="rightContainer">
  {#each data.videos as video }
  <RightPart player= {true} video ={video}/>
  {/each}
</div>
{/if}
</div>



