import { noteService } from "../services/note.service.js"

export default {
    name: 'NoteImgInput',
    props: ['noteType'],
    emits: ['addImgNote'],
    template: `
         <form @submit.prevent="addNote" enctype="multipart/form-data" class="img-form-container">
            <input type="text" placeholder="enter title" v-model="this.newNote.info.title"/>
            <input type="text" placeholder="enter image url" v-model="this.newNote.info.url"/>
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
            this.$emit('addImgNote', newNote)
        }
    }
}