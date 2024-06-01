import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig,type ViteDevServer } from 'vite'
import { ws } from './ws.config';

const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server: ViteDevServer) {
		if (!server.httpServer) return
        ws(server.httpServer);
	}
}


export default defineConfig({
	plugins: [sveltekit(),webSocketServer]
});
