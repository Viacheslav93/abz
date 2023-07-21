
import * as Yup from 'yup';

//const phoneRegExp = /^\+38([\s]\d{3}[\s]\d{3}[\-]\d{2}[\-]\d{2})$/
const emailRegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const phoneRegExp = /^[\+]{0,1}380([0-9]{9})$/

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg',];

export const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too short!, min 2 symbols')
        .max(60, 'Too long!, max 60 symbols')
        .required('Required'),
    email: Yup.string()
        .matches(emailRegExp, 'Invalid email')
        .min(2, 'Too short!, min 2 symbols')
        .max(100, 'Too long!, max 100 symbols')
        .required('Required'),
    phone: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid, valid: +38 (XXX) XXX - XX - XX ')
        .typeError("Phone can't includes letters")
        .required('Required'),
    position: Yup.number()
        .integer('The position id must be an integer')
        .required('Required'), 
    upload: Yup.mixed()
        .nullable()
        .required('Required')
        .test('fileSize', 'Max file size is 5 mB' , 
        (value) => !value || (value && value.size <= 1024**5))
        .test('type', 'Correct format are: jpg, jpeg',
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type)))
})


