import React from 'react'

const Previewresume = (props) => {
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

const rvContact=(key, valToAppend)=>{
  if(props.contactSection){
    return props.contactSection[key]?props.contactSection[key] + (valToAppend?valToAppend:'') :'';
  }
  return '';
}

const rvEducation=(key, valToAppend)=>{
  if(props.educationSection){
    return props.educationSection[key]?props.educationSection[key] + (valToAppend?valToAppend:'') :'';
  }
  return '';
}
  return (
    <>
       <div className={ props.skinCd + "resume-preview d-flex justify-content-center flex-column align-items-center mt-5"}>
                <div className={'name-section'}>
                <p className='text-center fs-4' > {rvContact(fieldCd.FirstName,' ')  + rvContact(fieldCd.LastName)}  </p>
                    <p className='text-center fs-6'>{rvContact(fieldCd.City,', ') + rvContact(fieldCd.State,', ') +  rvContact(fieldCd.Country,', ') + rvContact(fieldCd.ZipCode,', ')}</p>
                    <p className='text-center fs-6'>{rvContact(fieldCd.Email ) }</p>
                    <p className='text-center fs-6'>{rvContact(fieldCd.Phone) } </p>
                </div>

                <div className={'profSummSection text-upper'}>                   
                    <p className="fw-bolder fs-4 text-center">PROFESSIONAL SUMMARY</p>
                     <div className=''><hr /></div>
                     <p className="text-center fs-6">{rvContact(fieldCd.ProfSummary)}</p>
                </div>

                <div className=''>                   
                    <p className="fw-bolder fs-4 text-center">EDUCATIONAL DETAILS</p>
                     <div className=''><hr /></div>
                     <p className="text-center fs-6">{rvEducation(fieldCd.SchoolName," ") +" (" + rvEducation(fieldCd.Degree) + ")"}</p>
                     {/* <p className="text-center">{rvEducation(fieldCd.Degree)}</p> */}
                     <p className="text-center fs-6">{rvEducation(fieldCd.City)}</p>
                     <p className="text-center fs-6">{rvEducation(fieldCd.GraduationCGPA)}</p>
                     <p className="text-center fs-6">{rvEducation(fieldCd.GraduationDate," ") + rvEducation(fieldCd.GraduationYear)}</p>
                     {/* <p className="text-center">{rvEducation(fieldCd.GraduationYear)}</p> */}
                </div>
          
            </div>
    </>
  )
}

export default Previewresume
