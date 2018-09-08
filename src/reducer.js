import {CREATE,CHANGETAB,CHANGEAI,MOVE,RESTART} from "./constants.js" 
import {RESET,UNDO,SINGLE,MULTI,HOME,initialState} from "./constants.js"
import {createGame,restart,reset,undo,moveOnGame} from "./tictactoe.js"
import clone from "clone"

const reducer = (state = initialState,action) => {
	let state = clone(state)
	let type = action.type
	let _tab,tab
	if (type == CREATE){
		_tab = action.tab == SINGLE || action.tab == MULTI ? action.tab : MULTI
		tab = state[_tab]
		tab.game = createGame({minIsAi: _tab == SINGLE})
	}
	else if (type == CHANGETAB){
		_tab = action.tab
		tab = state[_tab]
		if (!tab.game && _tab == HOME){
			tab.game = createGame({minIsAi: tab == SINGLE})
		}
	}
	else if (type == CHANGEAI){
		tab = state[MULTI]
		if (tab.game){
			tab.easy = action.easy || tab.easy
		}
	}
	else if (type == MOVE){
		_tab = action.tab == SINGLE || action.tab == MULTI ? action.tab : MULTI
		tab = state[_tab]
		if (tab.game){
			moveOnGame(tab.game,action.index,action.value)
		}
	}
	else if (type == RESTART){
		_tab = action.tab == SINGLE || action.tab == MULTI ? action.tab : MULTI
		tab = state[_tab]
		if (tab.game){
			restart(tab.game)
		}
	}
	else if (type == RESET){
		_tab = action.tab == SINGLE || action.tab == MULTI ? action.tab : MULTI
		tab = state[_tab]
		if (tab.game){
			reset(tab.game)
		}
	}
	else if (type == UNDO){
		_tab = action.tab == SINGLE || action.tab == MULTI ? action.tab : MULTI
		tab = state[_tab]
		if (tab.game){
			undo(tab.game.board)
		}
	}
	return state
}

export default reducer
