<script lang="ts">
	import { enhance } from '$app/forms';
    import { io } from 'socket.io-client'
    const socket = io();
  
    let message:any;
    socket.on('eventFromServer', (data) => {
      message=data;
    });
</script>
<form action="?" method="post" use:enhance>
  <button type="submit">click</button>
</form>

{message}