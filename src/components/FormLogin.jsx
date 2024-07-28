import React from 'react'
import '../styles/FormLogin.css'

function FormLogin() {
  return (
    <form className="form-dashboard">
        <label htmlFor="email">Identifiant</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Mot de passe</label>
        <input htmlFor="password" type="password" name="password" required />
    <button className='signup_button'>
        Se connecter
    </button>
  </form>
  )
}

export default FormLogin