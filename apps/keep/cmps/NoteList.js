import NotePreview from "../cmps/NotePreview.js"
import AddNote from "../cmps/AddNote.js"

import { noteService } from "../services/note.service.js"

export default {
    props: ['notes'],
    template: `
        <AddNote @noteAdd="AddNote"/>
        <section class="note-container">
            <NotePreview v-for="note in notes" 
            :key="note.id" :note="note" @remove="deleteNote"/>
        </section>
    `,
    methods: {
        deleteNote(noteId) {
            this.$emit('remove', noteId)
        },
        AddNote(newNote) {
            // console.log(newNote)
            this.$emit('noteAdd', newNote)
        }
    },
    components: {
        NotePreview,
        AddNote
    }
}