import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { url } from '../common/constants'


const Customerrequest = () => {
  const history = useHistory()
  const [request, setRequest] = useState([])
  const customerId = sessionStorage.getItem('customerId')
  //  console.log(sessionStorage.getItem('customer'))

  //  const [user, setUser] = useState([])

  useEffect(() => {
    console.log(`User got loaded`)
    getRequests()
  }, [])

  const getRequests = () => {
    axios.get(url + `/customer/requests/${customerId}`).then((response) => {
      const result = response.data
      if (result) {
        console.log(result)
        console.log(result[0])
        setRequest(result)
      } else {
        alert('error while loading the user')
      }
    })
  }
  // const deleteAccount=()=>{
  //     axios.delete(`http://localhost:8080/customer/${customerId}`).then(response => {
  //         const result = response.data;
  //         if (result){
  //           alert('Customer Account Deleted')

  //             sessionStorage.removeItem('customer')
  //           history.push('/Signin')
  //           window.location.reload();
  //         }
  //         else {
  //           alert('error')
  //         }
  //       }).catch(err =>{
  //         console.log(err)
  //       }) 

  // }

  const deleteRequest = (data) => {
    console.log(data);
    axios.delete(`http://localhost:8080/customer/delete_request/${data}`).then(response => {
      const result = response.data;
      if (result) {
        alert(result)
        history.push('/sellerDashboard')
      }
      else {
        alert('error')
      }
    }).catch(err => {
      console.log(err)
    })

  }
  const paymentRequest = (data) => {
    console.log(data);
    sessionStorage.setItem('requestId', data)
    history.push('/Payment')

  }
  const rateRequest = (data) => {
    console.log(data);
    sessionStorage.setItem('requestId', data)
    history.push('/Raterequest')

  }
  const statusRequest = (data) => {
    console.log(data);
    axios.get(`http://localhost:8080/customer/request_status/${data}`).then(response => {
      const result = response.data;
      if (result) {
        //alert(result)
        console.log(result)
        console.log(result.id)
        console.log(result.customer.id)
        sessionStorage.setItem('requestStatus', JSON.stringify(result))
        if (result.vdetails == null) {
          history.push('/Requeststatus')
        } else if (result.payment == null) {
          history.push('/Requestvdetails')
        } else {
          history.push('/Requestpdetails')
        }
        
      }
      else {
        alert('error')
      }
    }).catch(err => {
      console.log(err)
    })

  }

  return (
    <div>
      <h1 className="page-title">MY REQUESTS</h1>

      <table className="table table-striped border">
        <thead>
          <tr>
            <th> Id</th>
            <th>Pick Up</th>
            <th>Destination</th>
            <th>Request Date</th>
            <th>Truck Type</th>
            <th>Request Status</th>
            <th>Goods Type</th>
            <th colSpan='4'>Action</th>
          </tr>
        </thead>
        <tbody>
          {request.map((req) => {
            return (
              <tr key={req.id}>
                <td> {req.id} </td>
                <td> {req.pickUp}</td>
                <td>{req.destination}</td>
                <td>{req.requestDate}</td>
                <td>{req.truckType}</td>
                <td>{req.requestStatus}</td>
                <td>{req.goodsType}</td>

              {/* buttons with disabled condition */}
                <td><button onClick={() => statusRequest(req.id)} className="btn btn-info">Status</button></td>
                <td><button disabled={req.requestStatus != "INPROGRESS"} onClick={() => paymentRequest(req.id)} className="btn btn-success">Payment</button></td>
                <td><button disabled={req.requestStatus != "COMPLETED"} onClick={() => rateRequest(req.id)} className="btn btn-warning">Rating</button></td>
                <td><button disabled={req.requestStatus != "COMPLETED"} onClick={() => deleteRequest(req.id)} className="btn btn-danger"> <i class="fa fa-trash" aria-hidden="true"></i>&nbsp; Delete</button></td>

              </tr>

            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default Customerrequest;

