const Active=(state,action)=>

{	
	if(state!=undefined){console.log('initialally id is',state.activeID);}
	if(action.payload==undefined){return {activeID:0};}
	else
	{
		console.log('ow is ',action.payload.id);
		return ({activeID:action.payload.id});
	}



}
export default Active;