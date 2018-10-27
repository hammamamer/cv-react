import React, { Component } from 'react';
import Info from './components/info.js'
import Certificate from './components/certifica.js'
import Skills from './components/skills.js'
import AppStyle from './App.css'
class App extends Component {
   
 
  render() { return (
   <div>
    <div style={{display:'flex',justifyContent:'center'}}>
     <div>
       <Info />
     </div>
     <div style={{ padding:'10px',backgroundColor: '#aeb7b7'}}>
       <Certificate/>
      <Skills/>
      </div>

   </div>
    
</div>
   ); }
}
export default App;


