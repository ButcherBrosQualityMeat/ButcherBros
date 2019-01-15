'use strict'

const db = require('../server/db')
const {User, Product, Category, Order} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const categories = await Promise.all([
    Category.create({
      name: 'Beef',
      imageUrl:
        'https://images.pexels.com/photos/1539684/pexels-photo-1539684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      carImg:
        'http://champoegcreamery.com/wp-content/uploads/2014/01/beef-cows-panorama.jpg',
      description:
        'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and nutrients.'
    }),
    Category.create({
      name: 'Pork',
      imageUrl:
        'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      carImg:
        'https://i.pinimg.com/originals/c2/10/f7/c210f7267fc83c0cc9ada955c93c2d47.jpg',
      description:
        'Pork is the culinary name for meat from a domestic pig. It is the most commonly consumed meat worldwide, with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved.'
    }),
    Category.create({
      name: 'Chicken',
      imageUrl:
        'https://images.pexels.com/photos/265393/pexels-photo-265393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      carImg:
        'https://static1.squarespace.com/static/58c76b37414fb5205e1fbd21/t/5a59665808522942afe8347d/1515808356756/chicken+banner+%281%29.png?format=1500w',
      description:
        'The chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.'
    })
  ])

  const products = await Promise.all([
    Product.create({
      name: 'Beef Shank',
      categoryId: 1,
      price: 1200,
      imageUrl:
        'https://www.westcofoods.com/wp-content/uploads/2013/08/beef-shanks-2.jpg',
      description: 'The beef shank is the shank portion of a steer or heifer.'
    }),
    Product.create({
      name: 'Brisket',
      categoryId: 1,
      price: 2000,
      imageUrl:
        'https://assets.bonappetit.com/photos/5a05d8252fff8c4e1363fe4f/16:9/w_1200,c_limit/mamalehs-brisket.jpg',
      description:
        'Brisket is a cut of meat from the breast or lower chest of beef or veal.'
    }),
    Product.create({
      name: 'Pork Loin',
      categoryId: 2,
      price: 600,
      imageUrl:
        'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201307-xl-spice-roasted-pork-tenderloin.jpg?itok=VoUYF6Eq',
      description: 'Pork loin is a cut of meat from a pig.'
    }),
    Product.create({
      name: 'Pork Belly',
      categoryId: 2,
      price: 3000,
      imageUrl:
        'https://www.westcofoods.com/wp-content/uploads/2013/08/beef-shanks-2.jpg',
      description:
        'Pork belly is a boneless cut of fatty meat from the belly of a pig.'
    }),
    Product.create({
      name: 'Whole Chicken',
      categoryId: 3,
      price: 200,
      imageUrl: 'http://www.kochfoodsinc.com/images/WOG_DescriptionImage.jpg',
      description:
        'Whole Chicken: The chicken with all parts intact, generally including the giblets.'
    }),
    Product.create({
      name: 'Chicken wing ',
      categoryId: 3,
      price: 11200,
      imageUrl:
        'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/4c41b09cf41644a7b7ca1780edbeb960/BFV8354_Honey_BBQ_Chicken_Wings-FB1080.jpg',
      description:
        'Chicken wing section (flat or drumette) that is generally deep-fried.'
    }),

    Product.create({
      name: 'Prime Rib',
      categoryId: 1,
      price: 17300,
      imageUrl:
        'https://www.blueribbonbutchershop.com/wp-content/uploads/2016/06/BEEF3-1-1024x773.jpg',
      description:
        'Choice Boneless and Choice Bone-In. “Prime” is available by special order through the Butcher Shop and may require a deposit.'
    }),
    Product.create({
      name: 'Brisket',
      categoryId: 1,
      price: 14399,
      imageUrl:
        'https://www.blueribbonbutchershop.com/wp-content/uploads/2016/06/BEEF1-1-1024x773.jpg',
      description: 'Another great cut for the BBQ.'
    }),
    Product.create({
      name: 'Top Sirloin',
      categoryId: 1,
      price: 14399,
      imageUrl:
        'https://www.blueribbonbutchershop.com/wp-content/uploads/2016/06/BEEF4-1-1024x773.jpg',
      description: 'A great cut for the broiler.'
    }),
    Product.create({
      name: 'Ribeye',
      categoryId: 1,
      price: 22300,
      imageUrl:
        'https://www.blueribbonbutchershop.com/wp-content/uploads/2016/06/BEEF2-1-1024x773.jpg',
      description: 'A flavorful cut brimming with flavor. Boneless and Bone-In.'
    })
  ])

  const users = await Promise.all([
    User.create({
      email: 'henryy@email.com',
      password: '123',
      firstName: 'Henry',
      lastName: 'Do',
      imageUrl: 'https://ca.slack-edge.com/T024FPYBQ-UDPLYRMC2-d60c7a406a67-72',
      googleId: '54321',
      mailingAddress: '420 High Street',
      billingAddress: '101 Main Street',
      creditCardInfo: '1234 1234 1234 1234'
    }),
    User.create({
      email: 'james@email.com',
      password: '123',
      firstName: 'James',
      lastName: 'Santos',
      imageUrl: 'https://ca.slack-edge.com/T024FPYBQ-UDRC7V12A-882d86cfa66a-72',
      googleId: '54321',
      mailingAddress: '420 High Street',
      billingAddress: '101 Main Street',
      creditCardInfo: '1234 1234 1234 1234'
    }),
    User.create({
      email: 'dalton@email.com',
      password: '123',
      firstName: 'Dalton',
      lastName: 'Spinas',
      imageUrl: 'https://ca.slack-edge.com/T024FPYBQ-UDR962FPY-g697ce1271a8-72',
      googleId: '54321',
      mailingAddress: '420 High Street',
      billingAddress: '101 Main Street',
      creditCardInfo: '1234 1234 1234 1234'
    }),
    User.create({
      email: 'frank@email.com',
      password: '123',
      firstName: 'Frank',
      lastName: 'Compston',
      imageUrl: 'https://ca.slack-edge.com/T024FPYBQ-UDNNK6Z40-1f72f771cc7f-72',
      googleId: '54321',
      mailingAddress: '420 High Street',
      billingAddress: '101 Main Street',
      creditCardInfo: '1234 1234 1234 1234'
    }),
    User.create({
      email: 'omri@email.com',
      password: '123',
      firstName: 'Omri',
      lastName: 'Berstien',
      imageUrl: 'https://ca.slack-edge.com/T024FPYBQ-U02HFNQ1M-a00696d343b0-72',
      googleId: '54321',
      mailingAddress: '420 High Street',
      billingAddress: '101 Main Street',
      creditCardInfo: '1234 1234 1234 1234'
    }),
    User.create({
      email: 'cody@email.com',
      password: '123',
      firstName: 'Cody',
      lastName: 'ThePug',
      imageUrl: 'https://ca.slack-edge.com/T024FPYBQ-UDNU943B3-01d665d12189-72',
      googleId: '54321',
      mailingAddress: '420 High Street',
      billingAddress: '101 Main Street',
      creditCardInfo: '1234 1234 1234 1234'
    })
  ])

  const orders = await Promise.all([
    Order.create({
      firstName: 'Joe',
      lastName: 'MeatGuy',
      address: '1111 Meat Street, Meatville, CA',
      email: 'numberonemeatbro@meat.com',
      orderIsComplete: true,
      contents: [{quantity: 1, productId: 1}, {quantity: 2, productId: 2}]
    }),
    Order.create({
      firstName: 'Betty',
      lastName: 'MeatGal',
      address: '123 Pork Loin Lane, Hamhock Town, NY',
      email: 'steakguuuurl@meat.com',
      orderIsComplete: true,
      contents: [{quantity: 3, productId: 4}, {quantity: 2, productId: 3}]
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded ${categories.length} categories`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
