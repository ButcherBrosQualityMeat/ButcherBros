'use strict'

const db = require('../server/db')
const {User, Product} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const products = await Promise.all([
    Product.create({
      name: 'Beef Shank',
      category: 'Beef',
      price: '$12.00',
      imageUrl:
        'https://www.westcofoods.com/wp-content/uploads/2013/08/beef-shanks-2.jpg',
      description:
        'The beef shank is the shank portion of a steer or heifer. In Britain the corresponding cuts of beef are the shin, and the leg. Due to the constant use of this muscle by the animal it tends to be tough, dry, and sinewy, so is best when cooked for a long time in moist heat.'
    }),
    Product.create({
      name: 'Brisket',
      category: 'Beef',
      price: '$20.00',
      imageUrl:
        'https://assets.bonappetit.com/photos/5a05d8252fff8c4e1363fe4f/16:9/w_1200,c_limit/mamalehs-brisket.jpg',
      description:
        'Brisket is a cut of meat from the breast or lower chest of beef or veal. The beef brisket is one of the nine beef primal cuts, though the precise definition of the cut differs internationally. The brisket muscles include the superficial and deep pectorals.'
    }),
    Product.create({
      name: 'Pork Loin',
      category: 'Pork',
      price: '$6.00',
      imageUrl:
        'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201307-xl-spice-roasted-pork-tenderloin.jpg?itok=VoUYF6Eq',
      description:
        'Pork loin is a cut of meat from a pig, created from the tissue along the dorsal side of the rib cage.'
    }),
    Product.create({
      name: 'Pork Belly',
      category: 'Pork',
      price: '$30.00',
      imageUrl:
        'https://www.westcofoods.com/wp-content/uploads/2013/08/beef-shanks-2.jpg',
      description:
        'Pork belly is a boneless cut of fatty meat from the belly of a pig. This dish is considered a delicacy in many parts of the world.'
    }),
    Product.create({
      name: 'Whole Chicken',
      category: 'Chicken',
      price: '$2.00',
      imageUrl: 'http://www.kochfoodsinc.com/images/WOG_DescriptionImage.jpg',
      description:
        'Whole Chicken: The chicken with all parts intact, generally including the giblets stuffed in the cavity. Consists of white and dark meat. ... The chicken is split in half lengthwise through the breast and back, leaving fairly equal halves consisting of the same parts. Both halves consist of white and dark meat.'
    }),
    Product.create({
      name: 'Chicken wing ',
      category: 'Chicken',
      price: '$112.00',
      imageUrl:
        'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/4c41b09cf41644a7b7ca1780edbeb960/BFV8354_Honey_BBQ_Chicken_Wings-FB1080.jpg',
      description:
        'Chicken wing section (flat or drumette) that is generally deep-fried then coated or dipped in a sauce consisting of a vinegar-based cayenne pepper hot sauce and melted butter prior to serving.'
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
      creditCardInfo: '345h67j8k9l'
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
      creditCardInfo: '345h67j8k9l'
    }),
    User.create({
      email: 'dalton@email.com',
      password: '123',
      firstName: 'Dalton',
      lastname: 'Spinas',
      imageUrl: 'https://ca.slack-edge.com/T024FPYBQ-UDR962FPY-g697ce1271a8-72',
      googleId: '54321',
      mailingAddress: '420 High Street',
      billingAddress: '101 Main Street',
      creditCardInfo: '345h67j8k9l'
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
      creditCardInfo: '345h67j8k9l'
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
      creditCardInfo: '345h67j8k9l'
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
      creditCardInfo: '345h67j8k9l'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
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
