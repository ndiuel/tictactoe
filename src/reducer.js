import {CHANGETAB,CHANGEAI,MOVE,RESTART} from "./constants.js" 
import {RESET,UNDO,SINGLE,MULTI,HOME,initialState} from "./constants.js"
import {createGame,restart,reset,undo,moveOnGame,toggle} from "./tictactoe.js"
import clone from "clone"

const reducer = (state = initialState,action) => {
	state = clone(state)
	let type = action.type
	let _tab,tab
	if (type == CHANGETAB){
		_tab = action.tab
		tab = state[_tab]
		let prev = state.current
		state.current = _tab
		if (!tab.game){
			tab.game = createGame({minIsAi: _tab == SINGLE})
		}
	}
	else if (type == CHANGEAI){
		tab = state[SINGLE]
		if (tab.game && (tab.game.board.isEmpty() || tab.game.board.isTerminalState())){
			tab.easy = action.easy === true || action.easy === false ? action.easy : tab.easy 
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
		if (tab.game && !tab.game.board.isTerminalState()){
			undo(tab.game.board)
			toggle(tab.game)
		}
	}
	return state
}

export default reducer
