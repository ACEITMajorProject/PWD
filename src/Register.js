import React from 'react'
import "./styles/register.css"

function Register() {
  return (
    <div className='register'>
        <div className="register__tag">
            Steps To Register
        </div>
        <div className="register__steps">
            <div className="register__steps--first">
                <div className="register__steps--first1">
                    1
                </div>
                 <div className="register__steps--firstText">
                    <div className="register__steps--firstText--heading">
                        Sign up with UDID
                    </div>
                     <div className="register__steps--firstText--subHeading">
                       Create an account and it will give you more chance to shine
                     </div>
                     <div className="register__steps--firstText--alt">
                         OR <br/> Register Yourself to get your UDID
                     </div>
                 </div>
            </div>

            <div className="register__steps--second">
                <div className="register__steps--second2">2</div>
                <div className="register__steps--secondText">
                    <div className="register__steps--secondText--heading">Upload details</div>
                    <div className="register__steps--secondText--subHeading">Let us know more about you... <br/> We will verify yout details and send you the confirmation</div>
                </div>
            </div>

            <div className="register__steps--third">
                <div className="register__steps--third3">3</div>
                <div className="register__steps--thirdText">
                    <div className="register__steps--thirdText--heading">Get access</div>
                    <div className="register__steps--thirdText--subHeading">You are all set to find the best suitable schemes and programs to avail the maximum benefit according to your need</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register