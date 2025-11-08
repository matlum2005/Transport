
import { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import axios from 'axios'
//const url = 'http://localhost:8080'
const Editvendorprofile = () => {


  // const [id ,setId] = useState(0)
  // const [name, setFirstName] = useState('')
  // const [email, setEmail]=useState('')
  // const [password, setPassword]=useState('')
  // const [address , setAddress]= useState('')
  // const [phoneNo , setPhoneNo]= useState('')
  // const [city , setCity]= useState('')
  // const [state , setState]= useState('')
  // const [postalCode , setPostalCode]= useState('')
  //const [role , setRole]= useState('')
  const history = useHistory()

  //   <td> {customer.customerId} </td> 
  //                <td> {customer.name}</td>
  //                <td>{customer.email}</td>
  //                <td>{customer.password}</td>
  //                <td>{customer.address}</td>
  //                <td>{customer.phoneNo}</td>
  //                <td>{customer.city}</td>
  //                <td>{customer.state}</td>
  //                <td>{customer.postalCode}</td>



  //const data = JSON.stringify(sessionStorage.getItem('users'));
  //console.log(data);
  const [vendor, setVendor] = useState(JSON.parse(sessionStorage.getItem('vendor')))
  console.log(vendor);


  const EditProfile = () => {
    // const body = { id:vendor.id, role:vendor.role,name: name, email:email,  password:password, address:address, phoneNo:phoneNo,city:city.toUpperCase(),state:state,postalCode:postalCode}
    console.log(vendor.id);


    axios.put(`http://localhost:8080/vendor/update`, vendor).then((response) => {
      const result = response.data

      if (result) {
        alert("success")
        console.log(result)
        sessionStorage.setItem('vendor', JSON.stringify(result))
        sessionStorage.setItem('city', result.city)
        history.push('/Vendor')
        //sessionStorage.setItem("users", JSON.stringify({id : result.id}))
      }
      // saveTokenInLocalStorage(result)
      else {
        alert('error')
      }

      // history.push('/home')
    })
  }
  return (
    <div>
      <h1 className="page-title">EDIT PROFILE INFORMATION</h1>

      <div className="container mt-3">
        <div className="row">
          <div className=" col-md-6 offset-md-2" style={{ width: "50rem" }}>
            <div className="card-body sign1">
              <h2>Edit Form</h2> <hr />

              <label >Name </label>
              <input type="text" className="form-control" value={vendor.name} onChange={(e) => {
                setVendor(prevState => ({
                  ...prevState,
                  name: e.target.value
                }))
              }} defaultValue={vendor.name} /><br />

              <label >email</label>
              <input type="email" className="form-control" value={vendor.email} onChange={(e) => {
                setVendor(prevState => ({
                  ...prevState,
                  email: e.target.value
                }))
              }} defaultValue={vendor.email} /><br />

              <label >password  </label>
              <input type="text" className="form-control" value={vendor.password} onChange={(e) => {
                setVendor(prevState => ({
                  ...prevState,
                  password: e.target.value
                }))
              }} defaultValue={vendor.password} /><br />

              <label >address</label>
              <input type="text" className="form-control" value={vendor.address} onChange={(e) => {
                setVendor(prevState => ({
                  ...prevState,
                  address: e.target.value
                }))
              }} defaultValue={vendor.address} /><br />

              <label>phone Number</label>
              <input type="text" className="form-control" value={vendor.phoneNo} onChange={(e) => {
                setVendor(prevState => ({
                  ...prevState,
                  phoneNo: e.target.value
                }))
              }} defaultValue={vendor.phoneNo} /><br />

              <label>city</label>
              <input type="text" className="form-control" value={vendor.city} onChange={(e) => {
                setVendor(prevState => ({
                  ...prevState,
                  city: e.target.value
                }))
              }} defaultValue={vendor.city} /><br />

              <label>state</label>
              <input type="text" className="form-control" value={vendor.state} onChange={(e) => {
                setVendor(prevState => ({
                  ...prevState,
                  state: e.target.value
                }))
              }} defaultValue={vendor.state} /><br />

              <label>Postal Code</label>
              <input type="text" className="form-control" value={vendor.postalCode} onChange={(e) => {
                setVendor(prevState => ({
                  ...prevState,
                  postalCode: e.target.value
                }))
              }} defaultValue={vendor.postalCode} /><br />


              <input type="hidden" className="form-control" value={vendor.id} onChange={(e) => {
                setVendor(prevState => ({
                  ...prevState,
                  id: e.target.value
                }))
              }} defaultValue={vendor.id} /><br />


              <button type="submit" className="btn btn-primary" onClick={() => { EditProfile(vendor.id) }}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>





  );
}
export default Editvendorprofile
