<script>
	import { data, updateVariable, changes, resetLifes } from '$lib/sharedState.svelte';
</script>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .wrapper > * {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }

    .button-container {
				flex: 4.5;
        position: relative;         /* anchor for absolute text */
        display: flex;
        gap: 0;                  /* space between buttons */
        width: 100%;                /* center on page */
				height: 100%;
    }

    .button-container button {
        flex: 1; /* equal width buttons */
				border: none;
				background: black;
				height: 100%;
    }

    .button-text-down {
        position: absolute;
        top: 50%; /* vertically center */
        left: 50%; /* horizontally center */
        transform: translate(-50%, -50%); /* true center */
        pointer-events: none; /* clicks go through to buttons */
        font-weight: bold; /* optional contrast */
        font-size: 200px;
				margin: 0;
        text-align: center;
    }

    .button-text-top {
        position: absolute;
        top: 50%; /* vertically center */
        left: 50%; /* horizontally center */
        transform: translate(-50%, -50%) rotate(180deg); /* true center */
        pointer-events: none; /* clicks go through to buttons */
        font-size: 200px;
        text-align: center;
				margin: 0;
    }

    .outlined {
        color: #466DB5;
        -webkit-text-stroke: 10px white;
        font-weight: bolder;
				font-family: Poppins, sans-serif;
    }

    p {
        transition: color 0.2s ease-out;
    }
    .up {
        color: green;
    }
    .down {
        color: red;
    }

		.reset-button-bar{
				flex: 1;
				background: black;
				align-items: center;
				display: flex;
        justify-content: center;
		}

		.reset-button-bar img {
				max-height: 100%;
				width: auto;
				display: block;
		}
</style>

<div class="wrapper">
	<div class="button-container">
		<button on:click={() => updateVariable('counterIzq', +1)}></button>
		<button on:click={() => updateVariable('counterIzq', -1)}></button>
		<p class={`button-text-top outlined ${changes.counterIzq}`}>{data.counterIzq}</p>
	</div>
	<div class="reset-button-bar">
		<img on:click={() => resetLifes(20) } src="/manaIcon.png" alt="manaIcon"/>
	</div>
	<div class="button-container">
		<button on:click={() => updateVariable('counterDer', -1)}></button>
		<button on:click={() => updateVariable('counterDer', +1)}></button>
		<p class={`button-text-down outlined ${changes.counterDer}`}>{data.counterDer}</p>
	</div>
</div>
