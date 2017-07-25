import React from 'react';
import ReactDOM from 'react-dom';
import {selectUser} from '../actions/index.js';
import {changeActiveUser} from '../actions/index.js';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import {connect} from 'react-redux';





class Cont1 extends React.Component{
	render(){

		return(
			<ul style={{'liststyle':'none'}}>
				{	

					this.props.Users.map
					(


					 (user)=>

					 {
					 	let styleName = (this.props.activeID.activeID==user.id) 
						? {border:'1px solid white',display:'flex',width:'200px',padding:'5px','backgroundColor':'white'}
						: {border:'1px solid white',width:'200px',padding:'5px',display:'flex','backgroundColor':'black'};

						let col=(this.props.activeID.activeID==user.id) ?
						'black':'white';
					 	console.log(this.props.activeID.activeID,user.id);
				 		return <li key={user.id} style={styleName} 
						onClick={()=>{this.props.selectUser(user);}}><a href="" style={{'textDecoration':'none',color:col}} onClick={(e)=>{e.preventDefault();}}>{user.Name}</a></li>

										 	
					 }   

					)
			
				} 
			</ul>);
	}

}

function mapS(state)
{
	return {Users:state.Users,activeID:state.ActiveUserID};		

}

function mapDispatchToProps(dispatch)
{
	return bindActionCreators({selectUser:selectUser,changeActiveUser:changeActiveUser},dispatch);		

}



export default connect(mapS,mapDispatchToProps)(Cont1);

