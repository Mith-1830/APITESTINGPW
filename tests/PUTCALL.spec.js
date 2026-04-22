import {test , expect} from "@playwright/test";

test('PUT CALL', async ({ request }) => {

    const response = await request.put('https://jsonplaceholder.typicode.com/users/2',
        {
            data: {
                "name" : "mithunupdated",
                "username": "mithun_updated123",
                "email": "mithunupdated@123"

        }
        });

        const body = await response.json()
        console.log(body)
        console.log(expect(response.status()).toBe(200))
        expect(body.name).toBe("mithunupdated")
        expect(body.username).toBe("mithun_updated123")
        expect(body.email).toBe("mithunupdated@123")
        expect(body.id).toBe(2)

})