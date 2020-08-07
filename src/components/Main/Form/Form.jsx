import React from 'react'
import PropTypes from 'prop-types'
import classNames from './Form.module.css'
import * as yup from 'yup'
import { Row } from './Row/Row'
import { Form as FormikForm, Field, withFormik } from 'formik'

const AddForm = ({ errors/*,  touched */ }) => {
  // const hasError = hasInputsError(errors, touched)
  return (
    <FormikForm className={classNames.form}>
      <Row>
        <Field name={'firstName'} type={'firstName'} placeholder={'firstName'} />
      </Row>
      <Row>
        <Field name={'lastName'} type={'lastName'} placeholder={'lastName'} />
      </Row>
      <Row>
        <Field name={'email'} type={'email'} placeholder={'example@email.com'} />
      </Row>
      <Row>
        <Field name={'phone'} type={'phone'} placeholder={'(095)555-5555'} />
      </Row>
      <div>
        <button type="submit" disabled={Object.values(errors).some(input => input)}>
          Add
        </button>
      </div>
    </FormikForm>
  )
}

// const hasInputsError = (errors, touched) => {
//   const hasError = {}
//   for (const input in errors) {
//     hasError[input] = touched[input] && errors[input]
//   }
//   return hasError
// }

export const Form = withFormik({
  mapPropsToValues() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    }
  },
  validationSchema: yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup
      .string()
      .matches(/\(\d{3}\)\d{3}-\d{4}|\(\d{3}\)\d{7}|\d{10}/)
      .required(),
  }),
  handleSubmit(values, { resetForm, props: { addUser } }) {
    addUser(values)
    resetForm()
  },
})(AddForm)

AddForm.propTypes = {
  errors: PropTypes.object,
  touched: PropTypes.object,
}
