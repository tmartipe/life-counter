import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { Server } from 'socket.io'

export const webSocketServer ={
	name: 'webSocketServer',
	configureServer(server) {
		const io = new Server(server.httpServer)

		io.on('connect', (socket) => {
			socket.emit('eventFromServer', 'Hello, World')
		})
	}
}
export default defineConfig({
	plugins: [sveltekit(), webSocketServer]
});
