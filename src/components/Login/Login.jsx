import { useState } from 'react';
import './Login.css';
import logoMarca from '../../assets/logoMarca.jpg';
import Swal from 'sweetalert2';

export default function Form({login }) {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  // const [loginError, setLoginError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (event.target.name === 'password' && value.length < 5) {
      setPasswordError('La contraseña tiene que ser mayor a 4 caracteres');
    } else {
      setPasswordError('');
    }

    if (event.target.name === 'email' && !emailRegex.test(value)) {
      setEmailError('El email no es válido');
    } else {
      setEmailError('');
    }

    setUserData({
      ...userData,
      [name]: value
    });
    
  }

  const handleSubmit = async (event) => {
    event.preventDefault();    
    try {
      await login(userData);
      // Swal.fire({

      //   title: 'Iniciando sesion',
      //   html: '<div class="loader"></div>', 

      //   showCancelButton: false,
      //   showConfirmButton: false,
      //   allowOutsideClick: false,
      //   allowEscapeKey: false,
      //   allowEnterKey: false,
      //   didOpen: () => {
      //     Swal.showLoading();
      //   },
      // });

      // setTimeout(() => {
      // }, 800);
      Swal.fire('Inicio de Sesion Exitoso', 'Bienvenido al Dashboard de ONE', 'success')
    } catch (error) {
      // setLoginError(error.message)
      Swal.fire('Inicio de Sesion fallido', 'Ooops ha ocurrido un error chequea tus datos', 'error')
    }
  }

  return (

    <div className='container-form'>
        <form onSubmit={handleSubmit} className='form'>               
            
            <div className='div-form'>
                <img src={logoMarca} alt="" width={'340px'} height={'135px'}/>
                
                <div className='ctn-label'>
                  <label htmlFor="email" className='label'>Email: </label>
                </div>
                <div className='cont-input'>
                  <input 
                    type="email" 
                    className='input' 
                    name='email' 
                    value={userData.email}
                    onChange={handleChange}
                    placeholder='Ingresa tu email'
                  />
                </div>
                {emailError && <p style={{color: 'red', fontSize: '14px', marginTop: '20px'}}>{emailError}</p>}

                <div className='ctn-label'>
                  <label htmlFor="password" className='label'>Password: </label>
                </div>
                <div className='cont-input'>
                  <input 
                    type="password" 
                    className='input' 
                    name='password' 
                    value={userData.password}
                    onChange={handleChange}
                    placeholder='Ingresa tu contraseña'
                  />
                </div>
                  {passwordError && <p style={{color: 'red', fontSize: '14px', marginTop: '20px'}}>{passwordError}</p>}

                <button className='btn-form'><span className='spn'>Submit</span><i></i></button>
            </div>
            
        </form>
    </div>
  )
}
