import Alert from "./utilities/alert/Alert";
import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Verify from "./components/Verify";
import Loader from "./utilities/loader/Loader";
import Form from "./components/Form";
import back from "./assets/2699.jpg"
import { Button, Modal } from "react-bootstrap";
function App() {
  const [route, setRoute] = useState(2);
  const [contact, setContact] = useState('6387181138');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    title: "",
    content: "",
    type: "",
  });
  return (
    <div className="App" style={{alignItems:'center',justifyContent:'center',width:window.innerWidth,}} >
      <div style={{backgroundColor:'#1D92B2',display:'flex',width:window.innerWidth,height:50,justifyContent:'center',alignItems:'center'}}>
        <text style={{fontFamily:'monospace',fontSize:20,color:"white"}}>Health Express</text>
      </div>
        {/* <img src={back} style={{
           width:500,
           height:500,
        }} /> */}
        <div style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'flex-start',
          width:window.innerWidth,
          height:'100%'
          
          }}>
          <div>
              <img src={back} style={{width:'1050px',height:"600px"}} />
          </div>
          <div>          
      <Alert alert={alert} setAlert={setAlert} />
      {route === 0 ? (
        <Login
          loading={loading}
          setRoute={setRoute}
          setphone={setContact}
          setLoading={setLoading}
          setAlert={setAlert}
        />
      ) : route === 1 ? (
        <Verify
        loading={loading}
          setRoute={setRoute}
          contact={contact}
          setLoading={setLoading}
          setAlert={setAlert}
        />
      ) : route === 2 ? (
        <Form 
          contact={contact}
          loading={loading}
          setRoute={setRoute}
          contact={contact}
          setLoading={setLoading}
          setAlert={setAlert} />
      ) : (
        <></>
      )}
      </div>
        </div>
      {/* <button type="button" onClick={()=>{}}>
        Open Modal
      </button> */}
      <Modal
        open={true}
        className='modal'
        onClose={()=>{}}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {}
      </Modal>
     </div>
     
  );
}

export default App;
