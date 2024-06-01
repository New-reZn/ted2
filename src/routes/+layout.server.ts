import type { LayoutServerLoad } from "./$types";
import type { Socket,Server } from 'socket.io';


export const load = (async() => {
    return {}
}) satisfies LayoutServerLoad;

export function ws(socket:Socket,io:null|Server=null) {
    io;
    socket.emit('eventFromServer', 'Hello, World');
}