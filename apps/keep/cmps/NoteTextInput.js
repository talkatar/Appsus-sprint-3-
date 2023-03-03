import { noteService } from "../services/note.service.js"

export default {
    name: 'NoteTextInput',
    props: ['noteType', 'params'],
    emits: ['addTextNote'],
    template: `
    <form @submit.prevent="addNote">
        <input ref="textInput" type="text" placeholder="enter note"  v-model="this.newNote.info.txt"/>
        <button><i class="fa-solid fa-floppy-disk"></i></button>
    </form>
    `,
    data() {
        return {
            newNote: noteService.getEmptyNote()
        }
    },
    mounted() {
        if (!this.params) {
            this.$refs.textInput.value =''
            return
        }
        this.$refs.textInput.value = this.params
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