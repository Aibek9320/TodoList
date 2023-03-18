const container = document.createElement('container')
const todolist = document.createElement("h1")
todolist.textContent = 'TODOLIST'
container.appendChild(todolist)
const root = document.getElementById('root')
const form = document.createElement('form')
const input = document.createElement('input')
input.setAttribute('class', 'input')
const btn = document.createElement('button')
btn.setAttribute('class', 'button')
btn.textContent = "+"
form.appendChild(input)
form.appendChild(btn)
container.appendChild(form)
const ul = document.createElement('ul')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const list = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    const todoText = document.createElement('span')
    todoText.textContent = form.children[0].value
    const edit = document.createElement('button')
    edit.setAttribute('id', 'edit')
    const remove = document.createElement('button')
    remove.setAttribute('id', 'remove')
    list.appendChild(checkbox)
    list.appendChild(todoText)
    list.appendChild(edit)
    list.appendChild(remove)
    ul.appendChild(list)
    form.appendChild(ul)
    remove.addEventListener('click', ()=> {
        ul.removeChild(list)
    })
})























root.appendChild(container)
