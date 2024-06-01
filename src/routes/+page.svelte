<script lang="ts">
    import { io } from 'socket.io-client'
    const socket = io();
  
    let message:any;
    socket.on('eventFromServer', (data) => {
      message=data;
    })
</script>

{message}