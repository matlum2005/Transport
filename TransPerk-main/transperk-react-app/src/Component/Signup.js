import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';
import './styles/Auth.css';
import { validEmail, validPassword, validPhoneNo } from '../common/Regex';

const Signup = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [city, setCity] = useState('')
  const [role, setRole] = useState('')
  const [state, setState] = useState('')
  const [postalCode, setPostalCode] = useState('')

  const backToHome = () => {
    history.push('/');
  }

  const validateForm = () => {
    setError('')

    if (!role) {
      setError("Please select your role")
      return false
    }
    if (!name.trim()) {
      setError("Please enter your name")
      return false
    }
    if (!email) {
      setError("Please enter email")
      return false
    }
    if (!validEmail.test(email)) {
      setError("Please enter a valid email")
      return false
    }
    if (!password) {
      setError("Please enter password")
      return false
    }
    if (!phoneNo) {
      setError("Please enter phone number")
      return false
    }
    if (!validPhoneNo.test(phoneNo)) {
      setError("Please enter a valid phone number")
      return false
    }
    if (!address.trim()) {
      setError("Please enter address")
      return false
    }
    if (!city.trim()) {
      setError("Please enter city")
      return false
    }
    if (!state.trim()) {
      setError("Please enter state")
      return false
    }
    if (!postalCode) {
      setError("Please enter postal code")
      return false
    }
    if (postalCode.length !== 6) {
      setError("Postal code must be exactly 6 digits")
      return false
    }

    return true
  }

  const signup = async () => {
    if (!validateForm()) return

    setIsLoading(true)
    setError('')
    setSuccess('')

    const body = {
      name: name.trim(),
      role: role,
      email: email,
      password: password,
      phoneNo: phoneNo,
      address: address.trim(),
      city: city.toUpperCase().trim(),
      state: state.trim(),
      postalCode: postalCode
    }

    try {
      let response;
      if (role === "CUSTOMER") {
        response = await axios.post(`http://localhost:8080/customer`, body)
      } else {
        response = await axios.post(`http://localhost:8080/vendor`, body)
      }

      const result = response.data;
      if (result) {
        setSuccess('Account created successfully! Redirecting to login...')
        setTimeout(() => {
          history.push('/Signin')
        }, 2000)
      } else {
        setError('Failed to create account')
      }
    } catch (err) {
      setError('Registration failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Join LogiFlow</h1>
          <p className="auth-subtitle">Create your account and start your journey</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); signup(); }}>
          <div className="form-group">
            <label className="form-label">Join Us As</label>
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
            <label className="form-label">Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Enter your full name"
            />
            <i className="fa fa-user input-icon" aria-hidden="true"></i>
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              type="email"
              placeholder="Enter your email"
            />
            <i className="fa fa-envelope input-icon" aria-hidden="true"></i>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              type="password"
              placeholder="Create a password"
            />
            <i className="fa fa-lock input-icon" aria-hidden="true"></i>
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              className="form-control"
              type="tel"
              placeholder="Enter your phone number"
            />
            <i className="fa fa-phone input-icon" aria-hidden="true"></i>
          </div>

          <div className="form-group">
            <label className="form-label">Address</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Enter your address"
            />
            <i className="fa fa-map-marker input-icon" aria-hidden="true"></i>
          </div>

          <div className="form-group">
            <label className="form-label">City</label>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Enter your city"
            />
          </div>

          <div className="form-group">
            <label className="form-label">State</label>
            <input
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Enter your state"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Postal Code</label>
            <input
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Enter 6-digit postal code"
              maxLength="6"
            />
          </div>

          {error && <span className="error-message">{error}</span>}
          {success && <span className="success-message">{success}</span>}

          <button
            type="submit"
            className="btn-auth btn-primary-auth"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>
                Creating Account...
              </>
            ) : (
              <>
                <i className="fa fa-user-plus" aria-hidden="true"></i>
                Sign Up
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
          <p>Already have an account? <Link to="/signin" className="auth-link">Sign In</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Signup
