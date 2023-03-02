import { noteService } from "../services/note.service.js"

export default {
    name: 'NoteTodosInput',
    props: ['noteType'],
    emits: ['addTodosNote'],
    template: `
         <form @submit.prevent="addNote" enctype="multipart/form-data" class="img-form-container">
            <input type="text" placeholder="enter title" v-model="this.newNote.info.title"/>
            <input type="text" placeholder="enter comma separated list" v-model="this.newNote.info.todos"/>
            <button>save</button>
        </form>
    `,
    data() {
        return {
            newNote: noteService.getEmptyNote()
        }
    },
    methods: {
        addNote() {
            let newNote = this.newNote
            newNote.type = this.noteType
            let todos = newNote.info.todos
            newNote.info.todos = todos.split(',')
            let newArr = newNote.info.todos.map(todo => 
                todo = {
                    txt: todo,
                    doneAt: null
                })
            newNote.info.todos = newArr
            // console.log(newNote)
            this.$emit('addTodosNote', newNote)
        }
    }
}