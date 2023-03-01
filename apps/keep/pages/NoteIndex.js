import { noteService } from "../services/note.service.js"

import NoteList from '../cmps/NoteList.js'

export default{
    template: `
        <NoteList :notes="notes" @remove="deleteNote"/>
    `,
    data() {
        return {
            notes: null
        }
    },
    methods: {
        deleteNote(noteId) {
            console.log(this.notes)
            // console.log(noteId)
            noteService.remove(noteId)
                        .then(() => {
                            const idx = this.notes.findIndex(note => note.id === noteId)
                            this.notes.splice(idx, 1)
                            console.log(this.notes)
                        })
                        .catch(err => {console.log('error')})
        }
    },
    created() {
        noteService.query()
                    .then(notes => this.notes = notes)
    },
    components: {
        NoteList
    }
}