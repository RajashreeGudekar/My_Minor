import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <>
      <section classNameName='login'>
       <div classNameName='left'>
       <div className="form-container">
  <h2>Enter CNR Number</h2>
  <form>
    <div className="form-group">
      <label for="cnr">CNR Number:</label>
      <input type="text" id="cnr" name="cnr" placeholder="Enter CNR Number" required/>
    </div>
    <div className="form-group">
      <label for="captcha">CAPTCHA:</label>
      <img className="captcha-image" src="https://via.placeholder.com/150" alt="CAPTCHA Image"/>
      <span className="captcha-refresh-btn" onclick="refreshCaptcha()">Refresh CAPTCHA</span>
    </div>
    <button type="submit">Submit</button>
  </form>
</div>
       </div>
       <div classNameName='right'></div>
      </section>
    </>
  )
}

export default Login
