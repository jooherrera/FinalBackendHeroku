import { doesNotMatch } from 'assert'
import { expect, assert } from 'chai'
import MongoDb from '../src/database/mongoDB'

const URI =
  'mongodb://test:test@192.168.1.102:27018/test?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'

describe('DataBase connection.', () => {
  it('should connect to database', async () => {
    assert.isTrue(await new MongoDb(URI).connect())
  })
  it('should fail if DATABASE is empty', async () => {
    expect(() => {
      const db = new MongoDb()
    }).to.throw('Falta la URI para conectar a mongo')
  })
})
