'use strict'

import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'

_createNotes()

export const noteService = {
    query,
    get,
    remove,
    save,
    getEmptyNote,
}

function query(filterBy = {}) {
    return storageService.query(NOTE_KEY)
        .then(notes => {
            // if (filterBy.txt) {
            //     const regex = new RegExp(filterBy.txt, 'i')
            //     books = books.filter(book => regex.test(book.vendor))
            // }
            // if (filterBy.price) {
            //     books = books.filter(book => book.listPrice.amount >= filterBy.price)
            // }
            return notes
        })
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
    }
}

// function _setNextPrevCnoteId(book) {
//   return storageService.query(NOTE_KEY).then((books) => {
//       const noteIdx = books.findIndex((currBook) => currBook.id === book.id)
//       book.nextnoteId = books[noteIdx + 1] ? books[noteIdx + 1].id : books[0].id
//       book.prevnoteId = books[noteIdx - 1]
//           ? books[noteIdx - 1].id
//           : books[books.length - 1].id
//           console.log(book)
//       return book
//   })
// }

function getEmptyNote(id= '',createdAT = Date.now(),type = '', isPinned = false, info = {}, style = {}) {
    return { id: '',createdAT: Date.now(), type: '', isPinned: false, info: {}, style: {} }
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        notes = [
            { 
                id: 'n101', 
                createdAt: 1112222, 
                type: 'NoteText', 
                isPinned: true, 
                info: { txt: 'Fullstack Me Baby!' }, 
                style: { backgroundColor: '#eee' }, 
            }, 
            { 
                id: 'n102', 
                type: 'NoteImg', 
                isPinned: false, 
                info: { url: '../../../assets/img/pexels-eberhard-grossgasteiger-572897.jpg', title: 'Bobi and Me' }, 
                style: { backgroundColor: '#83d' } 
            }, 
            { 
                id: 'n103', 
                type: 'NoteTodos', 
                isPinned: false, 
                info: { title: 'Get my stuff together', 
                todos: [ 
                        { 
                            txt: 'Driving license', 
                            doneAt: null 
                        }, 
                        { 
                            txt: 'Coding power', 
                            doneAt: 187111111 
                        } 
                    ],
                }, 
                style: {backgroundColor: '#46d'}     
            },
            {
                id: 'pOthH',
                type: 'NoteVideo',
                isPinned: false,
                createdAT: 1677836427275,
                info: {
                    title: "energy", 
                    url: "https://www.youtube.com/embed/ouecRm8cCoY"
                },
                style: {backgroundColor: '#45d'},
            },
            { 
                id: 'pOtzH', 
                createdAt: 1112222, 
                type: 'NoteText', 
                isPinned: true, 
                info: { txt: 'Fullstack Me Baby!' }, 
                style: { backgroundColor: '#88d' }, 
            }, 
            { 
                id: 'dsggjj', 
                type: 'NoteImg', 
                isPinned: true, 
                info: { url: '../../../assets/img/pexels-eberhard-grossgasteiger-572897.jpg', title: 'Bobi and Me' }, 
                style: { backgroundColor: '#99d' } 
            }, 
            { 
                id: 'qqwwee', 
                type: 'NoteTodos', 
                isPinned: true, 
                info: { title: 'Get my stuff together', 
                todos: [ 
                        { 
                            txt: 'Driving license', 
                            doneAt: null 
                        }, 
                        { 
                            txt: 'Coding power', 
                            doneAt: 187111111 
                        } 
                    ],
                }, 
                style: {backgroundColor: '#01d'}     
            },
            {
                id: 'zxcvbn',
                type: 'NoteVideo',
                isPinned: false,
                createdAT: 1677836427275,
                info: {
                    title: "energy", 
                    url: "https://www.youtube.com/embed/ouecRm8cCoY"
                },
                style: {backgroundColor: '#b0c'},
            },
            { 
                id: 'dfhuio', 
                createdAt: 1112222, 
                type: 'NoteText', 
                isPinned: true, 
                info: { txt: 'Fullstack Me Baby!' }, 
                style: { backgroundColor: '#20d' }, 
            }, 
            { 
                id: 'fhjkg', 
                type: 'NoteImg', 
                isPinned: false, 
                info: { url: '../../../assets/img/pexels-eberhard-grossgasteiger-572897.jpg', title: 'Bobi and Me' }, 
                style: { backgroundColor: '#10d' } 
            }, 
            { 
                id: 'sey5hh', 
                type: 'NoteTodos', 
                isPinned: true, 
                info: { title: 'Get my stuff together', 
                todos: [ 
                        { 
                            txt: 'Driving license', 
                            doneAt: null 
                        }, 
                        { 
                            txt: 'Coding power', 
                            doneAt: 187111111 
                        } 
                    ],
                }, 
                style: {backgroundColor: '#09d'}     
            },
            {
                id: 'dfjkky',
                type: 'NoteVideo',
                isPinned: false,
                createdAT: 1677836427275,
                info: {
                    title: "energy", 
                    url: "https://www.youtube.com/embed/ouecRm8cCoY"
                },
                style: {backgroundColor: '#003'},
            },
            { 
                id: 'dfssss', 
                createdAt: 1112222, 
                type: 'NoteText', 
                isPinned: false, 
                info: { txt: 'Fullstack Me Baby!' }, 
                style: { backgroundColor: '#02d' }, 
            }, 
            { 
                id: 'qqqqqq', 
                type: 'NoteImg', 
                isPinned: false, 
                info: { url: '../../../assets/img/pexels-eberhard-grossgasteiger-572897.jpg', title: 'Bobi and Me' }, 
                style: { backgroundColor: '#00d' } 
            }, 
            { 
                id: 'llllll', 
                type: 'NoteTodos', 
                isPinned: false, 
                info: { title: 'Get my stuff together', 
                todos: [ 
                        { 
                            txt: 'Driving license', 
                            doneAt: null 
                        }, 
                        { 
                            txt: 'Coding power', 
                            doneAt: 187111111 
                        } 
                    ],
                }, 
                style: {backgroundColor: '#f0d'}     
            },
            {
                id: 'jjjjjj',
                type: 'NoteVideo',
                isPinned: false,
                createdAT: 1677836427275,
                info: {
                    title: "energy", 
                    url: "https://www.youtube.com/embed/ouecRm8cCoY"
                },
                style: {backgroundColor: '#0ed'},
            }
        ]
        utilService.saveToStorage(NOTE_KEY, notes)
    }
}

// function _createBook(title, description, listPrice) {
//     const book = getEmptyNote(title, description, listPrice)
//     book.id = utilService.makeId()
//     return book
// }

{/* <iframe width="839" height="472" src="https://www.youtube.com/embed/ouecRm8cCoY" title="Fusion Energy: Hype or The Future?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}