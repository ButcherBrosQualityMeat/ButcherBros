'use strict'

// Assertions
const chai = require('chai')
const expect = chai.expect

// Product Model
const db = require('../server/db')
const Category = db.model('category')

// Product Routes
const app = require('../server')
const agent = require('supertest')(app)

// AllProducts component
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
enzyme.configure({adapter: new Adapter()})
import React from 'react'
import {SingleCategory} from '../client/components/SingleCategory'

// Redux
import reducer, {
  GET_ALL_CATEGORIES,
  getAllCategories,
  GET_ALL_PRODUCTS,
  getAllProducts
} from '../client/store/product'

describe('Category Slice', () => {
  // Model based tests: defined in ../server/db/models/category.js
  describe('Category model', () => {
    describe('Validations', () => {
      it('requires `name`', async () => {
        const category = Category.build()

        try {
          await category.validate()
          throw Error(
            'validation was successful but should have failed without `name`'
          )
        } catch (err) {
          expect(err.message).to.contain('name cannot be null') //going to create a category and create a name field
        }
      })

      it('requires `name` to not be an empty string', async () => {
        const category = Category.build({
          name: ''
        }) //try to create a category (got to models, update)

        try {
          await category.validate()
          throw Error(
            'validation was successful but should have failed if name is an empty string'
          )
        } catch (err) {
          expect(err.message).to.contain('Validation error')
          /* handle error */
        }
      })
    })
  })

  // defined in ../server/api/categories.js
  describe('Category routes', () => {
    let storedCategories

    const categoryData = [
      {
        name: 'Beef Category',
        imageUrl: 'http://www.philmurry.com/',
        description: 'here is a beef category'
      },
      {
        name: 'Chicken Category',
        imageUrl: 'http://www.philmurry.com/',
        description: 'here is a chicken category'
      }
    ]

    beforeEach(async () => {
      const createdCategories = await Category.bulkCreate(categoryData)
      storedCategories = createdCategories.map(category => category.dataValues)
    })

    // Route for fetching all categories
    describe('GET `/api/categories`', () => {
      it('serves up all Category', async () => {
        const response = await agent.get('/api/categories').expect(200)
        expect(response.body).to.have.length(2)
        expect(response.body[0].name).to.equal(storedCategories[0].name)
      })
    })
  })

  describe('Front-End', () => {
    const categoryData = [
      {
        name: 'Beef Category',
        imageUrl: 'http://www.philmurry.com/',
        description: 'here is a beef category'
      },
      {
        name: 'Chicken Category',
        imageUrl: 'http://www.philmurry.com/',
        description: 'here is a chicken category'
      }
    ]
    // defined in ../client/components/SingleCategory.js
    describe('<SingleCategory /> component', () => {
      it('renders an img element for each category passed in as props', () => {
        const wrapper = shallow(
          <SingleCategory
            info={{allCategories: categoryData}}
            match={{params: {id: 1}}}
          />
        )
        console.log(wrapper)
        expect(wrapper.find('div')).to.have.length(2)
      })

      /*       it('renders h3 elements with the category name passed in as props', () => {
        const wrapper = shallow(<SingleCategory info={{allCategories: categoryData}} match={{params: {id:1}}} />)
        const listItems = wrapper.find('h3')
        console.log(wrapper)
        expect(listItems).to.have.length(2)
        expect(listItems.at(1).text()).to.contain('Chicken')
      }) */
    })

    // defined in ../client/store/product.js
    describe('`getAllCategories` action creator', () => {
      const getAllCategoriesAction = getAllProducts(categoryData)

      it('returns a Plain Old JavaScript Object', () => {
        expect(typeof getAllCategoriesAction).to.equal('object')
        expect(Object.getPrototypeOf(getAllCategoriesAction)).to.equal(
          Object.prototype
        )
      })

      it('creates an object with `type` and `categories`', () => {
        expect(getAllCategoriesAction.type).to.equal(GET_ALL_CATEGORIES)
        expect(getAllCategoriesAction.categories[1].name).to.equal(
          'Chicken Thing'
        )
      })
    })

    // defined in ../client/store/product.js
    describe('reducer', () => {
      const initialState = {
        allProducts: [],
        allCategories: []
      }

      const newState = reducer(initialState, {
        type: GET_ALL_CATEGORIES,
        categories: categoryData
      })

      it('returns a new state with the updated `categories`', () => {
        // this should have changed:
        expect(newState.allCategories).to.deep.equal(categoryData)
        console.log(newState.allCategories)
        // this should not have changed:
        expect(newState.allCategories).to.equal(initialState.allCategories)
      })

      it('does not modify the previous state', () => {
        expect(initialState).to.deep.equal({
          allProducts: [],
          allCategories: []
        })
      })
    })
  })
})
