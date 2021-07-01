import React from "react";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			/*tasks: [
				"Hacer la cama",
				"Hacer el desayuno",
				"Alimentar a Lola",
				"Limpiar la caja de arena"
			],*/
			tasks: [],
			newTask: ""
		};

		this.handleChangeTask = this.handleChangeTask.bind(this);
		this.handleAddTask = this.handleAddTask.bind(this);
		console.log("constructor");
	}

	handleChangeTask(event) {
		/* eslint-disable no-console */
		//console.log(event);
		this.setState({
			...this.state.tasks, //
			newTask: event.target.value
		});
	}

	handleAddTask(event) {
		if (event.key == "Enter" && this.state.newTask.length > 4) {
			console.log(...this.state.tasks);
			this.setState({
				tasks: [...this.state.tasks, this.state.newTask],
				newTask: ""
			});
		}
	}

	handleDeleteTask = indexTask => {
		let filteredTasks = this.state.tasks.filter(
			(currentTask, indexCurrentTask) => indexCurrentTask !== indexTask
		);
		console.log(filteredTasks, indexTask, this.state);
		this.setState({
			...this.state,
			tasks: filteredTasks
		});
	};

	componentDidMount() {
		console.log("componentDidMount");
		setTimeout(
			() =>
				this.setState({
					tasks: [
						"Hacer la cama",
						"Hacer el desayuno",
						"Alimentar a Lola",
						"Limpiar la caja de arena"
					]
				}),
			3000
		);
	}

	componentDidUpdate(prevState, prevProps) {
		console.log("componentDidUpdate");
	}

	componentWillMount() {
		console.log("componentWillMount");
	}

	render() {
		console.log(this.state);
		console.log("render");
		const { tasks } = this.state;
		return (
			<div className="text-center mt-5">
				<h1>Las tareas de 4Geeks</h1>

				<input
					value={this.state.newTask}
					placeholder="Escribe tu tarea acá"
					onChange={event => this.handleChangeTask(event)}
					onKeyPress={event => this.handleAddTask(event)}
				/>
				<ul>
					{tasks.length &&
						tasks.map((task, index) => {
							console.log(task, index);
							return (
								<li key={index}>
									{task}
									<button
										type="button"
										onClick={() =>
											this.handleDeleteTask(index)
										}>
										X
									</button>
								</li>
							);
						})}
				</ul>
				<footer>Tareas por hacer: {this.state.tasks.length}</footer>
			</div>
		);
	}
}
