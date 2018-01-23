require('dotenv').config()

const User = require('./models/User')
const PrivateSpace = require('./models/PrivateSpace')
const PublicSpace = require('./models/PublicSpace')

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

// connect to database
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
    console.error(`
    MongoDB connection error!!! 
    ${error}
    `)
    process.exit(-1)
})

User.remove({})
    .then(() => {
        const seedUser1 = new User({
            userName: 'Eva',
            email: 'evaCimaglia@gmail.com',
            privateSpaces: []
        })

        const seedPrivateSpace1 = new PrivateSpace({
            neighborhood: 'Candler Park',
            description: 'Private Parking Space in Euclid Court Apartments',
            location: '1335 Euclid Ave. Atlanta, GA 30307',
            hours: 'M-F, 8:00am-6:00pm',
            availability: true,
            public: false
        })

        seedUser1.privateSpaces.push(seedPrivateSpace1)

        return seedUser1.save()

    }).catch((error) => {
        console.log('!!!!! ERROR SAVING SEEDED DATA !!!!!')
        console.log(error)
    })

// I also need to delete the public spaces
PublicSpace.remove({})
    .then(() => {
        const seedPublicSpace1 = new PublicSpace({
            neighborhood: 'Candler Park',
            description: 'Free Street Parking Along Euclid Ave',
            location: 'Euclid Ave',
            hours: '24hrs a day',
            availability: true,
            public: true
        })
        return seedPublicSpace1.save()
    })
    .catch((error) => {
        console.log('!!!!! ERROR SAVING SEEDED DATA !!!!!')
        console.log(error)
    }).then(() => {
        mongoose.connection.close()
        console.log(`Finished seeding database...
        Disconnected from MongoDB`)
    })

// Delete all users, then add some fake ones
// User.remove({})
//     .then(() => {
//         const seedUser1 = new User({
//             userName: 'Eva',
//             email: 'evaCimaglia@gmail.com',
//             privateSpaces: []
//         })

//         const seedPrivateSpace1 = new PrivateSpace({
//             neighborhood: 'Candler Park',
//             description: 'Private Parking Space in Euclid Court Apartments',
//             location: '1335 Euclid Ave. Atlanta, GA 30307',
//             hours: 'M-F, 8:00am-6:00pm',
//             availability: true,
//             public: false
//         })

//         seedUser1.privateSpaces.push(seedPrivateSpace1)

//         return seedUser1.save()

//     }).catch((error) => {
//         console.log('!!!!! ERROR SAVING SEEDED DATA !!!!!')
//         console.log(error)
//     }).then(() => {
//         mongoose.connection.close()
//         console.log(`
//       Finished seeding database...

//       Disconnected from MongoDB
//     `)
//     })