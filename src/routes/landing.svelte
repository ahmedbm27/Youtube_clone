<script>
import Video from '../components/videoLanding.svelte'
let videos =[1,2,3,4,5,6,7,8,9]
</script>

<style>
    .landingContainer{
        background-color: #F9F9F9;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top:24px;
    }
</style>

<div class="landingContainer">
    {#each videos as video }
    <Video/>
    {/each}
</div>
