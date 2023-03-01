import { noteService } from "../services/note.service.js"

import NoteList from '../cmps/NoteList.js'
import NoteDetails from './NoteDetails.js'

export default{
    template: `
        <NoteList :notes="notes" @remove="deleteNote" @noteAdd="addNote"/>
    `,
    data() {
        return {
            notes: null,
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
        },
        addNote(newNote) {
            // console.log(newNote)
            newNote.id = null
            noteService.save(newNote)
                        .then(() => {
                             noteService.query()
                            .then(notes => this.notes = notes)
                        })
           
        }
    },
    created() {
        noteService.query()
                    .then(notes => this.notes = notes)
    },
    components: {
        NoteList,
        NoteDetails
    }
}