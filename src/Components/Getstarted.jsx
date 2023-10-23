import React from 'react'
import {setSkin,updateSkin} from '../Actions/Documentactions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const Getstarted = (props) => {
  const skinCodes = ['skin1', 'skin2', 'skin3','skin4','skin5','skin6' ]; 
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
const skinData = [
  {
    code: 'skin1',
    image: "https://s3.resume.io/cdn-cgi/image/width=544,height=480,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/751/persistent-resource/madrid-cover-letter-templates.jpg"
  },
  {
    code: 'skin2',
    image: "https://d25zcttzf44i59.cloudfront.net/academic-word-resume-template.png"
  },
  {
    code: 'skin3',
    image: 'https://s3.amazonaws.com/thumbnails.venngage.com/template/92e9bf81-5ca0-418d-b95d-efd91ce24f2d.png'
  },
  {
    code: 'skin4',
    image: 'https://cdn.enhancv.com/Double_Column_Resume_Template_Enhancv_1_d747b76f51.png'
  },
  {
    code: 'skin5',
    image: 'https://d.novoresume.com/images/doc/it-resume-template.png'
  },
  {
    code: 'skin6',
    image: 'https://www.freesumes.com/wp-content/uploads/2023/05/resume-template-with-photo.jpg'
  },

];

  const onChange = (skinCd) =>{
    if(props.document.id){  
      props.updateDocument(skinCd)
  }else{
      props.setDocument(skinCd)
  }
  }
  return (
    <>
      <div className="container med gettingStarted">
          <div className="section">
                    <div className="d-flex justify-content-center flex-column mt-5 align-items-center">
                       <h1 className=" center fs-2">Select a resume template to get started</h1>
                       <p className=" center">You’ll be able to edit and change this template later! </p>
                    </div>
                    <div className="styleTemplate d-flex justify-content-center align-items-center mt-5">
                       
                       {
                        skinCodes.map((value,index)=>{
                          return(
                            <div class="templateimg card text-bg-dark mx-5" key={index}>
                            <img src={skinData.find(skin => skin.code === value).image} class="card-img" alt={`skin${index + 1}`}/>
                             <div class="card-img-overlay resumecoverbtn">
                             <Link className="btn btn-primary"  to="/Contact"onClick={()=>onChange(value)}>Select</Link>
                              </div>
                            </div> 
                          )
                        })
                       }
                    </div>
          </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return{
      document : state.document
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      setDocument : (skinCd) => dispatch(setSkin(skinCd)),
      updateDocument : (skinCd) => dispatch(updateSkin(skinCd))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Getstarted)


