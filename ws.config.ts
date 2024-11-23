import { Server } from 'socket.io';
import {data} from './src/routes/ws.store';

function webSocketServer(server:unknown) {
	if(!server){return};
	const io = new Server(server);
	console.log("here on",new Date().toLocaleTimeString());		
	io.on('connection',(socket)=>{
		data.subscribe((data)=>{
			console.log(data);
			if(!data)return;
			socket.emit('eventFromServer',data);
		})
	})
}


export {webSocketServer as ws};