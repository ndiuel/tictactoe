import React from "react"
import {render} from "react-dom"
import clone from "clone"
import {Provider} from "react-redux"
import {createStore} from "redux"
import reducer from "./reducer.js"
import {aiMove} from "./tictactoe.js"
import {move} from "./actions.js"
import {SINGLE} from "./constants.js"
import App from "./components/App.jsx"

let store = createStore(reducer)
let el = document.getElementById("app")
render(
<Provider store = {store}>
<App/>
</Provider>,el
)
store.subscribe(() => {
	let state = clone(store.getState())
	let tab = state[SINGLE]
	let game = tab.game
	if (game.currentPlayer().ai && !game.board.isTerminalState()){
		let m = aiMove({
			board: game.board,
			easy: tab.easy
		})
		move({
			dispatch: store.dispatch,
			index: m,
			value: game.currentPlayer().value,
			tab: SINGLE
		})
	}
})


