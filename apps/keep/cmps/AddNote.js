import { noteService } from "../services/note.service.js"

export default {
    name:'AddNote',
    emits: ['noteAdd'],
    template: `
        <div>
            <button @click="noteType = 'NoteText'">text</button>
            <button @click="noteType = 'NoteImg'">image</button>
            <button @click="noteType = 'NoteTodos'">list</button>
            <form @submit.prevent="addNote" enctype="multipart/form-data">
                <input type="text" v-if="noteType === 'NoteText'" placeholder="enter note" v-model="newNote.info.txt"/>
                <input type="text" v-if="noteType === 'NoteImg'" placeholder="enter title" v-model="newNote.info.title"/>
                <br />
                <input type="text" v-if="noteType === 'NoteImg'" placeholder="enter image url" v-model="newNote.info.url"/>
                <input type="text" v-if="noteType === 'NoteTodos'" placeholder="enter title" v-model="newNote.info.title"/>
                <br />
                <input type="text" v-if="noteType === 'NoteTodos'" placeholder="enter comma separated list" v-model="newNote.info.todos"/>
                <button>save</button>
            </form>
        </div>
    `,
    data() {
        return {
            noteType: 'NoteText',
            newNote: noteService.getEmptyNote()
        }
    },
    created() {

    },
    methods: {
        addNote() {
            let newNote = this.newNote
            newNote.type = this.noteType
            if(this.noteType === 'NoteTodos') {
                let todos = newNote.info.todos
                newNote.info.todos = todos.split(',')
            }
            console.log(newNote)
            this.$emit('noteAdd', newNote)
        }
    }
}