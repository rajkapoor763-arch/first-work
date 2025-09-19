  
    let tasks = [];

    document.addEventListener("DOMContentLoaded", () => {
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      if (storedTasks) {
        tasks = storedTasks;
        updateTasksList();
        updateStats();
      }
    });

    const saveTasks = () => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const addTask = () => {
      const taskInput = document.getElementById("taskinput");
      const text = taskInput.value.trim();

      if (text) {
        tasks.push({ text: text, completed: false });
        taskInput.value = "";
        updateTasksList();
        updateStats();
        saveTasks();
      }
    };

    const toggleTaskComplete = (index) => {
      tasks[index].completed = !tasks[index].completed;
      updateTasksList();
      updateStats();
      saveTasks();
    };

    const deleteTask = (index) => {
      tasks.splice(index, 1);
      updateTasksList();
      updateStats();
      saveTasks();
    };

    const editTask = (index) => {
      const taskInput = document.getElementById("taskinput");
      taskInput.value = tasks[index].text;
      tasks.splice(index, 1);
      updateTasksList();
      updateStats();
      saveTasks();
    };

    const updateStats = () => {
      const completedTasks = tasks.filter(task => task.completed).length;
      const totalTasks = tasks.length;
      const progress = totalTasks ? (completedTasks / totalTasks) * 100 : 0;

      document.getElementById("progress").style.width = `${progress}%`;
      document.getElementById("numbers").innerText = `${completedTasks}/${totalTasks}`;

      if (tasks.length && completedTasks === totalTasks) {
        blastConfetti();
      }
    };

    const updateTasksList = () => {
      const taskList = document.getElementById('task-list');
      taskList.innerHTML = "";

      tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <div class="taskItem">
            <div class="task ${task.completed ? 'completed' : ""}">
              <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""}/>
              <p>${task.text}</p>
            </div>
            <div class="icons">
              <button onclick="editTask(${index})">✏️</button>
              <button onclick="deleteTask(${index})">❌</button>
            </div>
          </div>
        `;

        const checkbox = listItem.querySelector(".checkbox");
        checkbox.addEventListener("change", () => toggleTaskComplete(index));

        taskList.append(listItem);
      });
    };

    const blastConfetti = () => {
      const count = 200,
        defaults = { origin: { y: 0.7 } };

      function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        }));
      }

      fire(0.25, { spread: 26, startVelocity: 55 });
      fire(0.2, { spread: 60 });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
      fire(0.1, { spread: 120, startVelocity: 45 });
    };

    document.getElementById('newtask').addEventListener("click", function (e) {
      e.preventDefault();
      addTask();
    });
  