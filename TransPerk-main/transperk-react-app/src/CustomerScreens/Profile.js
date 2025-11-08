import { Link ,useHistory } from 'react-router-dom';
import axios from 'axios';

const Profile=()=>{
const history = useHistory()
 const customer= JSON.parse(sessionStorage.getItem('customer'))
 const customerId=sessionStorage.getItem('customerId')
 console.log(sessionStorage.getItem('customer'))

const deleteAccount=()=>{
    axios.delete(`http://localhost:8080/customer/${customerId}`).then(response => {
        const result = response.data;
        if (result){
          alert('Customer Account Deleted')
          
            sessionStorage.removeItem('customer')
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
       <h1 className="page-title"> MY PROFILE</h1>

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
               <td> {customer.id} </td> 
               <td> {customer.name}</td>
               <td>{customer.email}</td>
               <td>{customer.password}</td>
               <td>{customer.address}</td>
               <td>{customer.phoneNo}</td>
               <td>{customer.city}</td>
               <td>{customer.state}</td>
               <td>{customer.postalCode}</td>
              <td><button onClick={deleteAccount} className="btn btn-danger btn-sm">Delete Account </button></td>
           </tr>

           <tr>
                      
           </tr>
         </tbody>
       </table>
     </div>
   )
}
export default Profile;
