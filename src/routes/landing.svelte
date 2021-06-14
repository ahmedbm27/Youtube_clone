<script>
import Video from '../components/videoLanding.svelte'
import SideNav from "../components/sidenav.svelte"
let videos =[1,2,3,4,5,6,7,8,9,10,11,12]
export let opened;

let channelID="UCsBjURrPoezykLs9EqgamOA"
let apiKey="AIzaSyCbJJDz1ZH6J8XU21fqe6n4eIPj0Yw5zUs";
let link= "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId="+channelID+"&type=video&key="+apiKey+"&order=date&maxResults=60"
let go = async () =>{
    const res = await fetch(link)
	const json = await res.json()
    
	const result = JSON.stringify(json)
    const parsed = JSON.parse(result)
    console.log(parsed.items);
}

go();
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

    </div>
</div>
