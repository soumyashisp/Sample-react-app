import {combineReducers} from 'redux';	 
import UserReducer from './reducers_users.js';
import  ActiveuserReducer from './reducerActiveUser.js';


const allReducers=combineReducers(
	{
		Users:UserReducer,
		ActiveUserID:ActiveuserReducer

	}
);


export default allReducers;
