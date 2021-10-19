import React from 'react';
import picture1 from '../../images/Aboutus/interior-view.jpg';
import picture2 from '../../images/Aboutus/nurse-conducts.jpg';
import './Aboutus.css';

const AboutUS = () => {
    return (
        <div className="Abvout-us">
           <div>
           <h3>The New Way to Healthy Life Diagnostic Treatment Healthy Life</h3>
            <h5> Insaf is committed to render the possible standard service to the people of the country at an affordable cost. This will definitely reduce the burden of the government and will make the path of "Health for all".</h5>
           </div>
           <div className="about-firstside">
               <div>
                   <img className="img-1" src={picture1} alt="" />
               </div>
               <div>
                   <h4>Who We Are</h4>
                   <p>Insaf Diagnostic Centre Ltd. is an advanced Centre for diagnostic and medical services. It is one of the prestigious diagnostic complexes of Bangladesh which started its activities in 1983. Insaf Diagnostic Centre Ltd. is the largest diagnostic services provider organization in private sector of the country. It is been pioneer in introducing world latest medical equipments and advanced technology to provide round the clock medical investigations and consultancy services.

                   LEGAL STATUS Insaf Diagnostic Centre Ltd. is a private limited company registered with the Ministry of Health & Family Welfare, People’s Republic Govt. of Bangladesh having License No. 1275 &688.</p>
               </div>
           </div>
           
           <div className="about-Secondside">
           <div>
           <h3>Our Goal</h3>
           <p>1.To establish a referral Diagnostic and Medical Services Centre.
               2.To render the world standard diagnostic service to the people of the country at an affordable cost and in turn to limit the outflow of the patient abroad at the expense of heard earn foreign currency by providing quality diagnostic services.
               3.Out door basis treatment by renowned General Practitioners, Consultants and Professors in different medical fields.
               4.To promote Health Education & Medical Services.
               5.Day care Centre for follow-up cardiac renal and oncology patients.
                6.To build a full fledged specialized (Tertiary) Hospital.
               7.Set up Satellite collection Centre.</p>
           </div>
           <div>
               <img className="img-1" src={picture2} alt="" />
           </div>
           </div>
        </div>
    );
};

export default AboutUS;