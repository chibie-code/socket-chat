import React from 'react';
import io from 'socket.io-client';
import Nav from '../components/navbar';

function HomePage({ children }) {

  const styles = {
    cardContainer: {
      width: '100%',
      height: '100%',
      display: 'grid',
      placeItems: 'center',
    },
    card: {
      width: 'auto',
      height: '70vh',
      border: 'solid 1px lightgray',
      margin: '10px',
      borderRadius: '5px',
      padding: '0.5rem',
      boxShadow: '0px 0px 10px 1px grey inset',
      background: 'white',
      display: 'grid',
      placeItems: 'center',
    },
    message1:{
      fontFamily: 'sans-serif',
      fontSize: '15px',
      fontWeight: 600,
      color: '#656565',
    },
    imageContainer: {
      // padding: '0.2rem',
      // display: 'grid',
      // placeItems: 'center',
    },
    image: {
      width: '30vw',
      height: 'auto',
    },
    message2: {
      fontFamily: 'sans-serif',
      fontSize: '17px'
    },
    buttonContainer: {
      width: '100%',
      height: 'auto',
      display: 'grid',
      placeItems: 'center',
    },
    buttonLabel: {
      fontFamily: 'sans-serif',
      fontSize: '20px',
      fontWeight: 300,
    },
    button: {
      width: '15vw',
      minWidth: '150px',
      height: 'auto',
      fontWeight: 600,
      padding: '1.9vw',
      borderRadius: '5px',
      background: 'rgba(0,100,250,1)',
      color: 'white',
      border: 'lightgray 1px solid',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'sans-serif',
      fontSize: '20px',
      cursor: 'URL',
    }
  };
    return (
      <Nav>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <div style={styles.message1}>You don't need an app to use Omegle on your phone or tablet! The web site works great on mobile.</div>
            <span style={styles.imageContainer}>
              <img style={styles.image} src='https://www.omegle.com/static/standwithhk.jpeg'/>
            </span>
            <p style={styles.message2}>
            Omegle (oh·meg·ull) is a great way to meet new friends, even while practicing social distancing. When you use Omegle, we pick someone else at random and let you talk one-on-one. To help you stay safe, chats are anonymous unless you tell someone who you are (not suggested!), and you can stop a chat at any time.
            </p>
            <span style={styles.buttonLabel}>Start chatting:</span>
            <div style={styles.buttonContainer}>
              <button style={styles.button}>Text</button>
            </div>
          </div>
        </div>
      </Nav>
    )
  }
  
  export default HomePage