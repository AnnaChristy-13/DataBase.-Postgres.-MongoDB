use('student_db')

// db.students.insertOne({name:'anna'})

// db.students.insertOne({name: 'Donald', age:35, address: {country: 'Germany', city: 'Berlin'}})

// db.students.insertMany([
//     {name:'Alena',hobby:'travel'},
//     {name:'Eugen', profession:'Work with wood'}
// ])

// db.students.insertOne({
//     name:'Harry',
//     hobby: ['Magig','Flying','Traveling','Battle with Evil']
// })

// db.students.find()

// db.students.find().limit(2)

// db.students.find().sort({_id:-1}).limit(2)

// db.students.find().sort({hobby:-1})

// db.students.findOne({hobby:'travel'})

// db.students.insertOne({name:'Indiana Johnes', hobby:'travel'})

db.students.findOne({hobby:'travel'})