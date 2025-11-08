import { useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import './styles/Auth.css';

const Signin = () => {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const history = useHistory();

  const changepassword = () => {
    history.push('/ChangePassword')
  }

  const backToHome = () => {
    history.push('/');
  }

  const signinUser = async () => {
    setError('')
    if (role == '' || role.length == 0) {
      setError("Please select your role")
      return
    }
    else if (Email.length === 0) {
      setError('Please enter email')
      return
    } else if (Password.length === 0) {
      setError('Please enter password')
      return
    }

    setIsLoading(true)
    const data = { email: Email, password: Password }

    try {
      let response;
      if (role == "CUSTOMER") {
        response = await axios.post(`http://localhost:8080/customer/login`, data)
      } else {
        response = await axios.post(`http://localhost:8080/vendor/login`, data)
      }

      const result = response.data
      if (result) {
        alert('Successfully Logged in!')
        if (role === "CUSTOMER") {
          sessionStorage.setItem('customer', JSON.stringify(result))
          sessionStorage.setItem('customerId', result.id)
          history.push('/customer')
        } else {
          sessionStorage.setItem('vendor', JSON.stringify(result))
          sessionStorage.setItem('vendorId', result.id)
          history.push('/vendor')
        }
      } else {
        setError('Invalid credentials')
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to your LogiFlow account</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); signinUser(); }}>
          <div className="form-group">
            <label className="form-label">Login As</label>
            <select
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="CUSTOMER">Customer</option>
              <option value="VENDOR">Vendor</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              value={Email}
              name="Email"
              onChange={(event) => setEmail(event.target.value)}
              className="form-control"
              type="email"
              placeholder="Enter your email"
            />
            <i className="fa fa-envelope input-icon" aria-hidden="true"></i>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              value={Password}
              name="Password"
              onChange={(event) => setPassword(event.target.value)}
              className="form-control"
              type="password"
              placeholder="Enter your password"
            />
            <i className="fa fa-lock input-icon" aria-hidden="true"></i>
          </div>

          {error && <span className="error-message">{error}</span>}

          <button
            type="submit"
            className="btn-auth btn-primary-auth"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>
                Signing In...
              </>
            ) : (
              <>
                <i className="fa fa-sign-in" aria-hidden="true"></i>
                Sign In
              </>
            )}
          </button>

          <button
            type="button"
            onClick={backToHome}
            className="btn-auth btn-outline-auth"
          >
            <i className="fa fa-home" aria-hidden="true"></i>
            Back to Home
          </button>
        </form>

        <div className="auth-links">
          <p>Don't have an account? <Link to="/signup" className="auth-link">Sign Up</Link></p>
          <p><a href="#" onClick={changepassword} className="auth-link">Forgot Password?</a></p>
        </div>
      </div>
    </div>
  )
}

export default Signin;
