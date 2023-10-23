import React from 'react'
import Previewresume from "./Previewresume"
import { connect } from "react-redux";

const Finalpage = (props) => {
  console.log(props)
  let educationSection= props.educationSection
  let contactSection=props.contactSection
  let documentd=props.document

  return (
    <>
      <div className="maincontainer">
      <div className="previewcontainerfinal">
          <div className="prevformcontainerfinal">
            <Previewresume contactSection={props.contactSection} educationSection={props.educationSection} skinCd={props?.document?.skinCd}/>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-start mt-5">
        <div className=" download-resume resume-options d-flex justify-content-center align-items-center flex-column mb-3">
                <p className="no-margin"  >
                  Download Resume As PdF
                </p>
                    <a className="downloadresume"  >Download Resume</a>
             </div>
             <div className=" download-resume resume-options d-flex justify-content-center align-items-center flex-column">
                <p className="no-margin"  >
                 Save to Database
                </p>
                    <a className="saveresume" >Save to Database</a>
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
    educationSection : state.education,
    // auth:state.firebase.auth
  }
}

export default connect(mapStateToProps)(Finalpage)
