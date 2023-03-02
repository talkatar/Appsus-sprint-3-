'use strict'

import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const EMAIL_KEY = 'emailDB'

_createEmails()
const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
   }

export const emailService = {
    query,
    get,
    remove,
    save,
    getEmptyEmail,
    loggedinUser
    // addReview,
    // removeReview,
    // addGoogleEmail
}

function query(filterBy = {}) {
    return storageService.query(EMAIL_KEY)
        .then(emails => {
            console.log(emails);
            // if (filterBy.txt) {
            //     const regex = new RegExp(filterBy.txt, 'i')
            //     emails = emails.filter(email => regex.test(email.vendor))
            // }
            // if (filterBy.minSpeed) {
            //     emails = emails.filter(email => email.maxSpeed >= filterBy.minSpeed)
            // }
            return emails
        })
}


function get(emailId) {
    return storageService.get(EMAIL_KEY, emailId)
    // .then(_setNextPrevEmailId)
}

function remove(emailId) {
    return storageService.remove(EMAIL_KEY, emailId)
}


function save(email) {
    if (email.id) {
        return storageService.put(EMAIL_KEY, email)
    } else {
        return storageService.post(EMAIL_KEY, email)
    }
}



function _createEmails() {
    let emails = utilService.loadFromStorage(EMAIL_KEY)
    if (!emails || !emails.length) {

        emails = [ {
            id: 'e101',
            nameSender:'Amazon Business',
            subject: 'Tal, save even more with a free Amazon Business account!',
            body: 'you are receiving this email because you have a business-issued credit card in your Amazon account',
            isRead: true,
            sentAt :1677774876492,
            removedAt : null,
            from: 'Amazon@Amazon.com',
            to: 'user@appsus.com',
            isStared:false,
            isDraft:false,
           
            },
            {
                id: 'e102',
                nameSender:'The Google Account',
                subject: 'GitGuardian has detected the following Google API Key exposed within your GitHub account.' ,
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt : 1551133930594,
                removedAt : null,
                from: 'Google@Google.com',
                to: 'user@appsus.com',
                isStared:false,
                isDraft:false,

                },
                {
                id: 'e103',
                nameSender:'LinkedIn Job Alerts',
                subject: ' Explore jobs similar to your job alert',
                body: 'No matching jobs for: operations project manager in Herzliya, Tel Aviv District, Israel today',
                isRead: false,
                sentAt : 1521133930594,
                removedAt : null,
                from: 'LinkedIn@LinkedIn.com',
                to: 'user@appsus.com',
                isStared:true,
                isDraft:true,

                },
                {
                    id: 'e104',
                    nameSender:'eBay',
                    subject: ' Sound like a good idea? All you have to do is go to eBay',
                    body: 'Keeping your personal info up to date can help better protect your account',
                    isRead: false,
                    sentAt : 1221133930594,
                    removedAt : null,
                    from: 'eBay@eBay.com',
                    to: 'user@appsus.com',
                    isStared:false,
                    isDraft:true,
                    
                },
                {
                    id: 'e105',
                    nameSender:'eBay',
                    subject: ' Sound like a good idea? All you have to do is go to eBay',
                    body: 'Keeping your personal info up to date can help better protect your account',
                    isRead: false,
                    sentAt : 1224133930594,
                    removedAt : null,
                    from: 'user@appsus.com',
                    to: 'user11@appsus.com',
                    isStared:false,
                    isDraft:true,
                    
                    }


                    ,{
                        id: 'e106',
                        nameSender:'eBay',
                        subject: ' Sound like a good idea? All you have to do is go to eBay',
                        body: 'Keeping your personal info up to date can help better protect your account',
                        isRead: true,
                        sentAt : 1234133930594,
                        removedAt : null,
                        from: 'user@appsus.com',
                        to: 'user11@appsus.com',
                        isStared:false,
                        isDraft:false,
                        
                        }
                        ,{
                            id: 'e107',
                            nameSender:'eBay',
                            subject: ' Sound like a good idea? All you have to do is go to eBay',
                            body: 'Keeping your personal info up to date can help better protect your account',
                            isRead: true,
                            sentAt : 1235133930594,
                            removedAt : null,
                            from: 'user@appsus.com',
                            to: 'user11@appsus.com',
                            isStared:false,
                            isDraft:false,
                            
                            }
                        ,{
                                id: 'e108',
                                nameSender:'eBay',
                                subject: ' Sound like a good idea? All you have to do is go to eBay',
                                body: 'Keeping your personal info up to date can help better protect your account',
                                isRead: true,
                                sentAt : 1235133930594,
                                removedAt : null,
                                from: 'user@appsus.com',
                                to: 'user11@appsus.com',
                                isStared:false,
                                isDraft:false,
                                
                                }
                ]

        utilService.saveToStorage(EMAIL_KEY, emails)
    }
}




function getEmptyEmail() {
    return{
        id: '',
        nameSender:'',
        subject: '',
        body: '',
        isRead: false,
        sentAt : new Date(),
        removedAt : null,
        to: '',
        isStared:false,
        isDraft:true,
        from: 'user@appsus.com',

        }
      
}


// function addReview(emailId,review){
//     review.id=utilService.makeId()

//     return get(emailId)
//     .then(email => {
//         if ( !email.reviews) email.reviews=[review]
//         else{email.reviews.unshift(review)}
     
//        return save(email)
//     }
//     )
  
// }

// function removeReview(emailId,reviewId){

//     return get(emailId)
//     .then(email => {
//         const idx = email.reviews.findIndex(review => review.id === reviewId)
//         email.reviews.splice(idx, 1)
     
//         return save(email)
//     }
//     )
  
// }
// function _setNextPrevEmailId(email) {
//     return storageService.query(EMAIL_KEY).then((emails) => {
//         const emailIdx = emails.findIndex((currEmail) => currEmail.id === email.id)
//         email.nextEmailId = emails[emailIdx + 1] ? emails[emailIdx + 1].id : emails[0].id
//         email.prevEmailId = emails[emailIdx - 1]
//             ? emails[emailIdx - 1].id
//             : emails[emails.length - 1].id
//         return email
//     })
// }

