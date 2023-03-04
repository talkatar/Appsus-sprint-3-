
import { utilService } from './util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const BOOK_KEY = 'bookGB'
const DEBOUNCE_KEY = 'bookDEBOUNCE'

let gCacheSearch = utilService.loadFromStorage(BOOK_KEY) || []



export const googleBookService = {
    query,
  
}


function query(txt) {
    console.log(txt);
    
    if (gCacheSearch[txt]) return Promise.resolve(gCacheSearch[txt])

    const url = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${txt}`

    return fetch(url)
    .then(res => res.json())
        .then(res => {
            
            console.log(res);

            const books = res.items.map(item => 
                ({
                   title:item.volumeInfo.title,
                   authors:item.volumeInfo.authors,
                    categories:item.volumeInfo.categories,
                    description:item.volumeInfo.description,
                    language:item.volumeInfo.language,
                    listPrice:{
                        currencyCode:'ILS',
                         isOnSale:item.saleInfo.isEbook,
                        amount:150
                            },

                    pageCount:item.volumeInfo.pageCount,
                    publishedDate:item.volumeInfo.publishedDate,
                    subtitle:item.volumeInfo.subtitle,
                    thumbnail:item.volumeInfo.imageLinks?.thumbnail||
                    `http://books.google.com/books/content?id=L18VBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`,
                   

               }))

               console.log(books);
            if (!gCacheSearch && !gCacheSearch.length) throw new Error('No info Found')
            utilService.saveToStorage(BOOK_KEY, gCacheSearch)
          
            return books
           
        })

}







// function get(bookId) {
//     return storageService.get(BOOK_KEY, bookId)
// }

// function remove(bookId) {
//     return storageService.remove(BOOK_KEY, bookId)
// }


// function save(book) {
//     if (book.id) {
//         return storageService.put(BOOK_KEY, book)
//     } else {
//         return storageService.post(BOOK_KEY, book)
//     }
// }

// function getEmptyBook(title) {
//     return{
//         id: '',
//         title,
        
//         }
//       }


// function _createBooks() {
//     let books = utilService.loadFromStorage(BOOK_KEY)
//     if (!books || !books.length) {
//         books = []
//         books.push(_createBook('tal'))
//         books.push(_createBook('david'))
//         books.push(_createBook('y'))
//         utilService.saveToStorage(BOOK_KEY, books)
//     }
// }


// function _createBook(title) {
//     const book = getEmptyBook(id, title)
//     book.id = utilService.makeId()
//     return book
// }


