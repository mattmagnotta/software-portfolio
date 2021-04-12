import './App.css';
import {useState,useEffect} from 'react'
import RingLoader from "react-spinners/RingLoader";
import Home from './pages'
import {BrowserRouter as Router} from 'react-router-dom'
import Particles from 'react-particles-js';
function App() {

  const [loading,setLoading] = useState(false);
  //
  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   },2000)
  // }, [])
  return (
    <>
    {
      loading ?
      (<div id='loader'><RingLoader color='#D931A3' loading={loading}  size={450} /> </div>
      ) : (<div> <Particles id='pparticles'
      canvasClassName="particlesBg"
      height='100vh'
      params={{
      "particles": {
        "color": {
     "value": "#0BBAFC"
   },
      "number": {
          "value": 190,
          "density": {
              "enable": false
          }
      },
      "size": {
          "value": 4,
          "random": true,
          "anim": {
              "speed": 4,
              "size_min": 0.3
          }
      },
      "line_linked": {
          "enable": false
      },
      "move": {
          "random": true,
          "speed": 1,
          "direction": "top",
          "out_mode": "out"
      }
      },
      "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "bubble"
          },
          "onclick": {
              "enable": true,
              "mode": "repulse"
          }
      },
      "modes": {
          "bubble": {
              "distance": 250,
              "duration": 2,
              "size": 0,
              "opacity": 0
          },
          "repulse": {
              "distance": 400,
              "duration": 4
          }
      }
      }
      }} />
        <Router id='particle_background'>
          <Home/>
        </Router>

 </div>)
    }
    </>
  );
}

export default App;
