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
const updateTasksList=()=>





document.getElementById('newtask').addEventListener("click",function(e){
    e.preventDefault();

    addTask();
});