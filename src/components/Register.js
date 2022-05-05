import Signup from "../script/Register/Signup";
import Success from "../script/Register/Success";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="form">
      <div className="wave"><svg id="visual" viewBox="0 0 900 720" width="900" height="720" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="720" fill="#fff"></rect><path d="M344 0L357.2 40C370.3 80 396.7 160 411.3 240C426 320 429 400 413.8 480C398.7 560 365.3 640 348.7 680L332 720L0 720L0 680C0 640 0 560 0 480C0 400 0 320 0 240C0 160 0 80 0 40L0 0Z" fill="#EBAB2D" stroke-linecap="round" stroke-linejoin="miter"></path></svg></div>
      <div className='Register-container'>
               {/* <div className='form-content-left'>
         <div className="form-content-left__heading">HELPING HANDS<FontAwesomeIcon icon={faHandHoldingHeart} className="website__logo"/></div>
         <div className="form-content-left__subHeading">
     <blockquote><h3>
    you are not disabled, just differently abled</h3></blockquote></div>
          </div> */}
        {!isSubmitted ? (
          <Signup submitForm={submitForm}/>
        ) : (
          <Success/>
        )}
      </div>
      </div>
  );
};

export default Register;
