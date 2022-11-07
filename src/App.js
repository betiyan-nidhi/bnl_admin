import './App.css';
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/navbar/sidebar";
import Member from './pages/member/member';
import Director from './pages/director';
import Accounts from './pages/accounts';
import Branches from './pages/branches';
import Dash from './pages/dashboard/dash';
import NewAccount from './components/NewA';

import "./App.css";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Addmembers from './addmembers';
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Sidebar/>
        <Routes>
        <Route path ="/" element ={<Dash/>} />  
         <Route path ="/company/director" element ={<Director/>} />      
         <Route path ="/company/accounts" element ={<Accounts/>} />   
         <Route path ="/company/branches" element ={<Branches/>} />       
         <Route path ="/company/members" element ={<Member/>} />  
         <Route path ="/company/newa" element ={<NewAccount/>} /> 
         <Route path = "/addmembers" element = {<Addmembers/>}/>
         <Route path ="/pages/dashboard/dash" element = {<Dash/>}/>
         </Routes>
        
      </Router>     
    </div>
  );
}
export default App;
