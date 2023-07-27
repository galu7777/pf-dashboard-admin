import { useState } from 'react';
import './Form.css';

export default function Form({login }) {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });


  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();    
    login(userData);
  }

  return (

    <div className='container-form'>
        <form onSubmit={handleSubmit} className='form'>               
            
            <div className='div-form'>
                
                <div className='ctn-label'>
                  <label htmlFor="email" className='label'>Email: </label>
                </div>
                <input 
                  type="email" 
                  className='input' 
                  name='email' 
                  value={userData.email}
                  onChange={handleChange}
                  placeholder='Ingresa tu email'
                />

                <div className='ctn-label'>
                  <label htmlFor="password" className='label'>Password: </label>
                </div>
                <input 
                  type="text" 
                  className='input' 
                  name='password' 
                  value={userData.password}
                  onChange={handleChange}
                  placeholder='Ingresa tu contraseña'
                />

                <button className='btn'><span className='spn'>Submit</span><i></i></button>
            </div>
            
        </form>
    </div>
  )
}
