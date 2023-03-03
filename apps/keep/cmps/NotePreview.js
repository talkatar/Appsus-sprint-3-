import NoteText from '../cmps/NoteText.js'
import NoteImg from '../cmps/NoteImg.js'
import NoteTodos from '../cmps/NoteTodos.js'
import NoteVideo from '../cmps/NoteVideo.js'

export default {
    name: 'NotePreview',
    emits: ['remove','duplicate', 'setColor', 'pinStatus'],
    props: ['note'],
    template: `
        <div class="note" :style={backgroundColor:color} :note="note">
            <component :is="cmp.type" :info="cmp.info" />
            <section class="note-buttons">
                <button @click="deleteNote()"><i class="fa-solid fa-trash"></i></button>
                <RouterLink :to="'/keep/'+note.id"><button><i class="fa-solid fa-pen-to-square"></i></button></RouterLink>
                <button @click="duplicateNote"><i class="fa-regular fa-copy"></i></button>
                <button @click="setInput"><input hidden ref="colorInput" type="color" ref="colorInput" @change="setColor"/><i class="fa-solid fa-paint-roller"></i></button>
                <button @click="changePinStatus"><i class="fa-solid fa-thumbtack"></i></button>
                <button @click="createEmail"><i class="fa-solid fa-share"></i></button>
            </section>
            
            <!-- <button @click="openEditor()">edit</button> -->
        </div>
    `,
    data() {
        return {
            cmp: {
                type: null,
                info: null,
            },
        }
    },
    created() {
        this.cmp.type = this.note.type
        this.cmp.info = this.note.info
    },
    methods: {
        createEmail() {
            let noteParams = !this.note.info.txt ? this.note.info.title : this.note.info.txt
            // console.log(noteParams)
            this.$router.push({path:'/email/compose', query:{params: noteParams}})
        },
        setInput() {
            this.$refs.colorInput.click()
        },
        deleteNote() {
            let noteId = this.note.id
            this.$emit('remove', noteId)
        },
        duplicateNote() {
            // console.log(this.note)
            let newDuplicate = this.note
            this.$emit('duplicate', newDuplicate)
        },
        setColor() {
            // console.log(this.$refs.colorInput.value)
            let color = this.$refs.colorInput.value
            let updatedColorNote = this.note
            updatedColorNote.style.backgroundColor = color
            
            this.$emit('setColor', updatedColorNote)
        },
        changePinStatus() {
            // console.log('hi')
            this.note.isPinned = !this.note.isPinned
            let updatedPinNote = this.note
            this.$emit('pinStatus', updatedPinNote)
        }
    },
    computed: {
        color() {
            if(this.note.style === {} || !this.note.style) return 'lightgray'
            else return this.note.style.backgroundColor
        },
        pinAction() {
            if(this.note.isPinned) return 'unpin note'
            else return 'pin note'
        }
    },
    components: {
        NoteText,
        NoteImg,
        NoteTodos,
        NoteVideo
    }
}
{/* <input class="color-input  " type="color" name="color-picker"
							oninput="onSetColor(this.value)" /> */}