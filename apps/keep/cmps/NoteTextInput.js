import { noteService } from "../services/note.service.js"

export default {
    name: 'NoteTextInput',
    props: ['noteType'],
    emits: ['addTextNote'],
    template: `
    <form @submit.prevent="addNote">
        <input type="text" placeholder="enter note"  v-model="this.newNote.info.txt"/>
        <button><i class="fa-solid fa-floppy-disk"></i></button>
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
            // console.log(this.noteType)
            // console.log(this.newNote)
            this.$emit('addTextNote', newNote)
        }
    }
}