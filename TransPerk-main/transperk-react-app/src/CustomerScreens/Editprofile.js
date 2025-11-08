import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
const url = 'http://localhost:8080'
const Editprofile = () => {


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
  const [customer, setCustomer] = useState(JSON.parse(sessionStorage.getItem('customer')))
  console.log(customer);


  const EditProfile = () => {
    // const body = { id:customer.id, role:customer.role,name: name, email:email,  password:password,
    //    address:address, phoneNo:phoneNo,city:city.toUpperCase(),state:state,postalCode:postalCode}
    console.log('in edit profile()');
    console.log(customer);


    axios.put(`http://localhost:8080/customer/update`, customer).then((response) => {
      const result = response.data

      if (result) {
        alert("success")
        console.log(result)
        sessionStorage.setItem('customer', JSON.stringify(result))
        sessionStorage.setItem('city', result.city)
        history.push('/Customer')
  
      }
      // saveTokenInLocalStorage(result)
      else {
        alert('error')
      }
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
              <input type="text" className="form-control" value={customer.name} onChange={(e) => {
                setCustomer(prevState => ({
                  ...prevState,
                  name: e.target.value
                }))

              }} /><br />

              <label >email</label>
              <input type="email" className="form-control" value={customer.email} onChange={(e) => {
                setCustomer(prevState => ({
                  ...prevState,
                  email: e.target.value
                }))
              }} /><br />

              <label >password  </label>
              <input type="text" className="form-control" value={customer.password} onChange={(e) => {
                setCustomer(prevState => ({
                  ...prevState,
                  password: e.target.value
                }))
              }} /><br />

              <label >address</label>
              <input type="text" className="form-control" value={customer.address} onChange={(e) => {
                setCustomer(prevState => ({
                  ...prevState,
                  address: e.target.value
                }))
              }} /><br />

              <label>phone Number</label>
              <input type="text" className="form-control" value={customer.phoneNo} onChange={(e) => {
                setCustomer(prevState => ({
                  ...prevState,
                  phoneNo: e.target.value
                }))
              }} /><br />

              <label>city</label>
              <input type="text" className="form-control" value={customer.city} onChange={(e) => {
                setCustomer(prevState => ({
                  ...prevState,
                  city: e.target.value
                }))
              }} /><br />

              <label>state</label>
              <input type="text" className="form-control" value={customer.state} onChange={(e) => {
                setCustomer(prevState => ({
                  ...prevState,
                  state: e.target.value
                }))
              }} /><br />

              <label>Postal Code</label>
              <input type="text" className="form-control" value={customer.postalCode} onChange={(e) => {
                setCustomer(prevState => ({
                  ...prevState,
                  postalCode: e.target.value
                }))
              }} /><br />


              <input type="hidden" className="form-control" value={customer.id} onChange={(e) => {
                setCustomer(prevState => ({
                  ...prevState,
                  id: e.target.value
                }))
              }} /><br />


              <button type="submit" className="btn btn-primary" onClick={() => { EditProfile() }}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}
export default Editprofile
