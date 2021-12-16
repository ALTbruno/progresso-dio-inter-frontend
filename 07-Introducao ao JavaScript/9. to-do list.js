const taskList = document.querySelector('.taskList');

let form = document.getElementById('form');

let task = document.getElementById('taskInput');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const newTask = document.createElement('li');
    newTask.classList.add('taskItem');
    newTask.innerText = task.value;

    const completedButton = document.createElement('input');
    completedButton.type = ('checkbox')
    completedButton.classList.add('taskDone');

    completedButton.onchange = function(){
        if(completedButton.checked){
            newTask.style.textDecoration = 'line-through'
        }else{
            newTask.style.textDecoration = 'initial'
        }
    }

    taskDiv.appendChild(completedButton);
    taskDiv.appendChild(newTask);

    taskList.append(taskDiv)

    task.value = "";

})
