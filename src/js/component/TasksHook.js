import React, { useState, useEffect } from "react";

const TasksHook = () => {
	//useState para manipular el estado, cada estado es manipuldo de manera individual
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");
	const [update, setUpdate] = useState(false);

	console.log(tasks);

	const handleAddTask = event => {
		if (event.key == "Enter" && newTask.length > 4) {
			console.log(...tasks);
			setTasks([...tasks, newTask]);
			setNewTask("");
		}
	};

	const handleDeleteTask = indexTask => {
		let filteredTasks = tasks.filter(
			(currentTask, indexCurrentTask) => indexCurrentTask !== indexTask
		);
		console.log(filteredTasks, indexTask, tasks);
		setTasks(filteredTasks);
	};

	useEffect(() => {
		console.log("componentDidMount");
		// Todo lo que está dentro del setTimeout es la fase de montaje
		setTimeout(
			() =>
				setTasks([
					"Hacer la cama",
					"Hacer el desayuno",
					"Alimentar a Lola",
					"Limpiar la caja de arena"
				]),
			3000
		);
		const interval = setInterval(() => {
			console.log("This will run every second!", update);
			setUpdate(prev => !prev);
		}, 3000);
		return () => clearInterval(interval); // fase de desmontaje
	}, [update]); //Fase de actualización

	return (
		<div className="text-center mt-5">
			<h1>Las tareas de 4Geeks (Hooks)</h1>

			<input
				value={newTask}
				placeholder="Escribe tu tarea acá"
				onChange={event => setNewTask(event.target.value)}
				onKeyPress={event => handleAddTask(event)}
			/>
			<ul>
				{tasks.length
					? tasks.map((task, index) => {
							console.log(task, index);
							return (
								<li key={index}>
									{task}
									<button
										type="button"
										onClick={() => handleDeleteTask(index)}>
										X
									</button>
								</li>
							);
					  })
					: null}
			</ul>
			{tasks.length > 0 ? (
				<footer>Tareas por hacer: {tasks.length}</footer>
			) : (
				<footer>Estás libre de tareas!!!!!!!</footer>
			)}
		</div>
	);
};

export default TasksHook;
