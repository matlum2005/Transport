

import axios from 'axios'
import {Link, useState, useEffect } from 'react'
import { render } from 'react-dom';
import { useHistory } from 'react-router-dom';
const Pendingrequests = () => {
    const history = useHistory()
    const [requests, setRequests] = useState([])
    const vendor = JSON.parse(sessionStorage.getItem('vendor'))
    const vendorId = vendor.id
    
    useEffect(() => {
        getRequests()
      }, [])

        const getRequests = () => {
        console.log(vendorId)
        axios.get(`http://localhost:8080/vendor/pending_requests/${vendorId}`).then((response) => {
          const result = response.data
          console.log(result)
          console.log(result.status)
          if (result) {
              console.log(result)
            //   console.log("in get user")
            //   console.log(result.bookingList)
            setRequests(result)
           // console.log(result.getUsers)
            
          } else {
            alert('error occured while getting all Vendors')
          }
        })
   
    }
    
    const addVehicleRequest=(data)=>{
        
        console.log(data)
        sessionStorage.setItem('requestId',data)
        history.push('/Addvehicle')
    }
    const completeRequest=(data)=>{
        
        console.log(data)
        //sessionStorage.setItem('vendorId',data)
        //history.push('/Placerequest')

        axios.post(`http://localhost:8080/vendor/complete_request/${data}`).then((response) => {
          const result = response.data
          console.log(result)
         // console.log(result.status)
          if (result) {
              console.log(result)
              alert(result)
              history.push('/Vendor')
            //   console.log("in get user")
            //   console.log(result.bookingList)
            //setRequests(result)
           // console.log(result.getUsers)
            
          } else {
            alert('error')
          }
        })
    }
    
    return (
      <div>
          <br></br>
          <h1 className="page-title">PENDING REQUESTS</h1>
        <br></br>
        <table className="table table-striped border">
            

            <thead>
                <th>Customer Name</th>
                <th>Customer Contact</th>
                <th>Pick Up</th>
                <th>Destination</th>
                <th>Requested Date</th>
                <th>Truck Type</th>
                <th>Status</th>
                <th>Goods</th>
                <th colSpan="4">Action</th>
            </thead>
           <tbody>
              {requests.map((req)=>{
                        return(
                            
                            <tr key = {req.id}> 
                                <td> {req.customer.name}</td>
                                <td>{req.customer.phoneNo}</td>
                                <td>{req.pickUp}</td>
                                <td>{req.destination}</td>
                                <td>{req.requestDate}</td>
                                <td>{req.truckType}</td>
                                <td>{req.requestStatus}</td>
                                <td>{req.goodsType}</td>
                                {/* <td><button  onClick={()=>acceptRequest(req.id)} className="btn btn-success">Accept</button></td> */}
                                {/* <td><button  onClick={()=>rejectRequest(req.id)} className="btn btn-success">Reject</button></td> */}
                                <td><button disabled={req.requestStatus =="INPROGRESS"} onClick={()=>addVehicleRequest(req.id)} className="btn btn-info">Add Vehicle</button></td>
                                <td><button disabled={req.requestStatus !="INPROGRESS"} onClick={()=>completeRequest(req.id)} className="btn btn-success">Complete</button></td>
                            </tr>
                        )
                    })}
                    
                     
          </tbody>

       </table>
      

        </div>


    )
    
}
    
    export default Pendingrequests
