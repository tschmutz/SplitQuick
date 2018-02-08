# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user0 = User.create(username: 'Guest', password: '123456')
user1 = User.create(username: 'James', password: '123456')
user3 = User.create(username: 'Brittney', password: '123456')
user4 = User.create(username: 'Sarah', password: '123456')
user5 = User.create(username: 'Breven', password: '123456')
user6 = User.create(username: 'Shaye', password: '123456')
user7 = User.create(username: 'Aiden', password: '123456')
user8 = User.create(username: 'Tom', password: '123456')
user9 = User.create(username: 'Kevin', password: '123456')
user10 = User.create(username: 'Evelyn', password: '123456')
user11 = User.create(username: 'Adam', password: '123456')
user12 = User.create(username: 'Carl', password: '123456')
user13 = User.create(username: 'Samsone', password: '123456')
user14 = User.create(username: 'Oscar', password: '123456')
user15 = User.create(username: 'Penelope', password: '123456')


Bill.create!(lender_id: user0.id, lendee_id: user1.id, title: "Vegas", settled: false, amount: "345.40");
Bill.create!(lender_id: user14.id, lendee_id: user12.id, title: "Mexico", settled: false, amount: "235.40");
Bill.create!(lender_id: user1.id, lendee_id: user8.id, title: "Guitar", settled: false, amount: "435.45");
Bill.create!(lender_id: user8.id, lendee_id: user4.id, title: "Lost Bet", settled: false, amount: "1024.00");
Bill.create!(lender_id: user5.id, lendee_id: user6.id, title: "Motorcycle", settled: false, amount: "745.21");
Bill.create!(lender_id: user15.id, lendee_id: user4.id, title: "Bunjee Jumping", settled: false, amount: "145.80");
Bill.create!(lender_id: user13.id, lendee_id: user11.id, title: "30 pounds of cupcakes", settled: false, amount: "77045.00");
Bill.create!(lender_id: user6.id, lendee_id: user10.id, title: "Kidney", settled: false, amount: "9945.00");
