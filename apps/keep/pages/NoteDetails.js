import { noteService } from "../services/note.service.js"

export default {
    template: `
        <div class="note-details-modal">fhg</div>
    `,
    data() {
        return {
            note: noteService.getEmptyNote()
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
    }
}