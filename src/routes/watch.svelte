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

</style>
<div class="container">
<VideoPlayer id = {id} />
<RightPart />
</div>



