import { Link } from "react-router-dom"
const Requestvdetails =()=>{
    const status = JSON.parse(sessionStorage.getItem('requestStatus'))
    return (
        
    <div>
    <h1 className="page-title">REQUEST STATUS PAGE</h1>
    <table className="table table-striped border">
            

            <thead>
                <th>Request Status</th>
                <th>Driver Name</th>
                <th>Truck No</th>
                <th>Driver Phone</th>
                <th>Delivery Date</th>
                
            </thead>
            
           <tbody>
            <tr>
                <td>
                    {status.requestStatus}
                </td>
                <td>
                    {status.vdetails.driverName}
                </td>
                <td>
                    {status.vdetails.truckNo}
                </td>
                <td>
                    {status.vdetails.driverPhone}
                </td>
                <td>
                    {status.vdetails.deliveryDate}
                </td>
            </tr>
           </tbody>
    </table>
    </div>
    )
}
export default Requestvdetails