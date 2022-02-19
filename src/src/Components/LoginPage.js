import React from 'react'
import './LoginPage.css'
function LoginPage() {
  return (
    <div className='loginPage'>
        <div className='wrapper'>
            <div className='imageContainer'>
                <img src='https://lh3.googleusercontent.com/eVzKAL9kwcwiIrCziuB9by6TExyNEzRnslP1v9aoVa_SJdMWv327sPg-SrIDZgvdW5ZqBArrxFrXmPC9xGnguitLycxmVyPGEt3h=w600'/>
            </div>
            <div className='title-text'>
                <div className='title Login'>Login Form</div>
            </div>

            <div className='formContainer'>
                <div className='formInner'>
                    <form action='#' className='login'>
                        <div className='field'>
                            <input type={'text'} placeholder='example: ID2335'/>
                        </div>
                        <div className='field'>
                            <input type={'password'} placeholder='Password'/>
                        </div>
                        <div className='Forget'><a href='#'>Forget Password ?</a></div>
                        <div className='field'>
                            <input type={'submit'} value='Login'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default LoginPage