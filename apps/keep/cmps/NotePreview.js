import NoteText from '../cmps/NoteText.js'
import NoteImg from '../cmps/NoteImg.js'
import NoteTodos from '../cmps/NoteTodos.js'

export default {
    props: ['note'],
    template: `
        <div class="note">
            <component :is="cmp.type" :info="cmp.info" />
            <button @click="deleteNote()">delete</button>
            <button @click="deleteNote()">edit</button>
        </div>
    `,
    data() {
        return {
            cmp: {
                type: null,
                info: null
            },
        }
    },
    created() {
        this.cmp.type = this.note.type
        this.cmp.info = this.note.info
    },
    methods: {
        deleteNote() {
            let noteId = this.note.id
            this.$emit('remove', noteId)
        }
    },
    components: {
        NoteText,
        NoteImg,
        NoteTodos,
    }
}