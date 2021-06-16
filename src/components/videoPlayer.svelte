
<script>
import {onMount} from 'svelte'
import YouTube from 'svelte-youtube';
import {db} from "../firebase.js"
export let id
const options = {
    height: '720',
    width: '1280',
    //  see https://developers.google.com/youtube/player_parameters
    playerVars: {
      autoplay: 1
    }
  };




let video="";
let data ="";	
let getAllVideos = async () =>{
    await  db.collection("ALL").doc("LvaVLDcVcMyTrw3PRYic").get().then((doc) => {
    if (doc.exists) {
       data = doc.data();
       video = data.videos.filter(obj => {
        return obj.id === id
        })

console.log(video[0]);
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

<div class="PlayerContainer">
{#if Object.keys(video).length != 0}
<YouTube videoId={id} {options} />
<div class="title">{video[0].title}</div>
<div class="views">{video[0].statistics.viewCount} views</div>
{/if}
</div>

