import React,{useState}from 'react'
import Previewresume from "./Previewresume"
import { Link } from "react-router-dom";
import { setEducation, updateEducation } from "../Actions/Educationaction";
import { connect } from "react-redux";


const Education = (props) => {
  const [education,setEducation]= useState(props.educationSection);
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
  const onchange = (event) => {
    var key =event.target.name;
    var val =event.target.value;
    setEducation({...education,[key]:val})
  }
  const getFieldData=(key)=>{
    if(education && education[key]){
      return education[key]
    }
    return "";
}
  const onSubmit = async(e) => {
    if(props.educationSection!=null){
      //update
      props.updateEducation(education)
    }else{
      //set
      props.setEducation(education)
    }
  }
  return (
    <>
     <div className="titletext">
      <h2>Education Details</h2>
      <h2>Resume Preview</h2>
    </div>
       <div className="maincontainer">
        <div className="contactcontainer">
          <div className="contformcontainer mx-3">
            <form>
              <div className="form-row d-flex ">
                <div className="col mx-2 my-3">
                 <input type="text" className="form-control continstyle " placeholder="College Name" name={fieldCd.SchoolName} onChange={onchange} value={getFieldData(fieldCd.SchoolName)}/>
                </div>
                <div className="col mx-2 my-3">
                 <input type="text" className="form-control continstyle" placeholder="Degree" name={fieldCd.Degree}  onChange={onchange} value={getFieldData(fieldCd.Degree)}/>
                </div>
              </div>
              <div className="form-row d-flex ">
                <div className="col mx-2 my-3">
                 <input type="text" className="form-control continstyle" placeholder="CGPA" name={fieldCd.GraduationCGPA} onChange={onchange} value={getFieldData(fieldCd.GraduationCGPA)}/>
                </div>
                <div className="col mx-2 my-3">
                 <input type="text" className="form-control continstyle" placeholder="Graduation Year" name={fieldCd.GraduationYear} onChange={onchange} value={getFieldData(fieldCd.GraduationYear)}/>
                </div>
              </div>
              <div className="form-row d-flex ">
                <div className="col mx-2 my-3">
                 <input type="text" className="form-control continstyle" placeholder="City/state" name={fieldCd.City} onChange={onchange} value={getFieldData(fieldCd.City)}/>
                </div>
                <div className="col mx-2 my-3">
                 <input type="text" className="form-control continstyle" placeholder="Graduation Month" name={fieldCd.GraduationDate} onChange={onchange} value={getFieldData(fieldCd.GraduationDate)}/>
                </div>
              </div>
              
              <Link className="btn btn-primary loginbtn" to="/Finalpage"  onClick={onSubmit}>Next</Link>
            </form>
          </div>
        </div>
        <div className="previewcontainer">
          <div className="prevformcontainer">
          <Previewresume contactSection={props.contactSection} educationSection={education} skinCd={props?.document?.skinCd}/>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return{
    document : state.document,
    contactSection : state.contact,
    educationSection : state.education
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setEducation : (education) => dispatch(setEducation(education)),
    updateEducation : (education) => dispatch(updateEducation(education))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Education)
