import { noteService } from "../services/note.service.js"
import NoteTextInput from "./NoteTextInput.js"
import NoteImgInput from "./NoteImgInput.js"
import NoteTodosInput from "./NoteTodosInput.js"
import NoteVideoInput from "./NoteVideoInput.js"

export default {
    name:'AddNote',
    emits: ['noteAdd'],
    template: `
        <div class="note-adder">
            <button @click="noteType = 'NoteText'">text</button>
            <button @click="noteType = 'NoteImg'">image</button>
            <button @click="noteType = 'NoteTodos'">list</button>
            <button @click="noteType = 'NoteVideo'">video</button>
            <NoteTextInput v-if="noteType === 'NoteText'" :noteType="this.noteType" @addTextNote="addNote"/>
            <NoteImgInput v-if="noteType === 'NoteImg'" :noteType="this.noteType" @addImgNote="addNote"/>
            <NoteTodosInput v-if="noteType === 'NoteTodos'" :noteType="this.noteType" @addTodosNote="addNote"/>
            <NoteVideoInput v-if="noteType === 'NoteVideo'" :noteType="this.noteType" @addVideoNote="addNote"/>
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
        addNote(newNote) {
            // console.log(newNote)
            this.$emit('noteAdd', newNote)
        }
        // addNote() {
        //     let newNote = this.newNote
        //     newNote.type = this.noteType
        //     if(this.noteType === 'NoteTodos') {
        //         let todos = newNote.info.todos
        //         newNote.info.todos = todos.split(',')
        //         let newArr = newNote.info.todos.map(todo => 
        //             todo = {
        //                 txt: todo,
        //                 doneAt: null
        //             })
        //         console.log(newArr)
        //         newNote.info.todos = newArr
        //     }
        //     console.log(newNote)
        //     this.$emit('noteAdd', newNote)
        // }
    },
    components: {
        NoteTextInput,
        NoteImgInput,
        NoteTodosInput,
        NoteVideoInput
    }
}