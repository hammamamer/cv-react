import React,{Component} from 'react'


class Skills extends Component
{
	render(){
		return(
			<div>
				<h2 style={{color:'#032b56',}}>Skills</h2>
				 <ul >
					<li><label>HTML5 </label></li>
					<progress value="100" max="100"></progress> 
					<li><label>CSS3 </label></li>
					<progress value="95" max="100"></progress>
					<li><label>JAVASCRIPT </label></li>
					<progress value="50" max="100"></progress> 
					<li><label>PHPMYSQL </label></li>
					<progress value="80" max="100"></progress>
					<li><label>BOOTSTRAP  </label></li>
					<progress value="85" max="100"></progress>
					<li><label>JQUERY </label></li>
					<progress value="90" max="100"></progress>
					<li><label>REACT </label></li>
					<progress value="60" max="100"></progress>
					<li><label>FIREBASE </label></li>
					<progress value="20" max="100"></progress>
				 </ul>
			</div>

			)
	}
}
export default Skills