import React from 'react';
import io from 'socket.io-client';
function HomePage() {

  const [ msg, setMsg ] = React.useState({hello:''});
  const [ source, setSource ] = React.useState({src:'data:image/png;base64,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'});

  const styles: {[key: string]:React.CSSProperties} =  {
    section:{
      width: '98vw',
      height: '97vh',
      // border: 'solid 1px black',
      display: 'flex',
      flexDirection: 'column'
    },
    navBarContainer: {
      position: 'relative',
      width: '100%',
      height: '20vh',
      display: 'flex'
    },
    navBar: {
      position: 'fixed',
      width: '100%',
      top: '0',
      left: '0',
      height: '13vh',
      background: 'white',
      boxShadow: '1px 2px 10px gray',
      overflow: 'hidden',
      // border: 'solid 1px black',
    },
    logo: {
      width: '35vw',
      height: 'auto',
    },
    chatArea:{
      fontSize: '15px',
      height: '100vh',
      width: '100%',
      background: 'white',
      borderRadius: '10px 10px 0 0',
      border: 'lightgray 1px solid',
      margin: '0 0 0.6rem 0',
      paddingTop: '0.7rem',
      display: 'flex',
      flexDirection: 'column',
      padding: '5px 0',
      overflowX: 'hidden',
      overflowY: 'auto',
    },
    preMessage: {
      width: '100%',
      height: 'auto',
      margin: '5px 9px',
      fontSize: '0.9rem',
      fontFamily: 'sans-serif',
      fontWeight: 700,
      color: '#656565',  
    },
    message: {
      width: '100%',
      height: 'auto',
      margin: '5px 9px',
      fontFamily: 'sans-serif',
    },
    msgText: {},
    chatEndDisplay: {
      // padding: '0.7rem',
      width: '100%',
      height: '100%',
      display: 'grid',
    },
    newChatBtn: {
      width: '15vw',
      minWidth: '150px',
      height: 'auto',
      fontWeight: 600,
      padding: '1.9vw',
      margin: '0 1vw',
      textAlign: 'center',
      borderRadius: '5px',
      background: 'rgba(0,100,250,1)',
      color: 'white',
      border: 'lightgray 1px solid',
      display: 'grid',
      placeItems: 'center',
    },
    inputArea:{
      width: '100%',
      height: '17vh',
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button1: {
      width: '15vw',
      minWidth: '100px',
      height: '100%',
      margin: '1rem 1.5rem 0.6rem 0',
      borderRadius: '0 0 0 10px',
      background: 'rgba(0,100,250,1)',
      color: 'white',
      fontWeight: 600,
      border: 'lightgray 1px solid',
    },
    button2: {
      width: '15vw',
      minWidth: '100px',
      height: '100%',
      margin: '1rem 0 0.6rem 0.6rem',
      borderRadius: '0 0 10px 0',
      background: 'white',
      color: 'gray',
      border: 'lightgray 1px solid',
    },
    input: {
      width: '89%',
      height: '95%',
      margin: '1rem 0 0.6rem 0',
      textAlign: 'left',
      border: 'lightgray 1px solid',
    }
  };

  const msgTest = [
    {sender:'You', message: 'Hi'},
    {sender:'Stranger', message: 'hi'},
    {sender:'Stranger', message: 'asl?'},
    {sender:'You', message: 'm'},
    {sender:'Stranger', message: 'm'},
    {sender:'Stranger', message: 'oh. bye'},
    {sender:'You', message: 'Hi'},
    {sender:'Stranger', message: 'hi'},
    {sender:'Stranger', message: 'asl?'},
    {sender:'You', message: 'm'},
    {sender:'Stranger', message: 'm'},
    {sender:'Stranger', message: 'oh. bye'},
    {sender:'You', message: 'Hi'},
    {sender:'Stranger', message: 'hi'},
    {sender:'Stranger', message: 'asl?'},
    {sender:'You', message: 'm'},
    {sender:'Stranger', message: 'm'},
    {sender:'Stranger', message: 'oh. bye'},
  ];
  
  React.useEffect(()=>{
    let socket_instance = io();
    socket_instance.on('now', data=>{
      setMsg(p=>({hello: data.message}))
    })
  },[]);
    return (
    <section style={styles.section}>
      <div style={styles.navBarContainer}>
        <span style={styles.navBar}>
          <img src={source.src} alt="Omegle Logo" style={styles.logo}/>
        </span>
      </div>
      <div style={styles.chatArea}>
        <span style={styles.preMessage}>You're now chatting with a random stranger. Say STAND WITH HONG KONG AGAINST THE CCP!</span>
        {msgTest.map((m, idx)=>{
          return(
            <span style={styles.message} key={`po${idx*3}in${idx}`}>
              <span style={{'fontWeight': 600, fontSize: '15px', color: (m.sender==='You')?'blue':'red'}}>{m.sender}: </span><span style={styles.msgText}>{m.message}</span>
            </span>
          );
        })}
        <span style={styles.chatEndDisplay}>
          <div style={styles.preMessage}>Stranger has disconnected.</div>
          <button style={styles.newChatBtn}><span>New chat</span></button>
        </span>
      </div>
      <div style={styles.inputArea}>
        <button style={styles.button1}>New (Esc)</button>
        <textarea style={styles.input}/>
        <button style={styles.button2}>Send (Enter)</button>
      </div>
    </section>
    )
  }
  
  export default HomePage