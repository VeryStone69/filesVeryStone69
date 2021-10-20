import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function Registration() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [emailDirty, setEmailDirty] = useState(false)
const [passwordDirty, setPasswordDirty] = useState(false)
const [emailError, setEmailError] = useState('Email не может быть пустым')
const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
const [formValid, setFormValid] = useState(false)

const blurHandler = (e) => {
  switch(e.target.name) {
    case 'email':
      setEmailDirty(true)
      break
    case 'password':
      setPasswordDirty(true)
      break
  }
}

useEffect(() => {
  if(emailError || passwordError) {
    setFormValid(false)
  } else {
    setFormValid(true)
  }
}, [emailError, passwordError])

const emailHandler = (e) => {
  setEmail(e.target.value)
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!re.test(String(e.target.value).toLowerCase())) {
    setEmailError('Некорректный email')
  } else {
    setEmailError("")
  }
}

const passwordHandler = (e) => {
  setPassword(e.target.value)
  if(e.target.value < 0 || e.target.value > 16) {
    setPasswordError('Пароль должен состоять не только из цифр')
    if(!e.target.value){setPasswordError('Пароль не может быть пустым')}
  } else {
    setPasswordError('')
  }
}

return (
        <div className = 'app'>
          <form className = 'form'>

           <div><h1>Регистрация</h1></div>

           <div className='itemForm'>
              {(emailDirty && emailError) && <span style={{color: 'red',fontSize: 13}}>{emailError}</span>}
              <input onChange={e => emailHandler(e)} value ={email} onBlur= {e => blurHandler(e)} type="text" name='email' placeholder='Введите адрес почты'  />
            </div>

            <div className='itemForm'>
              {(passwordDirty && passwordError) && <span style={{color: 'red',fontSize: 13}}>{passwordError}</span>}
              <input onChange={e => passwordHandler(e)} value={password} onBlur= {e => blurHandler(e)} type="password" name='password' placeholder='Введите пароль' />
            </div>

            <div className='button'>
              <div>
              <button disabled={!formValid} type='submit'>Зарегистрироваться</button>
              </div>
              <div>
              <button type='submit'>Отмена</button></div>
            </div>
           </form>
        </div>
  )

}
export default Registration;