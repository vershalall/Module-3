//login with Post request

import { test, expect } from '@playwright/test';

test('login with a post request', async ({ request }) => {
    const postRequest = await request.post('https://thinking-tester-contact-list.herokuapp.com/users/login', {
        data:
        {
            "email": "versha.lall@landservices.com.au",
        "password": "versho07"
    }
        
    })
    console.log("Post response body --> " + JSON.stringify(await postRequest.json(), null, 2))

    const statusCode = await postRequest.status();

    console.log("Post response status code --> " + statusCode)

    await expect(statusCode).toEqual(200)

    console.log("Post response status code --> " + postRequest.ok())

    await expect(postRequest.ok()).toBeTruthy();


});



    



