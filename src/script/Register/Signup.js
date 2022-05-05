import React from 'react';
import validate from "../Register/RegisterValidate";
import RegisterUseForm from "../Register/RegisterUseForm"
import "../../styles/Form/register.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = RegisterUseForm(
    submitForm,
    validate
  );

  return (
    <div className='Register-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1 className='Register-content-right-heading'>
         Register with us today!
        </h1>
        <div className="input-block">
        <div className='input-block-1'>
        <div className='form-inputs'>
          <label className='form-label'>Name</label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder='Enter your Name '
            // value={values.username}
            // onChange={handleChange}
          />
          {/* {errors.username && <p>{errors.username}</p>} */}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            // value={values.email}
            // onChange={handleChange}
          />
          {/* {errors.email && <p>{errors.email}</p>} */}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            // value={values.password2}
            // onChange={handleChange}
          />
          {/* {errors.password2 && <p>{errors.password2}</p>} */}
        </div>
         <div className='form-inputs'>
          <label className='form-label'>Mobile</label>
          <input
            className='form-input'
            type='number'
            name='Mobile'
            placeholder='Enter your 10-digit Mobile number'
            // value={values.password2}
            // onChange={handleChange}
          />
          {/* {errors.password2 && <p>{errors.password2}</p>} */}
        </div>
        </div>
        <div className="input-block-2">
         <div className='form-inputs'>
          <label className='form-label'>State</label>
          <input
            className='form-input'
            type='text'
            name='State'
            placeholder='Enter your state'
            // value={values.password2}
            // onChange={handleChange}
          />
          {/* {errors.password2 && <p>{errors.password2}</p>} */}
        </div>
         <div className='form-inputs'>
          <label className='form-label'>City</label>
          <input
            className='form-input'
            type='text'
            name='city'
            placeholder='Enter your city'
            // value={values.password2}
            // onChange={handleChange}
          />
          {/* {errors.password2 && <p>{errors.password2}</p>} */}
        </div>
         <div className='form-inputs'>
          <label className='form-label'>Address</label>
          <input
            className='form-input'
            type='text'
            name='address'
            placeholder='Enter your address'
            // value={values.password2}
            // onChange={handleChange}
          />
          {/* {errors.password2 && <p>{errors.password2}</p>} */}
        </div>
         <div className='form-inputs'>
          <label className='form-label'>Aadhar Number</label>
          <input
            className='form-input'
            type='text'
            name='AadharNumber'
            placeholder='Enter your Aadhar number'
            // value={values.password2}
            // onChange={handleChange}
          />
          {/* {errors.password2 && <p>{errors.password2}</p>} */}
        </div>
         <div className='form-inputs'>
          <label className='form-label'>UDID</label>
          <input
            className='form-input'
            type='text'
            name='UDID'
            placeholder='Enter UDID here'
            // value={values.password2}
            // onChange={handleChange}
          />
          {/* {errors.password2 && <p>{errors.password2}</p>} */}
        </div></div></div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
