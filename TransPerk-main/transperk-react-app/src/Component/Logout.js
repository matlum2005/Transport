import { useHistory } from "react-router";
const Logout =()=>{
    const history = useHistory()
    history.push('/Signin')
    window.location.reload();
}
export default Logout
