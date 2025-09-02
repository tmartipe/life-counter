<script lang="ts">

	let {
		value
	} : {
		value: number;
	} = $props();

	function addLife(){
		value++
	}
	function removeLife(){
		if (value > 0)
			value--
	}

	console.log(value)

</script>

<h1>{value}</h1>
<button onclick={addLife}>+</button>
<button onclick={removeLife}>-</button>