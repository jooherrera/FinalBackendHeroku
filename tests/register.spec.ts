import { expect, assert } from 'chai'
import { isRegistered, isSomeEmpty } from '../src/helpers/helper'
import UserStoreMongo from '../src/components/user/dao/user.store.mongo'

import MongoDb from '../src/database/mongoDB'

const URI =
  'mongodb://test:test@192.168.0.70:27018/eshop?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false'

describe('Register new user functionality', () => {
  before(async () => {
    await new MongoDb(URI).connect()
  })

  const user = {
    email: 'jooherrera4@gmail.com',
    password: '1234',
  }
  it('Should return false, no empty body', () => {
    assert.isFalse(isSomeEmpty(user.email, user.password))
  })
  it('Should return true, empty body', () => {
    const email = 'email@email.com'
    const password = ''
    assert.isTrue(isSomeEmpty(email, password))
  })
  it('Should return false, email registered', async () => {
    const exitEmail = await UserStoreMongo.isEmailRegistered('dsasdsd')
    assert.isFalse(exitEmail)
  })
  // it('Should return true, email registered', async () => {
  //   const exitEmail = await isRegistered(user.email, UserStoreMongo)
  //   assert.isTrue(exitEmail)
  // })
})
