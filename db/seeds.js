require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

const { User, PrivateSpace, PublicSpace } = require('./schema')

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

// I also need to delete the public spaces
// PublicSpace.remove({})
//     .then(() => {
//         const seedPublicSpace1 = new PublicSpace({
//             neighborhood: '',
//             description: '',
//             location: '',
//             hours: '',
//             availability: true,
//             public: false
//         })
//         return seedPublicSpace1.save()
//     })
//     .catch((error) => {
//         console.log('!!!!! ERROR SAVING SEEDED DATA !!!!!')
//         console.log(error)
//     })

// Delete all users, then add some fake ones
User.remove({})
    .then(() => {
        const seedUser1 = new User({
            userName: 'Eva',
            email: 'evaCimaglia@gmail.com',
            privateSpaces: []
        })

        const seedPrivateSpace1 = new PrivateSpace({
            neighborhood: '',
            description: '',
            location: '',
            hours: '',
            availability: true,
            public: false
        })

        seedUser1.privateSpaces.push(seedPrivateSpace1)

        return seedUser1.save()

    }).catch((error) => {
        console.log('!!!!! ERROR SAVING SEEDED DATA !!!!!')
        console.log(error)
    }).then(() => {
        mongoose.connection.close()
        console.log(`
      Finished seeding database...
      
      Disconnected from MongoDB
    `)
    })