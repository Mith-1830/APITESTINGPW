import { test, expect } from "@playwright/test";

test('DELETE CALL', async ({ request }) => {

  const response = await request.delete('https://jsonplaceholder.typicode.com/users/2')
  
  const body = await response.json()
  console.log(body) 

  expect(response.status()).toBe(200)
  expect(response.statusText()).toBe('OK')
  expect(body).toEqual({}) 

})