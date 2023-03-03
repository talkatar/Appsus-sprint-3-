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

        emails = [{
            id: 'e101',
            nameSender: 'Amazon Business',
            subject: 'Tal, save even more with a free Amazon Business account!',
            body: 'you are receiving this email because you have a business-issued credit card in your Amazon account',
            isRead: true,
            sentAt: 1551133930594,
            removedAt: null,
            from: 'Amazon@Amazon.com',
            to: 'user@appsus.com',
            isStared: false,
            isDraft: false,
            isTrash: false

        },
        {
            id: 'e102',
            nameSender: 'The Google Account',
            subject: 'GitGuardian has detected the following Google API Key exposed within your GitHub account.',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1677734870492,
            removedAt: null,
            from: 'Google@Google.com',
            to: 'user@appsus.com',
            isStared: false,
            isDraft: false,
            isTrash: false

        },
        {
            id: 'e103',
            nameSender: 'Google Maps Platform',
            subject: ' Welcome to Google Maps Platform',
            body: 'Whether you are starting fresh or building enterprise services, with over 15 APIs and SDKs there’s no limit to what you can build. Get started for free and enjoy a $200 monthly usage credit to keep you going.',
            isRead: false,
            sentAt: 1221133930594,
            removedAt: null,
            from: 'LinkedIn@LinkedIn.com',
            to: 'user@appsus.com',
            isStared: true,
            isDraft: false,
            isTrash: false

        },
        {
            id: 'e104',
            nameSender: 'Draft',
            subject: ' Sound like a good idea? All you have to do is go to eBay',
            body: 'Keeping your personal info up to date can help better protect your account',
            isRead: true,
            sentAt: 1521133930594,
            removedAt: null,
            from: '',
            to: '',
            isStared: false,
            isDraft: true,
            isTrash: false


        },
        {
            id: 'e105',
            nameSender: 'eBay',
            subject: ' Sound like a good idea? All you have to do is go to eBay',
            body: 'Keeping your personal info up to date can help better protect your account',
            isRead: false,
            sentAt: 1224133930594,
            removedAt: null,
            from: 'user@appsus.com',
            to: 'user11@appsus.com',
            isStared: false,
            isDraft: false,
            isTrash: true
        }


            , {
            id: 'e106',
            nameSender: 'Draft',
            subject: ' Explore jobs similar to your job alert',
            body: 'No matching jobs for: operations project manager in Herzliya, Tel Aviv District, Israel today',
            isRead: true,
            sentAt: 1521133930594,
            removedAt: null,
            from: '',
            to: '',
            isStared: true,
            isDraft: true,
            isTrash: false


        }

            , {
            id: 'e107',
            nameSender: 'eBay',
            subject: ' Sound like a good idea? All you have to do is go to eBay',
            body: 'Keeping your personal info up to date can help better protect your account',
            isRead: true,
            sentAt: 1235133930594,
            removedAt: null,
            from: 'Google@Google.com',
            to: 'user11@appsus.com',
            isStared: false,
            isDraft: false,
            isTrash: false


        }
            , {
            id: 'e108',
            nameSender: 'eBay',
            subject: ' Sound like a good idea? All you have to do is go to eBay',
            body: 'Keeping your personal info up to date can help better protect your account',
            isRead: true,
            sentAt: 1235133930594,
            removedAt: null,
            from: 'Google@Google.com',
            to: 'user11@appsus.com',
            isStared: false,
            isDraft: false,
            isTrash: false


        },
        {

            id: 'e109',
            nameSender: 'adidas Runtastic',
            subject: 'he Just You and Your Run Challenge Is Here!',
            body: 'Need some extra motivation to (re)start your running? How about a fun community challenge! From km together. All we need is you! Theres no contribution too great or too small Whether youre new to running, restarting, or just keeping on track with your favorite sport — join us!',
            isRead: true,
            sentAt: 1251133930594,
            removedAt: null,
            from: '<info@news.runtastic.com>',
            to: 'user@appsus.com',
            isStared: false,
            isDraft: false,
            isTrash: false

        },

        {

            id: 'e110',
            nameSender: 'The Movie Database',
            subject: 'New reply to API Key Request',
            body: 'You are receiving this email because you are a registered user on www.themoviedb.org and are subscribed to this discussion.',
            isRead: true,
            sentAt: 1271133930594,
            removedAt: null,
            from: '<no-reply@themoviedb.org>',
            to: 'user@appsus.com',
            isStared: false,
            isDraft: false,
            isTrash: false

        },
        {

            id: 'e111',
            nameSender: 'Nick from Scribe',
            subject: 'New reply to API Key Request',
            body: 'Hey tal 👋, I wanted to see if theres anything I can do to help you get started — and make the most out of your experience! ',
            isRead: true,
            sentAt: 1271133930594,
            removedAt: null,
            from: 'nick.churcher@scribehow.com',
            to: 'user@appsus.com',
            isStared: false,
            isDraft: false,
            isTrash: false,

        },
        {
            id: 'e112',
            nameSender: 'The Google Account',
            subject: 'GitGuardian has detected the following Google API Key exposed within your GitHub account.',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1677774870492,
            removedAt: null,
            from: 'Google@Google.com',
            to: 'user@appsus.com',
            isStared: false,
            isDraft: false,
            isTrash: false,

        },
        {
            id: 'e113',
            nameSender: 'eBay',
            subject: ' Sound like a good idea? All you have to do is go to eBay',
            body: 'Keeping your personal info up to date can help better protect your account',
            isRead: false,
            sentAt: 1224133930594,
            removedAt: null,
            from: 'user@appsus.com',
            to: 'user11@appsus.com',
            isStared: false,
            isDraft: false,
            isTrash: false,
        },

        {
            id: 'e114',
            nameSender: 'Google Cloud',
            subject: ' Welcome to Google Cloud ',
            body: 'Learn the fundamentals with this tutorial  and see what else you can do for free on Google Cloud with our Always Free tier',
            isRead: false,
            sentAt: 1224133930594,
            removedAt: null,
            from: 'user@appsus.com',
            to: 'user11@appsus.com',
            isStared: false,
            isDraft: false,
            isTrash: false,
        },


        {
            id: 'e115',
            nameSender: 'Splitwise',
            subject: ' January is over. Heres whats up in your account on Splitwis',
            body: 'Learn the fundamentals with this tutorial  and see what else you can do for free on Google Cloud with our Always Free tier',
            isRead: false,
            sentAt: 1224133930594,
            removedAt: null,
            from: 'hello@splitwise.com',
            to: 'user11@appsus.com',
            isStared: false,
            isDraft: false,
            isTrash: false,
        },
        {

            id: 'e116',
            nameSender: 'The Movie Database',
            subject: 'New reply to API Key Request',
            body: 'You are receiving this email because you are a registered user on www.themoviedb.org and are subscribed to this discussion.',
            isRead: true,
            sentAt: 1271133930594,
            removedAt: null,
            from: '<no-reply@themoviedb.org>',
            to: 'user@appsus.com',
            isStared: false,
            isDraft: false,
            isTrash: false

        },
        {

            id: 'e117',
            nameSender: 'Nick from Scribe',
            subject: 'New reply to API Key Request',
            body: 'Hey tal 👋, I wanted to see if theres anything I can do to help you get started — and make the most out of your experience! ',
            isRead: true,
            sentAt: 1271133930594,
            removedAt: null,
            from: 'nick.churcher@scribehow.com',
            to: 'user@appsus.com',
            isStared: false,
            isDraft: false,
            isTrash: false,

        },
        {
            id: 'e118',
            nameSender: 'Bank Hapoalim',
            subject: ' Hey Tal we just want to ley you know some new points',
            body: 'I wanted to see if theres anything I can do to help you get started — and make the most out of your experience',
            isRead: true,
            sentAt: 1521133930594,
            removedAt: null,
            from: 'BankHapoalim@scribehow.com',
            to: 'user@appsus.com',
            isStared: false,
            isDraft: false,
            isTrash: false


        },

        {
            id: 'e119',
            nameSender: 'Clalit',
            subject: ' anuary is over. Heres whats up in your account on Splitwis',
            body: 'Learn the fundamentals with this tutorial  and see what else you can do for free on Google Cloud ',
            isRead: true,
            sentAt: 1521133930594,
            removedAt: null,
            from: 'clalit@scribehow.com',
            to: 'user@appsus.com',
            isStared: false,
            isDraft: false,
            isTrash: false


        },

        {
            id: 'e120',
            nameSender: 'Social',
            subject: ' Sound like a good idea? All you have to do is go to Social',
            body: 'Keeping your personal info up to date can help better protect your account ',
            isRead: true,
            sentAt: 1521133930594,
            removedAt: null,
            from: 'clalit@scribehow.com',
            to: 'user@appsus.com',
            isStared: false,
            isDraft: false,
            isTrash: false


        },

        








        ]

        utilService.saveToStorage(EMAIL_KEY, emails)
    }
}




function getEmptyEmail() {
    return {
        id: '',
        nameSender: '',
        subject: '',
        body: '',
        isRead: false,
        sentAt: new Date(),
        removedAt: null,
        to: '',
        isStared: false,
        isDraft: false,
        isTrash:false,
        from: 'user@appsus.com',

    }

}


