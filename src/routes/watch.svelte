<script>
import VideoPlayer from "../components/videoPlayer.svelte"
import RightPart from "../components/watchRightVideos.svelte"

let id = new URLSearchParams(window.location.search).get("v")
</script>

<style>
.container{
    padding: 24px 100px 0 100px;
    overflow-y: scroll;
    height: 90vh;
    display: flex;
}
@media only screen and (max-width:999px){
  .container{
    padding: 24px 15px 0 15px;
    flex-direction: column;
  }
}
</style>
<div class="container">
<VideoPlayer id = {id} />
<RightPart />
</div>



