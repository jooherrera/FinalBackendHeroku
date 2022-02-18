import MongoDb from '../src/database/mongoDB'
import request, { agent } from 'supertest'
import ServerExpress from '../src/server'
import { IEnvironment } from '../src/types/types'
import { expect } from 'chai'
import { assert } from 'console'

const apiV1 = '/api/v1'
const URL = 'http://localhost:5000'

describe('API Auth test', () => {
  describe('GET /', () => {
    it('Should return status 200', async () => {
      await request(`${URL}`).get(`/`).expect('Content-Type', /text/).expect(200)
    })
  })

  describe(`POST ${apiV1}/login`, () => {
    it('Should return status 200', async () => {
      await request(`${URL}`).post(`${apiV1}/login`).expect(200)
    })
    it('Should return a json', async () => {
      const resp = await request(`${URL}`).post(`${apiV1}/login`).expect(200)
      expect(resp.body).to.have.property('token')
    })
  })
})
