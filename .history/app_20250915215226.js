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


    tasks.forEach(task=>{
        const listitem=document.createElement('li')


        listitem.innerHTML=`
        <div class="taskitem">
          <div class="task">
             <input type="checkbox" class="checkbox"/>
             <p>Finish this Project<p>
             </div>
             <div class="icons">
                <img src="">
                <img src="">
                </div>
        </div>        
        `;
        listitem.addEventListener('change')
        taskList.append(listitem);

    });
};





document.getElementById('newtask').addEventListener("click",function(e){
    e.preventDefault();

    addTask();
});