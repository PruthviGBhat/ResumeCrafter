import React ,{useState} from 'react'
import "../App.css";
import Previewresume from "./Previewresume"
import { Link } from "react-router-dom";
import { setContact, updateContact } from "../Actions/Contactactions.js";
import { connect } from "react-redux";

const Contact = (props) => {
  const [contact,setContact]= useState(props.contact);
  const skinCodes = ['skin1', 'skin2', 'skin3','skin4' ]; 
  const fieldCd = {
    FirstName: "FNAM",
    LastName: "LNAM",
    Profession:"PROF",
    ProfSummary:"PRSU",
    Phone: "PHON",
    City: "CITY",
    Company: "COMP",
    Degree: "DGRE",   
    FreeFormat: "FRFM",
    GraduationCGPA: "GRCG",
    GraduationYear: "GRYR",
    GraduationDate: "GRDT",
    HomePhone: "HPHN",
    JobCity: "JCIT",
    JobDescription: "JDES",
    JobEndDate: "EDDT",
    JobStartDate: "JSTD",
    JobState: "JSTA",
    JobTitle: "JTIT", 
    Location: "LOCN",
    SchoolCity: "SCIT",
    SchoolName: "SCHO",
    SchoolState: "SSTA",
    State: "STAT",
    Street: "STRT",
    ZipCode: "ZIPC",
    Email: "EMAI",
    IsEmailHidden: "EHID",
    SchoolCountry: "SCNT",
    JobCountry: "JCNT",
    Country: "CNTY"  
};
  const onchange=(event)=>{
    var key =event.target.name;
    var val =event.target.value;
    setContact({...contact,[key]:val})
}
const onSubmit= async()=>{
  if(props.contact!=null){
    //update
    props.updateContact(contact)
}else{
    //set
    props.setContact(contact)
}
}
const getFieldData = (key) =>{
  if(contact && contact[key]){
    return contact[key]
  }
  return "";
}
  return (
    <>
    <div className="titletext">
      <h2>Contact Details</h2>
      <h2>Resume Preview</h2>
    </div>
      <div className="maincontainer">
        <div className="contactcontainer">
          <div className="contformcontainer mx-3">
            <form>
              <div className="form-row d-flex ">
                <div className="col mx-2 my-3">
                 <input type="text" className="form-control continstyle " placeholder="First name" name={fieldCd.FirstName} value={getFieldData(fieldCd.FirstName)}  onChange={onchange}/>
                </div>
                <div className="col mx-2 my-3">
                 <input type="text" className="form-control continstyle" placeholder="Last name" name={fieldCd.LastName}  value={getFieldData(fieldCd.LastName)}  onChange={onchange}/>
                </div>
              </div>
              <div className="form-row d-flex ">
                <div className="col mx-2 my-3">
                 <input type="text" className="form-control continstyle" placeholder="Email" name={fieldCd.Email}  value={getFieldData(fieldCd.Email)}  onChange={onchange}/>
                </div>
                <div className="col mx-2 my-3">
                 <input type="text" className="form-control continstyle" placeholder="Phone No."name={fieldCd.Phone}   value={getFieldData(fieldCd.Phone)}  onChange={onchange}/>
                </div>
              </div>
              <input type="text" className="form-control " placeholder="Professional Summary"name={fieldCd.ProfSummary}   value={getFieldData(fieldCd.ProfSummary)}  onChange={onchange} />
              <div className="form-row d-flex ">
                <div className="col mx-2 my-3">
                 <input type="text" className="form-control continstyle" placeholder="Profession" />
                </div>
                <div className="col mx-2 my-3">
                 <input type="text" className="form-control continstyle" placeholder="Street" name={fieldCd.Street}   value={getFieldData(fieldCd.Street)}  onChange={onchange}/>
                </div>
              </div>
              <div className="form-row d-flex ">
                <div className="col mx-2 my-3">
                 <input type="text" className="form-control continstyle" placeholder="City" name={fieldCd.City}  value={getFieldData(fieldCd.City)}  onChange={onchange}/>
                </div>
                <div className="col mx-2 my-3">
                 <input type="text" className="form-control continstyle" placeholder="State"  name={fieldCd.State}  value={getFieldData(fieldCd.State)}  onChange={onchange} />
                </div>
              </div>
              <div className="form-row d-flex ">
                <div className="col mx-2 my-3">
                 <input type="text" className="form-control continstyle" placeholder="Country" name={fieldCd.Country}  value={getFieldData(fieldCd.Country)}  onChange={onchange}/>
                </div>
                <div className="col mx-2 my-3">
                 <input type="text" className="form-control continstyle" placeholder="Pincode" name={fieldCd.ZipCode}  value={getFieldData(fieldCd.ZipCode)}  onChange={onchange}/>
                </div>
              </div>
              <Link className="btn btn-primary loginbtn" to="/Education" onClick={onSubmit}>Next</Link>
            </form>
          </div>
        </div>
        <div className="previewcontainer">
          <div className="prevformcontainer">
            <Previewresume contactSection={contact} skinCd={props?.document?.skinCd}/>
          </div>
        </div>
      </div>
    </>
  )
}


const mapStateToProps = (state) => {
  return{
      document : state.document,
      contact : state.contact
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      setContact : (contact) => dispatch(setContact(contact)),
      updateContact : (contact) => dispatch(updateContact(contact))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact);
