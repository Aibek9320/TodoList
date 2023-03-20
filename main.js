const container = document.createElement('container')
const root = document.getElementById('root')
const todolist = document.createElement("h1")

todolist.textContent = 'TODOLIST'
container.appendChild(todolist)
const form = document.createElement('form')
const input = document.createElement('input')
input.setAttribute('required', 'required')
const btn = document.createElement('button')
btn.setAttribute('class', 'button')
btn.textContent = "+"
form.appendChild(input)
form.appendChild(btn)
container.appendChild(form)
const ul = document.createElement('ul')

let todoArrow = []
let checkObject = {}
let inputObjec = {} 

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    const todoText = document.createElement('input')
    todoText.setAttribute('type', 'text')
    todoText.setAttribute('readonly','readonly')
    todoText.value = form.children[0].value
    const edit = document.createElement('button')
    edit.textContent = 'edit'
    const remove = document.createElement('button')
    remove.setAttribute('id', 'remove')
    
    edit.addEventListener('click', (e) => {
        if (edit.textContent === 'save'){
            todoText.setAttribute('readonly','readonly')
            edit.textContent = 'edit'
        }
        else {
            todoText.removeAttribute('readonly')
            edit.textContent = 'save'
        }
    })
    
    remove.addEventListener('click', ()=> {
        ul.removeChild(li)
    })
    checkbox.addEventListener('click', () => {
        if(checkbox.checked) {
            todoText.style = 'text-decoration: line-through;'
        }
        else{
            todoText.style = 'text-decoration: none;'
        }
    })
    


    li.appendChild(checkbox)
    li.appendChild(todoText)
    li.appendChild(edit)
    li.appendChild(remove)
    ul.appendChild(li)
    
    form.children[0].value = ''
})
container.appendChild(ul)
ul.addEventListener('DOMSubtreeModified', () => {
    // const li = document.querySelectorAll('li')
    const li = Array.from(ul.children)
    console.log(li);
    todoObject['checked'] = li[0].childNodes[0].checked
    todoObject['text'] = li[0].childNodes[1].value
    todoArrow.push(todoObject)
    localStorage.setItem(JSON.stringify(todoArrow))
    console.log(todoArrow);
})


root.appendChild(container)
