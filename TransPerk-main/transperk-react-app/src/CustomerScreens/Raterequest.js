import { useState } from 'react';
import { useHistory} from 'react-router-dom'
import axios from 'axios';
import '../index.css';
const Raterequest = () => {

   const requestId = sessionStorage.getItem('requestId') 
  const history = useHistory();
  
  const [ratings, setratings] = useState('')
  const rate = (() => {
  
    if(ratings=='' ||ratings.length==0){
        alert("Please enter ratings")
    }else {
 
      const body = { ratings:ratings }
               
      axios.post(`http://localhost:8080/customer/request_rating/${requestId}`, body).then(response => {
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
          <h1>Rating page</h1>
          <br></br>
          
         <h5>Give Ratings 1 - 5 </h5  >
         <input
            onChange={(e) => {
              setratings(e.target.value)
            }}
            className="form-control" type="text" placeholder="Rate"/>
        
          <br></br>
          <button onClick={rate} className="btn btn-success">Rate</button>
          </div>
      </div>
    </div>
  )
}


export default Raterequest
