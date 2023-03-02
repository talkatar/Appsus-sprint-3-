import { noteService } from "../services/note.service.js"
import NoteTextEdit from "../cmps/NoteTextEdit.js"
import NoteImgEdit from "../cmps/NoteImgEdit.js"
import NoteTodosEdit from "../cmps/NoteTodosEdit.js"
import NoteVideoEdit from "../cmps/NoteVideoEdit.js"


export default {
    template: `
        <form @submit.prevent="updateNote" class="note-details-modal">
            <Component :is="noteType" :note="note"/>
            <button>update</button>
            <RouterLink :to="'/keep'">back to list</RouterLink>
        </form>
    `,
    data() {
        return {
            note: noteService.getEmptyNote(),
        }
    },
    methods: {
        updateNote() {
            // console.log(this.note)
            noteService.save(this.note)
                            .then(() => this.$router.push('/keep'))
        }
    },
    created() {
        const {noteId} = this.$route.params
        console.log(noteId)
        if (noteId) {
            noteService.get(noteId)
            .then(note => {console.log(note)
                this.note = note})
        }
    },
    computed: {
        noteType() {
            return this.note.type + 'Edit'
        }
    },
    components: {
        NoteTextEdit,
        NoteImgEdit,
        NoteTodosEdit,
        NoteVideoEdit
    }
}