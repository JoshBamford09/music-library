const { expect } = require('chai')
const request = require('supertest')
const db = require('../src/db/index')
const app = require('../src/app')

describe('create artist', () => {
  describe('/artist', () => {
    describe('POST', () => {
      it('creates a new artist in the database', async () => {
        const { status, body } = await request(app).post('/artists').send({
          name: 'J Cole',
          genre: 'rap'
        })

        expect(status).to.equal(201)
        expect(body.name).to.equal('J Cole')
        expect(body.genre).to.equal('rap')

        const { rows: [artistData] } = await db.query(
            `SELECT * FROM Artists WHERE id = ${body.id}`
        )
        expect(artistData.name).to.equal('J Cole')
        expect(artistData.genre).to.equal('rap')
      })
    })
  })
})
