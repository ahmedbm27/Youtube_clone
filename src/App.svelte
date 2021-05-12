<script>
	import { Router, Link, Route } from "svelte-routing";
	import Landing from "./routes/landing.svelte";
	import VideoPlayer from "./routes/videoPlayer.svelte";
	import Navbar from "./components/navbar.svelte"
	export let url = "";
  </script>
  <div>
  <Router url="{url}">

		<Route path="/">
			<Navbar/>
			<Landing />
		</Route>

		<Route path="/watch">
			<Navbar/>
			<VideoPlayer />
		</Route>

  </Router>
</div>
