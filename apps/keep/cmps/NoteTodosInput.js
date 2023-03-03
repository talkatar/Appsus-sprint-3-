import { noteService } from "../services/note.service.js"

export default {
    name: 'NoteTodosInput',
    props: ['noteType'],
    emits: ['addTodosNote'],
    template: `
         <form  @submit.prevent enctype="multipart/form-data" class="img-form-container">
            <input type="text" placeholder="enter title" v-model="this.newNote.info.title"/>
            <!-- <input type="text" placeholder="enter comma separated list" v-model="this.newNote.info.todos"/> -->
            <button  @click.stop="addTodo">add todo</button>
            <div v-for="todo in todos" :key="todo.id">
                <input   type="checkbox" v-model="todo.isDone"/>
                <input   type="text" placeholder="Enter todo" v-model="todo.txt"/>    
            </div>
            <button @click="addNote"><i class="fa-solid fa-floppy-disk"></i></button>
        </form>
    `,
    data() {
        return {
            newNote: noteService.getEmptyNote(),
            id: 102,
            todos: [
                {
                    id: 101,
                    txt: '',
                    isDone: false
                }
            ]
        }
    },
    methods: {
        addNote() {
            let newNote = this.newNote
            newNote.type = this.noteType
            // let todos = newNote.info.todos
            console.log(this.todos);
            newNote.info.todos = this.todos
            // let newArr = newNote.info.todos.map(todo => 
            //     todo = {
            //         txt: todo,
            //         doneAt: null
            //     })
            // newNote.info.todos = newArr
            // console.log(newNote)
            this.$emit('addTodosNote', newNote)
        },
        addTodo(){
            this.todos.push({
                id: this.id++,
                txt: '',
                isDone: false,
            })
        }
    },
}