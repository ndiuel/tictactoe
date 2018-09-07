import {CREATE,CHANGETAB,MOVE,RESTART,RESET,UNDO,CHANGEAI} from "./constants.js"

export const handleAction = (dispatch,action) =>{
	if (dispatch){
		return dispatch(action)
	}
	else{
		return action
	}
}
export const createAction = type => ({dispatch,tab,id}) => {
	let action = {
		type: type,
		tab: tab,
		id: id
	}
	return handleAction(dispatch,action)
}

export const createGame = createAction(CREATE)
export const changeTab = createAction(CHANGETAB)
export const restart = createAction(RESTART)
export const reset = createAction(RESET)
export const undo = createAction(UNDO)

export const move = ({dispatch,tab,id,move,value}) => {
	let action = {
		type: MOVE,
		tab: tab,
		id: id,
		move: move,
		value: value,
	}
	return handleAction(dispatch,action)
}

export const cre = type => props => {
	let action = {type:type}
	for (let prop in props){
		action[prop] = props[prop]
	}
	return handleAction(props.dispatch,action)
}