import axios from "axios";
import React, { useState } from "react";
import { Card, Dropdown } from "react-bootstrap";
import Loader from "../utilities/loader/Loader";
import Login from "./Login";
var location;
  var location_find=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
    location=position;
    console.log(position)
  });
}

const Form = (props) => {  
  const contact=props.contact;
  const [fName,setFName]=useState('');
  const [pressed,setPressed]=useState(false)
  const [lName,setLName]=useState('');
  const [age,setAge]=useState(0);
  const [gender,setGender]=useState('');
  const [fever,setFever]=useState(false);
  const [dryCough,setDryCough]=useState(false);
  const [breathe,setBreathe]=useState(false);
  const [throat,setThroat]=useState(false);
  const [weakness,setWeakness]=useState(false);
  const [cardiac,setCardiac]=useState(false);

  const submitPressed =() => {
    props.setLoading(true);
    //const res = await axios.post();
    setTimeout(()=>props.setLoading(false),2000);
    setPressed(false);
  }
  location_find();
  if(!location){
  return <Login loading={true} string="Detecting your location..." />
  }else if(props.loading){
    return <Login loading={true} string="Allocating your ambulance ..." />
  }else
    return (
    <>
      { /* <h1 id="title">Dogluv Bakery Survey Form</h1>
      <p id="description">
        Thank you for taking time to help us keep improving!
      </p> */ }
      <div id="survey-form" style={{width:'400px',height:'93%',overflowY:'visible'}}>
        <div class="form-group">
          <label for="name" id="name-label">
            First Name
          </label>
          <br />
          <input
            type="text"
            id="fname"
            name="name"
            value={fName}
            onChange={(value)=>setFName(value)}
            placeholder="Enter your First name"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label for="lname" id="name-label">
            Last Name
          </label>
          <br />
          <input
            type="text"
            id="lname"
            name="name"
            value={lName}
            onChange={(value)=>setLName(value)}placeholder="Enter your Last name"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label for="phone" id="phone-label">
            Phone no.
          </label>
          <br />
          <input
                      
            type="tel"
            id="phone"
            name="phone"
            value={contact}
            placeholder="Phone no."
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label for="number" id="number-label">
            Age
          </label>
          <br />
          <input 
          type="number" 
          id="number" 
          name="number" 
          placeholder="Age"
          value={age}
          onChange={(value)=>setAge(value)} />
        </div>
        <br />
        <br />
        <div class="form-group">
          <label  for="gender" id="radio-label">
            Gender
          </label>
          <br />
          
          <div class="radio" style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',marginTop:10,marginBottom:10}}>

            <input id="male"  name="gender" type="radio"  onChange={(e)=>setGender('Male')}  />
            <label for="male" class="radio-label" >
              Male
            </label>
            <input id="female" name="gender" type="radio" onChange={(e)=>setGender('Female')} />
            <label for="male" class="radio-label">
              female
            </label>
            <input id="other" name="gender" type="radio" onChange={(e)=>setGender('Other')} />
            <label for="male" class="radio-label">
              Other
            </label>
          </div>
          
        </div>
        {/* <div class="form-group">
          <label for="contact" id="radio-label">
            Contact
          </label>
          <br />
          <div class="radio">
            <input id="YesContact" name="contact" type="radio" />
            <label for="YesContact" class="radio-label">
              Yes
            </label>
          </div>
          <div class="radio">
            <input id="NoContact" name="contact" type="radio" />
            <label for="NoContact" class="radio-label">
              No
            </label>
          </div>
        </div> */}
        <div class="form-group">
          <label for="fever" id="radio-label">
            Fever
          </label>
          <div class="radio" style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',marginTop:10,marginBottom:10}}>
            <input id="YesFever" name="fever" type="radio"  
            onChange={(e)=>{setFever(true)}} />
            <label for="YesFever" class="radio-label">
              Yes
            </label>
            <input id="NoFever" name="fever" type="radio"  checked={!fever}  
            onChange={(e)=>{setFever(false)}} />
            <label for="NoFever" class="radio-label">
              No
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="drycough" id="radio-label">
            Dry Cough
          </label>
          <div class="radio" style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',marginTop:10,marginBottom:10}}>
            <input id="YesDryCough" name="drycough" type="radio"  onChange={(e)=>setDryCough(true)}/>
            <label for="YesDryCough" class="radio-label">
              Yes
            </label>
            <input id="NoDryCough" name="drycough" type="radio" checked={!dryCough} onChange={(e)=>setDryCough(false)}/>
            <label for="NoDryCough" class="radio-label">
              No
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="breathe" id="radio-label">
            Difficulty in Breathe
          </label>
          <div class="radio" style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',marginTop:10,marginBottom:10}}>
            <input id="YesBreathe" name="breathe" type="radio"onChange={(e)=>setBreathe(true)} />
            <label for="YesBreathe" class="radio-label">
              Yes
            </label>
            <input id="NoBreathe" name="breathe" type="radio" checked={!breathe} onChange={(e)=>setBreathe(false)} />
            <label for="NoBreathe" class="radio-label">
              No
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="throat" id="radio-label">
            Sour Throat
          </label>
          <div class="radio" style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',marginTop:10,marginBottom:10}}>
            <input id="YesThroat" name="throat" type="radio"onChange={(e)=>setThroat(true)} />
            <label for="YesThroat" class="radio-label">
              Yes
            </label>
            <input id="NoThroat" name="throat" type="radio" checked={!throat} onChange={(e)=>setThroat(false)} />
            <label for="NoThroat" class="radio-label">
              No
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="weakness" id="radio-label">
            Weakness
          </label>
          <div class="radio" style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',marginTop:10,marginBottom:10}}>
            <input id="YesWeak" name="weak" type="radio"onChange={(e)=>setWeakness(true)} />
            <label for="YesWeak" class="radio-label">
              Yes
            </label>
            <input id="NoWeak" name="weak" type="radio" checked={!weakness} onChange={(e)=>setWeakness(false)} />
            <label for="NoWeak" class="radio-label">
              No
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="cardiac" id="radio-label">
            Cardiac
          </label>
          <div class="radio" style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',marginTop:10,marginBottom:10}}>
            <input id="YesCardiac" name="cardiac" type="radio"onChange={(e)=>setCardiac(true)} />
            <label for="YesCardiac" class="radio-label">
              Yes
            </label>
            <input id="NoCardiac" name="cardiac" type="radio" checked={!cardiac} onChange={(e)=>setCardiac(false)} />
            <label for="NoCardiac" class="radio-label">
              No
            </label>
          </div>
        </div>
        <div style={{justifyContent:'flex-end',display:'flex',width:'100%',flexDirection:'row'}}>
        <button name="accept" onClick={()=>submitPressed()} className="button accept" style={{width:'35%'}} >
          Submit
        </button>
        </div>
        </div>
      
      </>
  );
};

export default Form;
