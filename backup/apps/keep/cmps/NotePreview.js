import NoteText from '../cmps/NoteText.js'
import NoteImg from '../cmps/NoteImg.js'
import NoteTodos from '../cmps/NoteTodos.js'

export default {
    props: ['note'],
    template: `
        <component :is="cmp.type" :info="cmp.info" />
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
        console.log(this.note)
    },
    methods: {

    },
    components: {
        NoteText,
        NoteImg,
        NoteTodos,
    }
}