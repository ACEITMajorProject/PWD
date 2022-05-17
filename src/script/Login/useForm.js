import {
    useState,
    useEffect
} from 'react';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    const [error, setError] = useState({});
    const [isSubmiiting, setIsSubmitted] = useState(false);


    const handleChange = e => {
        const {
            name,
            value
        } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setError(validate(values));
        setIsSubmitted(true);
    };

    useEffect(
        () => {
            if (Object.keys(error).length === 0 && isSubmiiting) {
                callback();
            }
        },
        [error]
    );

    return {
        handleChange,
        handleSubmit,
        values,
        error
    };
};

export default useForm;








/*import React, { useState } from 'react';

import "../../styles/Form/login.css"
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess"




const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
*/