<script>
import Video from '../components/videoLanding.svelte'
import SideNav from "../components/sidenav.svelte"
import {db} from "../firebase.js"
let videos =[1,2,3,4,5,6,7,8,9,10,11,12]
export let opened;


/* let channelID="UCsBjURrPoezykLs9EqgamOA"
let apiKey="AIzaSyCbJJDz1ZH6J8XU21fqe6n4eIPj0Yw5zUs";

 let goo = async () =>{
    let link= "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId="+channelID+"&type=video&key="+apiKey+"&order=date&maxResults=60"    
    const res = await fetch(link)
	const json = await res.json()
    console.log(link);
	const result = JSON.stringify(json)
    const parsed = JSON.parse(result);

    await db.collection("ALL").add({videos:parsed.items}).then((docRef) => {
console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
console.error("Error adding document: ", error);
}); 
} */
/*  let go = async () =>{
    await  db.collection("ALL").doc("BTHULaaKXvWYZdMKDqhD").get().then((doc) => {
    if (doc.exists) {
        data =doc.data();
        console.log(data.videos);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});


let videos =[];
for (let el of Object.entries(data.videos) ) {
    const [key,value] = el;
    let videoID=value.id.videoId;
    let link= "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+videoID+"&&type=video&key="+apiKey+"&order=date&maxResults=60"
    const res = await fetch(link)
	const json = await res.json()
    
	const result = JSON.stringify(json)
    const parsed = JSON.parse(result)
    //console.log(parsed.items[0]);
    
    let videoTemplate = {
        channelTitle:value.snippet.channelTitle,
        publishTime:value.snippet.publishTime,
        publishedAt:value.snippet.publishedAt,
        thumbnails:value.snippet.thumbnails,
        title:value.snippet.title,
        duration:parsed.items[0].contentDetails.duration,
        id : parsed.items[0].id,
        description : parsed.items[0].snippet.description,
        statistics : parsed.items[0].statistics
    }
    videos = [...videos,videoTemplate]
    //console.log(videoTemplate);
   
} 


 await db.collection("ALL").add({videos}).then((docRef) => {
console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
console.error("Error adding document: ", error);
});  
console.log(videos);
} 

 */
let data="";
let getAllVideos = async () =>{
    await  db.collection("ALL").doc("LvaVLDcVcMyTrw3PRYic").get().then((doc) => {
    if (doc.exists) {
        data =doc.data();
        
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
        padding: 0 65px 0 65px;
        margin-top: 24px;
    }
    .videosContainer.smallSideNav{
        padding: 0 15px 0 15px;
    }
</style>

<div class="landingContainer">
    <SideNav bind:opened={opened}/>
    <div class="videosContainer" class:smallSideNav={!opened} >
        {#if Object.keys(data).length != 0}
        {#each data.videos as video }
        <Video video ={video} bind:opened={opened}/>
        {/each}
        {/if}

    </div>
</div>
