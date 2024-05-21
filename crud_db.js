use('crud_db')

// db.animals.insertMany([
//     {
//         kind: 'tiger', weight: 300, name: 'Barsik',
//         predatory: true
//     },

//     {
//         kind: 'moose', weight: 350, name: 'Arnold',
//         predatory: false
//     },

//     {
//         kind: 'chicken', weight: 5, name: 'Ryaba',
//         predatory: false
//     },

//     {
//         kind: 'shark', weight: 100, name: 'Sharp',
//         predatory: true
//     },

//     {kind: 'chhetah', weight: 80, name: 'Chester',
//     predatory: true}

// ])

// db.animals.insertOne({kind: 'shark', weight: 90, name: 'Jaws',
//         predatory: true})

// db.animals.updateMany({ kind: 'shark' }, { $set: { predatory: true } })

// db.animals.updateMany({},{$inc:{weight:3}})

// db.animals.updateMany({},{$inc:{weight:-2}})

// db.animals.updateOne({_id: ObjectId('664c56a110725bc656a07937')},{$set:{weight:5}})

// db.animals.updateOne({kind:('moose')},{$unset:{predatory:""}})

// db.animals.updateOne({kind:('moose')},{$set:{predatory: false}})

// db.animals.updateOne({kind:('chhetah')},{$push:{foods: 'chitos'}})

// db.animals.updateOne({kind:('chhetah')},{$pull:{foods: 'chitos'}})

// db.animals.updateOne({kind:('chhetah')},{$unset:{foods: ''}})

// db.animals.updateOne({kind:('chhetah')},{$push:{foods:['meat','milk']}})

// db.animals.updateOne({ kind: ('chhetah') },
// { $push: { foods: { $each['squid', 'hinkali']}}});

// db.animals.updateMany({},{$rename:{predatory:"isPredatory"}})

// db.animals.deleteOne({_id: ObjectId('664c58b6ff34a6dde33fff51')})

// db.posts.insertOne({
//     likes:10,
//     text:'Hello,nice to see you!'
// })

// db.comments.insertMany([
//     {email: "123@google.com", message: 'Hi!', post_id: ObjectId("664c724af3a5021dd4e95a5f")},
//     {email: "345@google.com", message: 'Ohh! nice to see you', post_id: ObjectId("664c724af3a5021dd4e95a5f")},
//     {email: "679@google.com", message: '🙆‍♂️', post_id: ObjectId("664c724af3a5021dd4e95a5f")}
//   ])

// db.comments.aggregate({
//     $lookup: {
//         from: 'posts',
//     localField: "post_id",
//         foreignField: "_id",
//         as: 'post_info'
//     }
// })

// db.animals.aggregate([
//     {$match:{isPredatory:true}},
//     {$sort:{weight:-1}}
// ])

// db.animals.aggregate([
//     {$match:{isPredatory:false}},
//     {$count:'not_preditors_numbers'}
// ])

db.animals.aggregate([
    {$sample:{weight:1}}
])