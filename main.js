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

window.addEventListener('load', (event) => {
    console.log(JSON.parse(localStorage.getItem('tasks')));
    JSON.parse(localStorage.getItem('tasks'))&& JSON.parse(localStorage.getItem('tasks')).map((el) => {
        const li = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    const todoText = document.createElement('input')
    todoText.setAttribute('type', 'text')
    todoText.setAttribute('readonly','readonly')
    todoText.value = el.text
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
    })
});


const ul = document.createElement('ul')
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
ul.addEventListener('DOMSubtreeModified', (e) => {
    if(e.target.localName === 'ul'){
        const todoArr =  Array.from(e.target.children).map((el, idx) => {
            el.children[2].addEventListener('click', (e) => {
                if(el.children[2].textContent !== 'save'){
                    const newTaskArr = JSON.parse(localStorage.getItem('tasks')).map((item, index) => {
                        return idx === index ? {...item, text: el.children[1].value} : item
                    })
                    localStorage.setItem('tasks', JSON.stringify(newTaskArr))
                }
            })
            return {
                text: el.children[1].value,
                checked: el.children[0].checked
            }
        })
        localStorage.setItem('tasks', JSON.stringify(todoArr))
        
    }
    
   
})


root.appendChild(container)
