import ReactDOM from 'react-dom';
import React from 'react';

export const selectUser=(user,a,b)=>
{		
		ReactDOM.render(<img src={user.src} style={{'maxHeight':'100%','maxWidth':'100%',top:'50px',position:'absolute'}}/>,document.getElementById('dp'));
		ReactDOM.render(<p style={{'font-family':'cursive'}}>{user.info}</p>,document.getElementById('info'));

	return {
		type:'USER_SELECTED',
		payload:user
	};
};

	