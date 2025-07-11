<script>
	import { getRoutes } from "../metadata";

	const routes = getRoutes();

	export let title;
	export let label;
</script>

<svelte:head>
	<title>label | {title}</title>
</svelte:head>

<nav>
	<ul>
		{#each routes as route}
			<li>
				<a href={route.path}>{route.label} ({route.title})</a>
			</li>
		{/each}
	</ul>
</nav>

<slot />
