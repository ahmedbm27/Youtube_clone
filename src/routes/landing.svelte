<script>
import Video from '../components/videoLanding.svelte'
import SideNav from "../components/sidenav.svelte"
let videos =[1,2,3,4,5,6,7,8,9,10,11,12]
export let opened;
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
        overflow-y: scroll;
        height: 100vh;
    }
</style>

<div class="landingContainer">
    <SideNav bind:opened={opened}/>
    <div class="videosContainer">
        {#each videos as video }
        <Video/>
        
        {/each}

        <iframe width="560" height="315" src="https://www.youtube.com/embed/g6BprD_IIl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>
