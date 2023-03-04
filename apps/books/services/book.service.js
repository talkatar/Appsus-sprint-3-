'use strict'

import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'
import booksJSON from '../booksJson/books.json' assert {type: 'json'}

const BOOK_KEY = 'bookDB'

_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    addReview,
    removeReview,
    addGoogleBook
}

function query(filterBy = {}) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            console.log(books);
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                books = books.filter(book => regex.test(book.vendor))
            }
            if (filterBy.minSpeed) {
                books = books.filter(book => book.maxSpeed >= filterBy.minSpeed)
            }
            return books
        })
}


function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
    .then(_setNextPrevBookId)
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}


function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook(title, amount) {
    return{
        id: '',
        title,
        subtitle: "mi est eros convallis auctor arcu dapibus himenaeos",
        authors: [
          "Barbara Cartland"
        ],
        publishedDate: 1999,
        description: "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
        pageCount: 713,
        categories: [
          'Computers',
          'Hack'
        ],
        thumbnail: "http://coding-academy.org/books-photos/20.jpg",
        language: "en",
        listPrice: {
          amount,
          currencyCode: "EUR",
          isOnSale: false
        }
      }
}
function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = booksJSON
        console.log(books);
        utilService.saveToStorage(BOOK_KEY, books)
    }
}



function addReview(bookId,review){
    review.id=utilService.makeId()

    return get(bookId)
    .then(book => {
        if ( !book.reviews) book.reviews=[review]
        else{book.reviews.unshift(review)}
     
       return save(book)
    }
    )
  
}

function removeReview(bookId,reviewId){

    return get(bookId)
    .then(book => {
        const idx = book.reviews.findIndex(review => review.id === reviewId)
        book.reviews.splice(idx, 1)
     
        return save(book)
    }
    )
  
}
function _setNextPrevBookId(book) {
    return storageService.query(BOOK_KEY).then((books) => {
        const bookIdx = books.findIndex((currBook) => currBook.id === book.id)
        book.nextBookId = books[bookIdx + 1] ? books[bookIdx + 1].id : books[0].id
        book.prevBookId = books[bookIdx - 1]
            ? books[bookIdx - 1].id
            : books[books.length - 1].id
        return book
    })
}


function addGoogleBook(book){
     storageService.query(BOOK_KEY).then(
        (books) => {if(books.find((currBook) => currBook.title === book.title)) return
    save(book)
})
}