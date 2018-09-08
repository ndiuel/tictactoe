import {CREATE,CHANGETAB,MOVE,RESTART,RESET,UNDO,CHANGEAI} from "./constants.js"

export const handleAction = (dispatch,action) =>{
	if (dispatch){
		return dispatch(action)
	}
	else{
		return action
	}
}
export const createAction = type => props => {
	let action = {type:type}
	let dispatch = props.dispatch
	delete props.dispatch
	for (let prop in props){
		action[prop] = props[prop]
	}
	return handleAction(dispatch,action)
}

export const createGame = createAction(CREATE)
export const changeTab = createAction(CHANGETAB)
export const changeAi = createAction(CHANGEAI)
export const restart = createAction(RESTART)
export const reset = createAction(RESET)
export const undo = createAction(UNDO)
export const move = createAction(MOVE)
