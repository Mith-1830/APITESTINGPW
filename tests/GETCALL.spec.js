import { test, expect } from '@playwright/test';

test('GET CALL', async ({ request }) => {

  const response = await request.get('https://jsonplaceholder.typicode.com/users/2')
  const body = await response.json()
  console.log(body)

  expect(response.status()).toBe(200)
  expect(response.statusText()).toBe('OK')

  expect(body.id).toBe(2)
  expect(body.name).toBe("Ervin Howell")
  expect(body.username).toBe("Antonette")
  expect(body.email).toBe("Shanna@melissa.tv")

})