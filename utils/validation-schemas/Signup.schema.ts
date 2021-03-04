import * as Yup from 'yup'

export const email = Yup.string()
  .email('Invalid Email')
  .matches(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    'Invalid Email'
  )
  .required('Email required')

export const password = Yup.string()
  //   .required('Password required')
  .min(6, 'Must be at least 6 characters.')
  .max(18, 'Too long password.')
  .matches(/^\S*$/, 'Password cannot contain spaces')
  .matches(/[a-z]/, 'Must contain at least one lowercase letter')
  .matches(/[A-Z]/, 'Must contain at least one uppercase letter')

export const repeatPassword = Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
  .required('Passwords must match')

export const username = Yup.string()
  .required('Username required')
  .matches(
    /^([a-zA-Z0-9\u0600-\u06FF\u0660-\u0669\u06F0-\u06F9@_.&-/$#]+)$/,
    'Special characters or spaces are not allowed'
  )

export const SignUpSchema = Yup.object({
  email,
  username,
  password,
})
