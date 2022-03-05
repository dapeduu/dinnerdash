import { UserFactory } from 'Database/factories'
import test from 'japa'

test.group('Example', () => {
  test('assert sum', async (assert) => {
    const user = await UserFactory.create()

    console.log(user)
    assert.equal(2 + 2, 4)
  })
})
