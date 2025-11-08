import { useState } from 'react';
import { useHistory} from 'react-router-dom'
import axios from 'axios';
import '../index.css';
const Payment = () => {

   const requestId = sessionStorage.getItem('requestId') 
  const history = useHistory();
  const [transactionId, settransactionId] = useState('')
  const [paidAmount, setpaidAmount] = useState('')
  const [paymentMode, setpaymentMode] = useState('')
  const doPayment = (() => {
  
    if(paymentMode=='' ||paymentMode.length==0){
        alert("Please select Payment Mode")
    }else {
 
      const body = { transactionId:transactionId,paidAmount:paidAmount,paymentMode:paymentMode }
               
      axios.post(`http://localhost:8080/customer/request_payment/${requestId}`, body).then(response => {
        const result = response.data;
        if (result){
          alert(result)
          history.push('/sellerDashboard')
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
          <h1>Payment</h1>
          <br></br>
          
         <h5>Transactio Id: </h5  >
         <input
            onChange={(e) => {
              settransactionId(e.target.value)
            }}
            className="form-control" type="text" placeholder="Enter Transaction Id"/>
           <br></br>
            
          <h5>Amount: </h5>
          <input
            onChange={(e) => {
              setpaidAmount(e.target.value)
            }}
            className="form-control" type="email" placeholder="Enter Amount"/>
          <br></br>
            <h5>Payment Mode: </h5>
            <select className="form-select"
              onChange={(e) => {
              setpaymentMode(e.target.value)
            }}>
            <option>select</option>
            <option value="CASH">CASH</option>
            <option value="CHEQUE">CHEQUE</option>
            <option value="BANK_TRANSFER">BANK TRANSFER</option>
            <option value="UPI">UPI</option>
            </select>
    
          <br/>
          <br></br>
          <button onClick={doPayment} className="btn btn-success">Payment</button>
          </div>
      </div>
    </div>
  )
}


export default Payment
