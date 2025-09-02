<script lang="ts">
	import { onMount } from 'svelte';
	import favicon from '$lib/assets/favicon.svg';
	import { initWebSocket } from '$lib/sharedState.svelte';

	let { children } = $props();

	onMount(() => {
		initWebSocket();
	});

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
