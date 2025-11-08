import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const Vendorlist = () => {
  const history = useHistory()
  const [vendor, setVendors] = useState([])
  const customer = JSON.parse(sessionStorage.getItem('customer'))
  let city = customer.city

  useEffect(() => {
    getVendors()
  }, [])

  const setCity1 = (value) => {
    city = value;
    getVendors();
  }

  const getVendors = () => {
    console.log(city)
    let city1 = city.toUpperCase()
    axios.get(`http://localhost:8080/customer/vendor_by_city/${city1}`).then((response) => {
      const result = response.data
      console.log(result)
      console.log(result.status)
      if (result) {
        console.log(result)
        setVendors(result)
      } else {
        alert('error occured while getting all Vendors')
      }
    })

  }
  const placeRequest = (data) => {

    console.log(data)
    sessionStorage.setItem('vendorId', data)
    history.push('/Placerequest')
  }





  return (
    <div>
      <br></br>
      <h1 className="page-title">AVAILABLE VENDORS</h1>
      <br></br>
      <br></br>
      <label>City</label>
      <input type="text" className="form-control" onChange={(e) => {
        setCity1((e.target.value))
      }} defaultValue={city} /><br />
      <table className="table table-striped border">


        <thead>
          <th>Vendor Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>PhoneNo</th>
          <th>City</th>
          <th>State</th>
          <th>Postal Code</th>
          <th>Action</th>
        </thead>
        <tbody>
          {vendor.map((user) => {
            return (

              <tr key={user.id}>
                <td> {user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.phoneNo}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.postalCode}</td>
                <td><button onClick={() => placeRequest(user.id)} className="btn btn-success">Place Request</button></td>
              </tr>
            )
          })}


        </tbody>

      </table>


    </div>


  )
}

export default Vendorlist
