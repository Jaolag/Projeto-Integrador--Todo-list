//selecionando os elementos que executarao algum tipo de ação
const inputElement = document.querySelector(".new-task-input")
const addTaskButton = document.querySelector(".new-task-button")

const tasksContainer = document.querySelector('.tasks-container')

//verificar se o input esta vazio
const validateInput = () => inputElement.value.trim().length > 0
        //if (inputElement.ariaValueMax.trim().length > 0){
        //    return true
        //} else{
        //    return false
        //}

//nao adicionar tarefa vazia
const handleAddTask = () => {
    const inputIsValid = validateInput();
  
    console.log(inputIsValid);
  
    if (!inputIsValid) {
      return inputElement.classList.add("error");
    }

    /// Criaçao da div onde vai entrar as tarefas adicionadas//

    const taskItemContainer = document.createElement('div')
    taskItemContainer.classList.add('task-item')

    //paragrafo da div
    const taskContent = document.createElement("p")
    taskContent.innerText = inputElement.value
    taskContent.addEventListener('click', () => handleClick(taskContent))

    //icone de delete//
    const deleteItem = document.createElement("i")
    //adicionando as 2 classes que tem no icone trash
    deleteItem.classList.add('fa-regular')
    deleteItem.classList.add('fa-trash-can')
    deleteItem.classList.add('delete-task')
    //acao de delete no botoa delete
    deleteItem.addEventListener('click', () => handleDeleteClick())

    taskItemContainer.appendChild(taskContent)
    taskItemContainer.appendChild(deleteItem)

    tasksContainer.appendChild(taskItemContainer)

    //esvaziar o input depois de enviado
    inputElement.value = ''
}

//const handleClick = (taskContent) => {
//    //lopp em todos os elementos task-container para achar o correspondente a quem esta recebendo
//    const tasks = tasksContainer.childNodes;
//
//    for (const task of tasks) {
//        if (task.firstChild.isSameNode(taskContent)){
//            task.firstChild.classList.toggle('completed')
//        }
//    }
//}
//


const handleInputChange = () => {
    const inputIsValid = validateInput()
    if (inputIsValid){
        return inputElement.classList.remove("error")
    }
}

//executar o validateInput quando clicar no addTaskbutton
addTaskButton.addEventListener('click', () => handleAddTask())

inputElement.addEventListener('change', () => handleInputChange())


