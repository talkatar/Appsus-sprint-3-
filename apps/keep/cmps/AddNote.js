import { noteService } from "../services/note.service.js"
import NoteTextInput from "./NoteTextInput.js"
import NoteImgInput from "./NoteImgInput.js"
import NoteTodosInput from "./NoteTodosInput.js"
import NoteVideoInput from "./NoteVideoInput.js"

export default {
    name:'AddNote',
    props: ['params'],
    emits: ['noteAdd'],
    template: `
        <div class="note-adder">
            <section>
                <button @click="noteType = 'NoteText'"><i class="fa-solid fa-input-text">text</i></button>
                <button @click="noteType = 'NoteImg'"><i class="fa-solid fa-image"></i></button>
                <button @click="noteType = 'NoteTodos'"><i class="fa-solid fa-list"></i></button>
                <button @click="noteType = 'NoteVideo'"><i class="fa-solid fa-video"></i></button>
                <button @click="noteType = ''"><i class="fa-regular fa-eye-slash"></i></button>
            </section>
            <section class="note-inputs">
                <NoteTextInput v-if="noteType === 'NoteText'" :noteType="this.noteType" @addTextNote="addNote" :params="params"/>
                <NoteImgInput v-if="noteType === 'NoteImg'" :noteType="this.noteType" @addImgNote="addNote"/>
                <NoteTodosInput v-if="noteType === 'NoteTodos'" :noteType="this.noteType" @addTodosNote="addNote"/>
                <NoteVideoInput v-if="noteType === 'NoteVideo'" :noteType="this.noteType" @addVideoNote="addNote"/>
            </section>
        </div>
    `,
    data() {
        return {
            noteType: '',
            newNote: noteService.getEmptyNote(),
            params: this.params
        }
    },
    created() {

    },
    methods: {
        addNote(newNote) {
            this.$emit('noteAdd', newNote)
        }
    },
    components: {
        NoteTextInput,
        NoteImgInput,
        NoteTodosInput,
        NoteVideoInput
    }
}