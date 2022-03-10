import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Welcome', () => {
  test('Ensure hello world appears on initial route', async (assert) => {
    const { body } = await supertest(BASE_URL).get('/').expect(200)

    assert.hasAllKeys(body, ['hello'])
    assert.equal(body.hello, 'world')
  })
})
