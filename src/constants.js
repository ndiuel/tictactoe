export const SINGLE = "single"
export const MULTI = "multi"
export const HOME = "home"
export const tabs = [SINGLE,MULTI]
export const CREATE = "create"
export const CHANGETAB = "changeTab"
export const CHANGEAI = "changeAi"
export const MOVE = "move"
export const RESTART = "restart"
export const RESET = "reset"
export const UNDO = "undo"
export const tabs = [SINGLE,MULTI]
export const initialState = {
	tabs: tabs,
	[SINGLE] : {
		easy: false,
		game: null
	},
	[MULTI] : {
		easy: false;
		game: null
	},
	current: HOME,
	currentTab(){
		return this[this.current]
	}
}