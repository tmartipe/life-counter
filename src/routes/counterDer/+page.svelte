<script>
	import { data, changes } from '$lib/sharedState.svelte';
</script>

<div class="centered">
	<h1 class={`outlined ${changes.counterDer}`}>{data.counterDer}</h1>
</div>

<style>
    .centered {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: 60vh;
    }
    .outlined {
        color: #466DB5;
        -webkit-text-stroke: 15px white;
        text-stroke: 15px white;
        font-weight: bolder;
    }
    h1 {
        transition: color 0.2s ease-out, transform 0.2s ease-out;
    }
    .up {
        color: green;
        transform: scale(1.1);
    }
    .down {
        color: red;
        transform: scale(1.1);
    }
</style>