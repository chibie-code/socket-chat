import React from 'react';
import io from 'socket.io-client';

const useFetch = () => {

    const x = () => {};
    
    React.useEffect(()=>{
      const socket_instance = io("http://localhost");

      socket_instance.on("connect", () => {
        console.log(socket_instance.connected); // true
        
        socket_instance.on('recieve_message', data=>{
          console.log('Someone sent:',data);
          // console.log('Someone sent:',{data: ''});
        })
      });
    },[]);

    return { x };
};

export default useFetch;