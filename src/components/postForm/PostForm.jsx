import styles from './PostForm.module.scss'

import React, { useContext, useState } from 'react'

import {Formik, Form,} from 'formik'

import {Title} from '../title/Title'

import {InputField} from '../ui/inputField/InputField'
import { Button } from '../ui/button/Button'
import { RadioList } from '../ui/radioGroup/RadioList'
import contextApp from '../../context/ContextApp'
import {Success} from '../success/Success'

import { SignupSchema } from './validationShema'
import { InputFile } from '../ui/inputFile/InputFile'
import { initialValuesForm } from './initialValuesForm'
import { handleSubmitForm } from './handleSubmitForm'
import { usersData } from '../../servisec/userServices'


export const PostForm = ({setUsers}) => {

    const {signUpRef, setCurrentPage} = useContext(contextApp)

    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = async(values, {resetForm}) => {

      const user =  await usersData.addUser(values)
      const status = await usersData.getStatus()
  
      setUsers(prev => [user, ...prev])
      setIsSuccess(status)
      setCurrentPage(1)
      resetForm()
    }

  return (
    <div ref={signUpRef} className={styles.postForm}>

        <div className={`container ${styles.container}`}>
          <Title>
            Working with POST request
          </Title>

          {isSuccess ? ( 
            <Success seIsSuccess={setIsSuccess} />
          ) : ( 
           <Formik 
              initialValues={initialValuesForm}
              validationSchema={SignupSchema}
              onSubmit={handleSubmit}
           >
          {({
              errors,
              touched,
              isValid,
              dirty,
              values,
              setFieldValue,
              handleBlur
          }) => (
              <Form className={styles.form}>
                <InputField 
                  name={'name'}
                  label={'Your name'}
                  error={errors.name && touched.name && errors.name}
                />
                <InputField 
                  name={'email'}
                  label={'Email'}
                  error={errors.email && touched.email && errors.email}
                />
                <InputField 
                  name={'phone'}
                  label={'Phone'}
                  helper={'+38 (XXX) XXX - XX - XX'}
                  error={errors.phone && touched.phone && errors.phone}
                />
                <RadioList 
                  values={values}
                  setFieldValue={setFieldValue}
                />
                <InputFile  
                  name = {'upload'}
                  setFieldValue={setFieldValue}
                  onBlur={handleBlur}
                  helper={'Valid formats are: jpg, jpeg'}
                  error={errors.upload && touched.upload && errors.upload}
                />
                <Button 
                   disabled={!(isValid && dirty)} 
                   type= "submit"
                >Sign up</Button>
              </Form>
            )}
        </Formik >
        )}
        </div>
    </div>
  )
}




  