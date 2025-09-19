document.addEventListener("DOMContentLoaded",()=>{
    const storedTasks=JSON.parse(localStorage.getItem('tasks'))

    if(storedTasks){
        storedTasks.forEach((task)=>tasks.push(task))
        updateTasksList()
        updateStats()
    }

});
let tasks=[];

const saveTasks=()=>{
    localStorage.setItem('tasks,json.stringify(tasks)')
}
const addTask=()=>{
    const taskinput=document.getElementById("taskinput");
    const text=taskinput.value.trim();


    if (text){
        tasks.push({text:text,completed:false});
        taskinput.value="";
        updateTasksList();
        updateStats();
        saveTasks();

    }
    
};


const toggleTastcomplete=(index)=>{
      task[index].compeleted=!tasks[index].completed;
       updateTasksList();
       updateStats()
       saveTasks();
    
};
const deleteTask=(index)=>{
    tasks.splice(index,1);
    updateTaskslist();
    updateStates();
     saveTasks();
};
const editTask=(index)=>{
    const taskinput=document.getElementById('taskInput')
    taskInput.value=tasks[index].text

    tasks.splice(index,1);
    updateTasksList();
     updateStats();
      saveTasks();

};

const updateStats=()=>{
    const completeTasks= tasks.filter(task=> task.completed).length
    const totalTasks=tasks.length
    const progress= (completeTasks/totalTasks)*100

    const progressBar=document.getElementById('progress')

    progressBar.style.width='${progress}%';

    document.getElementById("numbers").innerText='${completedTasks}/${totalTasks}'
};

const updateTasksList=()=>{
    consttaskList=document.getElementById('task-list')
    taskList.innerHTML=''


    tasks.forEach(task, index=>{
        const listitem=document.createElement('li')


        listitem.innerHTML=`
        <div class="taskitem">
          <div class="task ${task.completed ? 'completed':""}">
             <input type="checkbox" class="checkbox" ${
                task.completed ? "checked":""}/>
             <p>${task.text}<p>
             </div>
             <div class="icons">
                <img src="" onclick="editTask(${index})">
                <img src="" onclick="deleteTask(${index})">
                </div>
        </div>        
        `;
        listitem.addEventListener('change',()=> toggleTastcomplete(index))

        taskList.append(listitem);

    });
};





document.getElementById('newtask').addEventListener("click",function(e){
    e.preventDefault();

    addTask();
});