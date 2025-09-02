// websocket-server.js
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });
const sharedState = { varA: 0, varB: 0 };

wss.on('connection', (ws) => {
	console.log('Client connected');

	// Send current state when a client connects
	ws.send(JSON.stringify({ type: 'init', ...sharedState }));

	ws.on('message', (message) => {
		const data = JSON.parse(message);
		if (data.type === 'update') {
			sharedState[data.key] = data.value;

			// Broadcast the update to all connected clients
			wss.clients.forEach((client) => {
				if (client.readyState === WebSocket.OPEN) {
					client.send(JSON.stringify({ type: 'update', ...sharedState }));
				}
			});
		}
	});

	ws.on('close', () => console.log('Client disconnected'));
});

console.log('WebSocket server running at ws://localhost:8080');
