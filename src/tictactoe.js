export const EMPTY_SPACE = " "
export const winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
export const DEFAULT_MAX = "X"
export const DEFAULT_MIN = "O"
export const PLAYER = "Player"
export const COMPUTER = "Computer"
export const MAX_PLAYER = "Player1"
export const MIN_PLAYER = "Player2"

export const createBoard = ({maxvalue = DEFAULT_MAX,minvalue = DEFAULT_MIN}) => (
	{
		cells:  createEmptyCells(),
		minvalue: minvalue,
		maxvalue: maxvalue,
		history:[],
		isFull(){
			let full = 0
			for (let i = 0; i < 9; i++){
				if (this.cells[i].value != EMPTY_SPACE){
					full++
				}
			}
			return full == 9
		},
		isEmpty(){
			let empty = 0
			for (let i = 0; i < 9; i++){
				if (this.cells[i].value == EMPTY_SPACE){
					empty++
				}
			}
			return empty == 9
		},
		score(){
			if (checkwin(this.cells,this.maxvalue)){
				return 10
			}
			else if (checkwin(this.cells,this.minvalue)){
				return -10
			}
			else{
				return 0
			}
		},
		isTerminalState(){
			return this.score() != 0 || this.isFull()
		},
		freespaces(){
			let arr = []
			for (let i = 0; i < 9; ++i){
				if (this.cells[i].value == EMPTY_SPACE){
					arr.push(i)
				}
			}
			return arr
		},
	}
)
export const createCell = () => (
	{
		value: EMPTY_SPACE,
		won: false
	}
)
export const createEmptyCells = () => {
	let cells = []
	for (let i = 0; i < 9; i++){
		cells.push(createCell())
	}
	return cells
}
export const createPlayer = ({name,value,ai = false,max = true,me = false}) => ({
    name: name,
    value: value,
    ai: ai,
    max: max,
    me: me,
    score: 0
})
export const createGame = ({minname,maxname,maxvalue = DEFAULT_MAX,minvalue = DEFAULT_MIN,minIsAi = true,maxIsAi = false,maxIsme = true,minIsme = true}) => (
	{
		board: createBoard({maxvalue:maxvalue,minvalue:minvalue}),
		players: {
			max: createPlayer({
				name: maxname ? maxname : minIsAi || maxIsAi ? PLAYER : MAX_PLAYER,
				value: maxvalue,
				max: true,
				me: maxIsme,
				ai: maxIsAi,
			}),
			min: createPlayer({
				name: minname ? minname : maxIsAi || minIsAi ? COMPUTER : MIN_PLAYER,
				value: minvalue,
				max: false,
				me: minIsme,
				ai: minIsAi,
			})
		},
		current: {
			max: true
		},
		currentPlayer(){
			return this.current.max ? this.players.max : this.players.min
		},
		message(){
			if (this.board.isTerminalState()){
				let score = this.board.score()
				if (score == 10){
					return `${this.players.max.name} Has Won`
				}
				else if (score == -10){
					return `${this.players.min.name} Has Won`
				}
				else{
					return "It's a draw"
				}
			}
			else{
				return `${this.currentPlayer().name}'s Turn`
			}
		}
	}
)
export const checkwin = (cells,value) => {
    for (let i of winningCombos){
        if (cells[i[0]].value == value && cells[i[1]].value == value && cells[i[2]].value == value){
            for (let j of i){
            	cells[j].won = true
            }
            return true
        }
    }
    return false
}
export const choice = arr => arr[Math.floor(Math.random() * arr.length )]

export const restart = game => game.board = createBoard({maxvalue:game.players.max.value,minvalue:game.players.min.value})

export const range = (start,stop,step) => {
	if (start == undefined || start == null){
		return false
	}
	if (stop == undefined || stop == null){
		stop = start
		start = 0
	}
	step = step ? step : 1
	let arr = []
	for (let i = start; i < stop; i+=step){
		arr.push(i)
	}
	return arr
}
export const reset = game => {
	restart(game)
	game.players.max.score = 0
	game.players.min.score = 0
}
export const moveOnGame = (game,index,value) => {
	let player = game.currentPlayer()
	if (player.value == value && !game.board.isTerminalState()){
		let m = move(game.board,index,value)
		if (m){
			if (game.board.isTerminalState()){
				let score = game.board.score()
				if (score == 10){
					game.players.max.score++
				}
				else if (score == -10){
					game.players.min.score++
				}
			}
			toggle(game)
			return true
		}
	}
	return false
}
export const draw = board => {
	for (let i of [0,3,6]){
        if (i==3 || i==6){
            console.log("-----------")
        }
        console.log(" " + board.cells[i].value + " | " + board.cells[i+1].value + " | " + board.cells[i+2].value )
    }
}
export const move = (board,index,value) => {
	let cell = board.cells[index]
	if (cell){
		if (cell.value == EMPTY_SPACE){
			cell.value = value
			board.history.push(index)
			return true
		}
	}
	return false
}
export const undo = board => {
	if (board.history.length > 0){
		let prev = board.history.pop()
		board.cells[prev].value = EMPTY_SPACE
		board.cells[prev].won = false
		return true
	}
	return false
}
export const toggle = game => game.current.max = game.current.max === false

export const minimax = ({board,max = true,alpha = -10, beta = 10}) => {
    if (board.isTerminalState()){
        return [board.score(),null]
    }
    let spaces = board.freespaces()
    let value = max ? -10 : 10
    let bestMove = -1
    for (let space of spaces){
        move(board,space,max ? board.maxvalue : board.minvalue)
        let [score,m] = minimax({board:board,max: max == false,alpha:alpha,beta:beta})
        undo(board)
        if (max){ 
            [value,bestMove] = score > value ? [score,space] : [value,bestMove]
            alpha = value > alpha ? value : alpha
        }
        else{
            [value,bestMove] = score < value ? [score,space] : [value,bestMove]
            beta = value < beta ? value : beta
        }
        if (beta <= alpha){
            break
        }
    }
    return [value,bestMove]
}
export const aiMove = ({board,easy = false,max = false}) => {
	let m = easy ? choice(board.freespaces()) : minimax({board:board,max:max})[1]
	return m
}

