import NotePreview from "../cmps/NotePreview.js"

export default {
    props: ['notes'],
    template: `
        <section class="note-container">
            <NotePreview v-for="note in notes" 
            :key="note.id" :note="note" @remove="deleteNote"/>
        </section>
    `,
    methods: {
        deleteNote(noteId) {
            this.$emit('remove', noteId)
        }
    },
    components: {
        NotePreview
    }
}