
import "./header.css"
import {Link} from "react-router-dom";
export default function Header(){
    return(
        <>
       
        <div id="head">
		<h1 >RESTy</h1>
	</div>

    <div id="list">
<ul >
			<li><Link to="/" style={{textDecoration: 'none', color : 'white'}} >Home</Link></li>
			<li> <Link to="/history" style={{textDecoration: 'none', color : 'white'}} >History</Link></li>
			<li><Link to="/help" style={{textDecoration: 'none', color : 'white'}} >Help</Link></li>
		</ul>

    </div>
    </>
    )
}