<script lang="ts" context="module">

	export const data = $state({
		counterIzq: 20,
		counterDer: 20
	});

	export const changes = $state({
		counterIzq: null,
		counterDer: null
	});

	let ws;

	export function initWebSocket() {
		if (ws) return; // avoid multiple connections

		const host = window.location.hostname;
		ws = new WebSocket(`ws://${host}:8080`);

		ws.addEventListener('message', (e) => {
			const msg = JSON.parse(e.data);
			if (msg.type === 'init' || msg.type === 'update') {
				for (const key of ['counterIzq', 'counterDer']) {
					if (msg[key] !== data[key]) {
						changes[key] = msg[key] > data[key] ? 'up' : 'down';
						data[key] = msg[key];
						setTimeout(() => (changes[key] = null), 100);
					}
				}
			}
		});
	}

	export function updateVariable(key, delta) {
		const old = data[key] ?? 0;
		data[key] += delta;
		changes[key] = delta > 0 ? 'up' : 'down';
		ws?.send(JSON.stringify(
			{ type: 'update', key, value: data[key] }));
		setTimeout(() => (changes[key] = null), 100);
	}

	export function resetLifes(amount) {
		ws?.send(JSON.stringify(
			{ type: 'update', key: 'counterDer', value: amount}
		));
		ws?.send(JSON.stringify(
			{ type: 'update', key: 'counterIzq', value: amount}
		))
		setTimeout(() => (changes['counterIzq'] = null), 100);
		setTimeout(() => (changes['counterDer'] = null), 100);
	}
</script>