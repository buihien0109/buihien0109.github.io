import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {
	let todoFake = [
		{
			id : uuidv4(),
			name : "Đi học - 7:30",
			status : true

		},
		{
			id : uuidv4(),
			name : "Đi làm - 9:00",
			status : false
		},
		{
			id : uuidv4(),
			name : "Ăn chơi nhảy múa - 17:45",
			status : true

		},
		{
			id : uuidv4(),
			name : "Đi ăn với tình yêu - 19:30",
			status : false
		}
	]
	const [todos, setTodo] = useState(todoFake)
	const [value, setValue] = useState("")

	
	const handleInput = (e) => {
		setValue(e.target.value)
	}
	const handleAddTodo = () => {
		if(value === "") {
			alert("Không được để trống.")
			return
		} else {
			let newTodo = {
				id : uuidv4(),
				name : value,
				status : false
			}
			setTodo([...todos, newTodo])
			setValue("")
		}
	}

	const handleRemoveTodo = (id) => {
		if(window.confirm("Bạn có muốn xóa không?")) {
			let newTodo = todos.filter(todo => {
				return todo.id !== id
			})
			setTodo(newTodo)
		} else {
			return
		}
	}

	const handleChangeStatus = (id) => {
		let newTodo = todos.map(todo => {
			if(todo.id === id) {
				todo.status = !todo.status
			}
			return todo
		})
		setTodo(newTodo)
	}

	return (
		<>
			<div id="todo__author">
				<span className="todo__author">BÙI HIÊN</span>
			</div>
			<div className="container-wrapper">
				<div className="todo__title">
					<h3>DANH SÁCH CÔNG VIỆC</h3>
				</div>
				<div className="todo--wrapper">
					<div className="todo__input--wrapper">
						<div className="todo__input-box">
							<input 
								type="text" 
								id="todo__input" 
								onChange={handleInput}
								value={value}
								placeholder="Nhập công việc..."
							/>
							<button onClick={handleAddTodo} className="btn__add">Thêm</button>
						</div>
					</div>
					<div className="todo__list">
						{
							todos.map((todo, index) => {
								return (
									<React.Fragment key={todo.id}>
										<p className={todo.status ? "todo__item todo--success" : "todo__item"}>
											<button 
												onClick={() => handleRemoveTodo(todo.id)} 
												className="btn__remove"
											>
												<i class="fa fa-times-circle"></i>
											</button>
											{index + 1} - {todo.name}
											<span 
												onClick={() => handleChangeStatus(todo.id)} 
												className={todo.status ? "todo__status badge badge-success" : "todo__status badge badge-warning"}
											>
												{
													todo.status ? "Hoàn thành" : "Chưa hoàn thành"
												}
											</span>
										</p>
									</React.Fragment>
								)
							})
						}
					</div>
				</div>
			</div>
		</>
	);
}
export default App;
