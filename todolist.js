import { Todolist } from "./components/Todolist.js"
import { fetchJSON } from "./functions/api.js"
import { createElement } from "./functions/dom.js"


try {
    const todos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=7')
    const list = new Todolist(todos)
    list.appendTo(document.querySelector('#todolist'))
     console.log(list)
} catch (e) {
 const alertElement =   createElement('div', {
        class: 'alert alert-danger m-2',
        role : 'alert'
 })
    alertElement.innerText = ' Impossible de charger les éléments '
    document.body.prepend(alertElement)
}
