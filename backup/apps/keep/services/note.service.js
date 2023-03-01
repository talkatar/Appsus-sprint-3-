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
    // getEmptyNote,
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

// function getEmptyNote(title = '', description = '', listPrice) {
//     return { id: '', title, description, listPrice }
// }

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
                style: { backgroundColor: '#00d' }, 
            }, 
            { 
                id: 'n102', 
                type: 'NoteImg', 
                isPinned: false, 
                info: { url: 'http://some-img/me', title: 'Bobi and Me' }, 
                style: { backgroundColor: '#00d' } 
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
                    ] 
                } 
            }
        ]
        // books.push(_createBook('JS for dummies', 
        //             utilService.makeLorem(50), {
        //                 "amount": 2,
        //                 "currencyCode": "USD",
        //                 "isOnSale": false
        //             }))
        // books.push(_createBook('how not to fail at coding', 
        //             utilService.makeLorem(50), {
        //                 "amount": 12,
        //                 "currencyCode": "EUR",
        //                 "isOnSale": true
        //             }))
        // books.push(_createBook('The Return of Puki', 
        //             utilService.makeLorem(50), {
        //                 "amount": 32,
        //                 "currencyCode": "USD",
        //                 "isOnSale": true
        //             }))
        // books.push(_createBook('Mukis Revenge', 
        //             utilService.makeLorem(50), {
        //                 "amount": 22,
        //                 "currencyCode": "EUR",
        //                 "isOnSale": false
        //             }))
        utilService.saveToStorage(NOTE_KEY, notes)
    }
}

// function _createBook(title, description, listPrice) {
//     const book = getEmptyNote(title, description, listPrice)
//     book.id = utilService.makeId()
//     return book
// }