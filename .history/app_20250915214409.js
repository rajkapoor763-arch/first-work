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


        listitem.innerHTML=``
    })
}





document.getElementById('newtask').addEventListener("click",function(e){
    e.preventDefault();

    addTask();
});