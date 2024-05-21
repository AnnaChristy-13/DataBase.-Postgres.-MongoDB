use('drink_db')

// db.drinks.insertOne({ name: 'Coffee', category: 'non-alcoholic drinks', price: 50, strength: '0%' })

// db.drinks.insertMany([
//     { name: 'Champagne', category: 'alcoholic drinks', price: 50, strength: '12%' },
//     { name: 'Rum', category: 'alcoholic drinks', price: 80, strenght: '36-50%' },
//     { name: 'Whiskey', category: 'alcoholic drinks', price: 90, strenght: '36-50%' },
//     { name: 'Tequila', category: 'alcoholic drinks', price: 60, strenght: '50-51%' },
//     { name: 'Wine', category: 'alcoholic drinks', price: 30, strenght: '14-16%' },
//     { name: 'Beer', category: 'alcoholic drinks', price: 5, strenght: '4-8%' },
//     { name: 'Gin', category: 'non-alcoholic drinks', price: 60, strenght: '36-50%' }
// ])

// db.drinks.find().sort({name:-1})

// db.drinks.findOne({name:'Wine'})

// db.drinks.find({category:"alcoholic drinks"}).sort({name:1})

db.drinks.find().sort({_id:-1}).limit(2)