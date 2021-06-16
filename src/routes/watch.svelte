<script>
import VideoPlayer from "../components/videoPlayer.svelte"
let id = new URLSearchParams(window.location.search).get("v")
</script>

<style>


</style>
<VideoPlayer id = {id} />

