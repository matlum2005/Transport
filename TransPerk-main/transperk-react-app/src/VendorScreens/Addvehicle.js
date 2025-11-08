import { useState } from 'react';
import { useHistory} from 'react-router-dom'
import axios from 'axios';
import '../index.css';

const disablePastDate = () => {
  const today = new Date();
  const dd = String(today.getDate() + 1).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
};

const Addvehicle = () => {

   const requestId = sessionStorage.getItem('requestId') 
  const history = useHistory();
  const [deliveryDate, setdeliveryDate] = useState('')
  const [driverName, setdriverName] = useState('')
  const [truckNo, settruckNo] = useState('')
  const [driverPhone, setdriverPhone] = useState('')
  const addVehicle = (() => {

    var todayDate = new Date();
    var tdate = todayDate.getDate(); 
      
    if(driverPhone=='' ||driverPhone.length==0){
        alert("Please enter Driver Phone")
    }else if(deliveryDate <= tdate){
      alert("Select valid date")
    }
    else {
 
      const body = { deliveryDate:deliveryDate,driverName:driverName,truckNo:truckNo,driverPhone:driverPhone }
               
      axios.post(`http://localhost:8080/vendor/add_vehicle/${requestId}`, body).then(response => {
        const result = response.data;
        if (result){
          alert(result)
          history.push('/Vendor')
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
          <h1>Add Vehicle Details</h1>
          <br></br>
          
         <h5>Driver Name: </h5  >
         <input
            onChange={(e) => {
              setdriverName(e.target.value)
            }}
            className="form-control" type="text" placeholder="Enter Driver Name"/>
           <br></br>
            
          <h5>Driver Phone: </h5>
          <input
            onChange={(e) => {
              setdriverPhone(e.target.value)
            }}
            className="form-control" type="text" placeholder="Enter Driver Number"/>
          <br></br>
          <h5>Truck Number: </h5>
          <input
            onChange={(e) => {
              settruckNo(e.target.value)
            }}
            className="form-control" type="text" placeholder="Enter Truck Number"/>
          <br></br>
          <h5>Expected Delivery Date: </h5>
          <input
            onChange={(e) => {
              setdeliveryDate(e.target.value)
            }}
            className="form-control" id="demo" type="date" min={disablePastDate()} placeholder="Enter Truck Number"/>
          <br></br>

          <br></br>
          <button onClick={addVehicle} className="btn btn-success">Add</button>
          </div>
      </div>
    </div>
  )
}


export default Addvehicle
