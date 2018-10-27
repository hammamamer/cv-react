import React,{Component} from 'react'
import hamma from './../hamma.jpg'

class Info extends Component
{
	render()
	{
		const infoStyle =
		{
			display:'flex',
			justifyContent:  'space-between', 
			flexDirection:  'column-reverse' ,
			color:"white"

		}
		const imgStyle =
		{
			height:'200px',
			width: '200px',
			borderRadius:"50%",
			 

		}
		const myNameStyle = 
		{
			backgroundColor: 'grey',
			borderTopLeftRadius: "30%",
			borderBottomRightRadius: "30%",
			color:"#032b56"

		}
		return(
		<div style={{color:"white",backgroundColor: '#032b56',padding: '10px'}}>
			  <div style={myNameStyle} ><h1 align='center'>Mohamed Amin Maamer</h1>
              </div>
              <h2 align='center'>Junior Web developer</h2>
            <div style={infoStyle}>
              
              <div>
              
              <h2 style={{color:"#aeb7b7"}} >Personal info</h2>
              <ul>
                <li>First Name : Mohamed Amin </li>
                <li>Last Name : Maamer</li>
                <li>Age : 23</li>
                <li>Adress : Ezzahra, tunis</li>
                <li>Birth Day : 03/07/1995</li>
                <li>Description: I am a junior web developer and i wont to learn more<br/> its my passion to learn a new think every single day <br/>
                and it's more cool for me to learn all about development   </li>
              </ul>
              </div>
              <div align="center">
              <a><img style={imgStyle} src={hamma} /></a>
              </div>
           </div>
          </div>


		)}
}
export default Info