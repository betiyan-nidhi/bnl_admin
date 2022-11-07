import React from "react";
import { useMatch,useResolvedPath ,Link} from 'react-router-dom';
import './member.css'
const Member =() =>{
    return(
       <div>
        <h1>Promoters
          
        <CustomLink to ="/addmembers"><button>Add</button></CustomLink> </h1>
        <div >
      <table>
        <div className="heading">
        <tr className="header">
          <th>Member no</th> 
          <th>Name</th>
          <th>Gender</th>
          <th> Senior citizen</th>
          <th> Enrollment Date</th>
        </tr>
        </div>
        <tr>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Megha</td>
          <td>19</td>
          <td>Female</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr>
      </table>
    </div></div>
    )
}
function CustomLink({to,children,...props})
{
  const resolvedPath = useResolvedPath(to);
  const isActive =useMatch({path : resolvedPath.pathname, end:true})
  return (
    <li className={isActive ? "active" : ""}>
      <Link to = {to} { ...props}>
        {children}
      </Link>
    </li>

  )
}
export default Member;