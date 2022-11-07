import React, {useState,setState} from 'react';
import {database} from './firebase'
import {ref,push,child,update} from "firebase/database";
import "./pages/member/addmember.scss" 

function Addmembers () {
  const [branchName,setbranchName] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [middleName,setmiddleName] = useState(null);
  const [enrollmentdate,setenrollmentdate] = useState(null);

  const handleInputChange = (e) => {
      const {id , value} = e.target;
      if(id === "firstName"){
          setFirstName(value);
      }
      if(id === "middleName"){
        setmiddleName(value);
    }
      if(id === "lastName"){
          setLastName(value);
      }
      if(id === "branchName")
      {
        setbranchName(value);
      }
      if(id === "enrollmentdate")
      {
        setenrollmentdate(value);
      }

  }
   

  const handleSubmit = () =>{
    let obj = {
            branchName: branchName,
            firstName : firstName,
            lastName:lastName,
            middleName:middleName,
            enrollmentdate:enrollmentdate,
        }       
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates = {};
    updates['/' + newPostKey] = obj
    return update(ref(database), updates);
}
  return(
    <div>
    <div className="formContainer">
      <div className="formWrapper">
        <span className='title'> Add members</span>
        <div>
        <form  onSubmit={handleSubmit}>
        <input className="form__input" type="text" value={branchName} onChange = {(e) => handleInputChange(e)} id="branchName" placeholder="Branch Name"/>
        <input className="form__input" type="date" value={enrollmentdate} onChange = {(e) => handleInputChange(e)} id="enrollmentdate" placeholder="First Name"/>
            {/*<input type = {"radio"} placeholder ="title" />*/}
            
            <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
            <input className="form__input" type="text" value={middleName} onChange = {(e) => handleInputChange(e)} id="middleName" placeholder="Middle Name"/>
            <input className="form__input" type="text" value={lastName} onChange = {(e) => handleInputChange(e)} id="lastName" placeholder="Last Name"/>
          
            <input type={"text"} placeholder ="Gender"/>
            <input type={"text"} placeholder ="Occupation"/>
            <input type ={"date"} placeholder = "DOB"/>
            <input type={"text"} placeholder ="Father name"/>
            <input type={"text"} placeholder ="Mother name"/>
            <input type={"text"} placeholder ="Marital Status"/>
            <input type={"text"} placeholder ="Husband/Wife name"/>
            <input type={"email"} placeholder="email"/>
            <button onClick={()=>handleSubmit()} type="submit" class="btn" style={{backgroundColor : 'green'}} >Register</button>
            
        </form>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Addmembers;
