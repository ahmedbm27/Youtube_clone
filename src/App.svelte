<script>
	import { Router, Link, Route } from "svelte-routing";
	import Landing from "./routes/landing.svelte";
	import Watch from "./routes/watch.svelte";
	import Navbar from "./components/navbar.svelte"
	export let url = "";
	let opened = true;
	
  </script>
  <div>
  <Router url="{url}">

		<Route path="/">
			<Navbar bind:opened={opened}/>
			<Landing bind:opened={opened} />
		</Route>

		<Route path="/watch" >
			<Navbar/>
			<Watch />
		</Route>

  </Router>
</div>
