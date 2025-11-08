import { useState } from 'react';
import { Link, useHistory} from 'react-router-dom'
import axios from 'axios';
import '../index.css';
const Placerequest = () => {

  const history = useHistory();
  const [pickUp, setpickUp] = useState('')
  const [destination, setdestination] = useState('')
  const [truckType, settruckType] = useState('')
  const [goodsType, setgoodsType] = useState('')
  const Request = (() => {
  
    if(truckType=='' ||truckType.length==0){
        alert("Enter Truck Type")
    }else {
 
      const body = {  pickUp:pickUp,destination:destination,requestStatus:"REQUESTED",truckType:truckType,goodsType:goodsType }
            const customerId = sessionStorage.getItem('customerId')
            const vendorId = sessionStorage.getItem('vendorId')
            
      axios.post(`http://localhost:8080/customer/send_request/${customerId}/${vendorId}`, body).then(response => {
        const result = response.data;
        if (result){
          alert('Request Places Successfully')
          sessionStorage.setItem('request',JSON.stringify(result))
          history.push('/Customer')
        }
        else {
          alert('error')
        }
      }).catch(err =>{
          alert(err)
      })

    }


})
  return (

    <div className="container">
      <br></br>
      <div >
        <div className="mb-3" className="sign">
          <h1>Request Form</h1>
          <br></br>
          
         <h5>Pick Up: </h5  >
         <input
            onChange={(e) => {
              setpickUp(e.target.value)
            }}
            className="form-control" type="text" placeholder="Enter Pick Up"/>
           <br></br>
            
          <h5>Destination: </h5>
          <input
            onChange={(e) => {
              setdestination(e.target.value)
            }}
            className="form-control" type="email" placeholder="Enter Destination"/>
          <br></br>
          <h5>goods Type:</h5>
          <input
            onChange={(e) => {
              setgoodsType(e.target.value)
            }}
            className="form-control" type="text" placeholder="Enter Goods Type" />
            <br></br>
            <h5>Truck Type: </h5>
            <select className="form-select"
              onChange={(e) => {
              settruckType(e.target.value)
            }}>
            <option>select</option>
            <option value="MINI407_2000KG">MINI407_2000KG</option>
            <option value="MEDIUM709_3800KG">MEDIUM709_3800KG</option>
            <option value="LARGE1109_8320KG">LARGE1109_8320KG</option>
            </select>

          <br/>
          <br></br>
          <button onClick={Request} className="btn btn-success">Send Request</button>
          </div>
      </div>
    </div>
  )
}


export default Placerequest
