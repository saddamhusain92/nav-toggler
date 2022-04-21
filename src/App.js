import React,{ useState } from "react";
import { AiFillAppstore,AiOutlineClose } from "react-icons/ai";
function App() {
  const [device,setDivice]=useState(true)
  const[mode,setMode]=useState({classMode:"desktop",icon:<AiFillAppstore/>})
  const togglefun=()=>{
  device?setMode({classMode:"mobile",icon:<AiOutlineClose/>}):setMode({classMode:"desktop",icon:<AiFillAppstore/>})
  device?setDivice(false):setDivice(true)
  }
  return (
    
  <div className="nav">
    <div className="Logo">SD husain</div>
    <div className={mode.classMode}>
    <h4 className="mob-logo">SDHusain</h4>
   <ul>

<li>SDhusain</li>
<li>SDhusain</li>
<li>SDhusain</li>
<li>SDhusain</li>
<li>SDhusain</li>
<li>SDhusain</li>
<li>SDhusain</li>
   </ul>
    </div>
     
      <div className="btn-toggle" onClick={togglefun}>{mode.icon}</div>
  </div>
  );
}

export default App;
