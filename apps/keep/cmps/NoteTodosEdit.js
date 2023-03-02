import NoteTodoEdit from "./NoteTodoEdit.js"

export default {
    name: 'NoteTodosEdit',
    props: ['note'],
    template: `
        <label>
            title:
            <input type="text" v-model="this.note.info.title"/>
        </label>
        <h3>tasks:</h3>
        <NoteTodoEdit v-for="todo in todos" :todo="todo"/>
        
    `,
    computed: {
        todos() {
            return this.note.info.todos
        }
    },
    components: {
        NoteTodoEdit
    }
}