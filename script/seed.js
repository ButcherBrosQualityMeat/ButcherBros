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
        'https://www.blueribbonbutchershop.com/wp-content/uploads/2016/06/Beef-1024x453.jpg',
      description:
        'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and nutrients.'
    }),
    Category.create({
      name: 'Pork',
      imageUrl:
        'https://www.bigy.com/Media/Default/ButcherShop/butchershop.jpg',
      description:
        'Pork is the culinary name for meat from a domestic pig. It is the most commonly consumed meat worldwide, with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved.'
    }),
    Category.create({
      name: 'Chicken',
      imageUrl:
        'http://goodiesinthepantry.com/wp-content/uploads/2017/03/Chicken-Wings.jpg',
      description:
        'The chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.'
    }),
    Category.create({
      name: 'Lamb',
      imageUrl:
        'https://www.thespruceeats.com/thmb/yWU6muyAV-Ga154H2Vz4ylTiEcQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/rosemary-garlic-lamb-shanks-recipe-101494-Ingredients-5bad052146e0fb002526455e.jpg',
      description:
        'There is little fat on lamb, and the meat can vary in color from a tender pink to a pale red. Spring lamb is extremely tender but has a milder flavor than lamb. Domestic lamb tends to be grain fed, contains more fat, and has a delicate flavor. Imported lamb, typically from Australia or New Zealand, tends to be grass fed, be leaner, and have a stronger flavor.'
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
      price: 2000,
      imageUrl: 'http://www.kochfoodsinc.com/images/WOG_DescriptionImage.jpg',
      description:
        'Whole Chicken: The chicken with all parts intact, generally including the giblets.'
    }),
    Product.create({
      name: 'Organic Whole Chicken',
      categoryId: 3,
      price: 3000,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Chickens_in_market.jpg/1920px-Chickens_in_market.jpg',
      description:
        'Organic grass fed free range chicken. Never administered antibiotics.'
    }),
    Product.create({
      name: 'Chicken wing ',
      categoryId: 3,
      price: 11200,
      imageUrl:
        'https://tendercuts.in/media/catalog/product/cache/8/image/1800x/040ec09b1e35df139433887a97daa66f/f/r/fresh-range-chicken-pieces-thumbnail.jpg',
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
    }),

    Product.create({
      name: 'Lamb Roast',
      categoryId: 4,
      price: 37500,
      imageUrl:
        'https://www.blueribbonbutchershop.com/wp-content/uploads/2016/06/lamb-1024x683.jpg',
      description: 'Tender lamb roast.'
    }),
    Product.create({
      name: 'Rack of Lamb',
      categoryId: 4,
      price: 13500,
      imageUrl:
        'https://www.dartagnan.com/dw/image/v2/AALC_PRD/on/demandware.static/-/Sites-dartagnan-live-catalog-en/default/dw8acf1452/images/products/FLAFR003-1.jpg?sw=490&strip=false',
      description: "Call me mint jelly because I'm on the lamb"
    }),
    Product.create({
      name: 'Lamb Shank',
      categoryId: 4,
      price: 21500,
      imageUrl:
        'http://freshnfrozen.com/wp-content/uploads/2017/09/LAmb-Shank-min.jpg',
      description:
        'The shank is the cut of lamb taken from the lower section of the animals legs and can be from the front legs or back legs.'
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
