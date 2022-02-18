import { expect, assert } from 'chai'
import GenerateToken from '../src/helpers/generateToken'

describe('jwt functionality', () => {
  describe('Token Generator', () => {
    const data = {
      nombre: 'jose',
    }
    const secretKey = 'secretKey'
    const options = { expiresIn: '1m' }
    const token = GenerateToken.signToken(data, secretKey, options)
    console.log(token)
    it('Should be a token', () => {
      assert.isString(token)
    })
    it('Should be a valid token [valid secret key]', () => {
      const info = GenerateToken.verifyToken(token, secretKey)
      assert.containsAllKeys(info, data)
    })
    it('Should throw an error [invalid secret key]', () => {
      assert.Throw(() => {
        GenerateToken.verifyToken(token, '312123')
      })
    })
  })

  describe('Verify header', () => {
    const req = {
      headers: {
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o',
      },
    }
    it('Should check if an authorization header exists', () => {
      assert.isTrue(GenerateToken.hasAuthHeader(req))
    })

    it('Should return header content', () => {
      assert.isString(GenerateToken.splitHeader(req))
    })
  })
})
