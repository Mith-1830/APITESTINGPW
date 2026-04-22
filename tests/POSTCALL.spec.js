import { test , expect } from "@playwright/test";

test('POST CALL', async ({ request }) => {

    const response = await request.post('https://jsonplaceholder.typicode.com/users',
        {
            data: {
                "name" : "mithun",
                "username": "mithun123",
                "email": "mithun@gmail.com"
        }
        })

        const body = await response.json()
        console.log(body)

       
        console.log(expect(response.status()).toBe(201))
        expect(body.name).toBe("mithun")
        expect(body.username).toBe("mithun123")
        expect(body.email).toBe("mithun@gmail.com")
        expect(body.id).toBeDefined()

})