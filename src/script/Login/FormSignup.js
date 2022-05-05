import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import "../../styles/Form/login.css"

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' >
        <h1 className='form-content-right__heading'>
        Login to get the latest information you can benefit from
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>UDID or Username</label><br/>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your UDID or Username'
            // value={values.username}
            // onChange={handleChange}
          />
          {/* {errors.username && <p>{errors.username}</p>} */}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label><br />
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            // value={values.password}
            // onChange={handleChange}
          />
          {/* {errors.password && <p>{errors.password}</p>} */}
        </div>
        <button className='form-input-btn' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
