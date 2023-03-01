import { noteService } from "../services/note.service.js"

import NoteList from '../cmps/NoteList.js'

export default{
    template: `
        <NoteList :notes="notes"/>
    `,
    data() {
        return {
            notes: null
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