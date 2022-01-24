import React, {useState} from 'react';
import "./App.css"
import { Formik } from "formik";
import * as yup from "yup"

export const App = () => {
    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Must be string').required('Обов\'язкове поле'),
        secondName: yup.string().typeError('Must be string').required('Обов\'язкове поле'),
        password: yup.string().typeError('Must be string').required('Обов\'язкове поле'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'do not match passwords').required('Обов\'язкове поле'),
        email: yup.string().email('Enter the correct email').required('Обов\'язкове поле'),
        confirmEmail: yup.string().email('Enter the correct email').oneOf([yup.ref('email')], 'do not match email').required('Обов\'язкове поле'),
    })

    const [data, setData] = useState([])
    console.log(data)

  return (
      <div className="form-container">
        <Formik
            initialValues={{
                name: '',
                secondName: '',
                password: '',
                confirmPassword: '',
                email: '',
                confirmEmail: ''
            }}
            validateOnBlur
            onSubmit={(values) => {
                console.log(values)
            }}
            validationSchema={validationsSchema}
        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, resetForm }) => (
                <div className="App">
                    <h1>Registration</h1>
                    <p>
                        <label htmlFor={`name`}>
                            Name
                            <br/>
                            <input
                                className="input"
                                type={`text`}
                                name={`name`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                        </label>
                    { touched.name && errors.name && <p className={`error`}>{errors.name}</p> }
                    </p>
                    <p>
                        <label htmlFor={`secondName`}>
                            Surname
                            <br/>
                            <input
                                className="input"
                                type={`text`}
                                name={`secondName`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.secondName}
                            />
                        </label>
                        { touched.secondName && errors.secondName && <p className={`error`}>{errors.secondName}</p> }
                    </p>
                    <p>
                        <label htmlFor={`password`}>
                            Password
                            <br/>
                            <input
                                className="input"
                                type={`password`}
                                name={`password`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                        </label>
                        { touched.password && errors.password && <p className={`error`}>{errors.password}</p> }
                    </p>
                    <p>
                        <label htmlFor={`confirmPassword`}>
                            Confirm password
                            <br/>
                            <input
                                className="input"
                                type={`password`}
                                name={`confirmPassword`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                            />
                        </label>
                        { touched.confirmPassword && errors.confirmPassword && <p className={`error`}>{errors.confirmPassword}</p> }
                    </p>
                    <p>
                        <label htmlFor={`email`}>
                            Email
                            <br/>
                            <input
                                className="input"
                                type={`email`}
                                name={`email`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </label>
                        { touched.email && errors.email && <p className={`error`}>{errors.email}</p> }
                    </p>
                    <p>
                        <label htmlFor={`confirmEmail`}>
                            Confirm email
                            <br/>
                            <input
                                className="input"
                                type={`email`}
                                name={`confirmEmail`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmEmail}
                            />
                        </label>
                        { touched.confirmEmail && errors.confirmEmail && <p className={`error`}>{errors.confirmEmail}</p> }
                    </p>
                    <button
                    disabled={!isValid && !dirty}
                    onClick={(values) => {
                        handleSubmit()
                        setData(prev => [...prev, values])
                        resetForm()
                    }}
                    type={`submit`}
                    >
                        Send
                    </button>
                </div>
            )}
        </Formik>
      </div>
  );
};
