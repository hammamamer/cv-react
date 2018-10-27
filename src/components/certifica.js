import React ,{Component} from 'react'
import php from './../php.png'
import javascript from './../javascript.png'
import HTML5AndCSS3 from './../htmlcss.png'

class Certificat extends Component
{
	render(){
		const cerificate = 
		{
			height:"300px",
			width:"500px"
		}
		return(
               
               <div>
                   <h2 style={{color:'#032b56',}}>Certificates</h2>
                   <ul>
                       <li>Certificate PHP MYSQL from OpenClassroom</li>
                       <li>Certificate JAVASCRIPT from OpenClassroom</li>
                       <li>Certificate HTML5 CSS3 from OpenClassroom</li>                       
                       <li>Web level 1 GoMyCode</li>
                   </ul>
               </div>

			)
	}
}
export default Certificat