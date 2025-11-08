import { Link } from "react-router-dom"
const Requestpdetails =()=>{
    const status = JSON.parse(sessionStorage.getItem('requestStatus'))
    return (
        
    <div>
    <h1 className="page-title">REQUEST STATUS PAGE</h1>

    <table className="table table-striped border">

            <thead>
                <th>Status</th>
                <th>Driver Name</th>
                <th>Truck</th>
                <th>Driver Phone</th>
                <th>Delivery Date</th>
                <th>Transaction</th>
                <th>Amount</th>
                <th>Payment Date</th>
                <th>Mode</th>
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
                <td>
                    {status.payment.transactionId}
                </td>
                <td>
                    {status.payment.paidAmount}
                </td>
                <td>
                    {status.payment.paymentDate}
                </td>
                <td>
                    {status.payment.paymentMode}
                </td>
            </tr>
           </tbody>
           
    </table>
    </div>
    )
}
export default Requestpdetails