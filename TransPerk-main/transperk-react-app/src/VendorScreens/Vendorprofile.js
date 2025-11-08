
import { Link ,useHistory } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { url } from '../common/constants'
import Signin from '../Component/Signin';

const Vendorprofile=()=>{
const history = useHistory()
 //  const user= JSON.parse(localStorage.getItem('user'))  //u=user
 const vendor= JSON.parse(sessionStorage.getItem('vendor'))
 const vendorId=sessionStorage.getItem('vendorId')

const deleteAccount=()=>{
    axios.delete(`http://localhost:8080/vendor/${vendorId}`).then(response => {
        const result = response.data;
        if (result){
          alert('Vendor Account Deleted')
          
            sessionStorage.removeItem('vendor')
          history.push('/Signin')
          window.location.reload();
        }
        else {
          alert('error')
        }
      }).catch(err =>{
        console.log(err)
      }) 
  
}
 
   return (
     <div>
       <h1 className="page-title">MY PROFILE</h1>

       <table className="table table-striped border">
         <thead>
           <tr>
           <th> Id</th>
             <th>Name</th>
             <th>Email</th>
             <th>Password</th>
             <th>Address</th>
             <th>PhoneNo</th>
             <th>City</th>
             <th>State</th>
             <th>Postal Code</th>
             <th>Action</th>
           </tr>
         </thead>
         <tbody>
           <tr>
               <td> {vendor.id} </td> 
               <td> {vendor.name}</td>
               <td>{vendor.email}</td>
               <td>{vendor.password}</td>
               <td>{vendor.address}</td>
               <td>{vendor.phoneNo}</td>
               <td>{vendor.city}</td>
               <td>{vendor.state}</td>
               <td>{vendor.postalCode}</td>
              <td><button onClick={deleteAccount} className="btn btn-danger btn-sm">Delete Account</button></td>
           </tr>

           <tr>
                      
           </tr>
         </tbody>
       </table>
     </div>
   )
}
export default Vendorprofile;
