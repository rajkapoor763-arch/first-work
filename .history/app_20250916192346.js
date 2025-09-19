let tasks=[];
const addTask=()=>{
    const taskinput=document.getElementById("taskinput");
    const text=taskinput.value.trim();


    if (text){
        tasks.push({text:text,completed:false});
        taskinput.value="";
        updaTasksList();
    }
    
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