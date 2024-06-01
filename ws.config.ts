import { Server } from 'socket.io';
import {ws as layoutWs} from './src/routes/+layout.server'

function webSocketServer(server) {
		const io = new Server(server)
		io.on('connection', (socket) => {
			layoutWs(socket);
		})
}

export {webSocketServer as ws};