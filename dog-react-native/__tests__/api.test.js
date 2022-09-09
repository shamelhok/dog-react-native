const test = require('firebase-functions-test')();

test.mockConfig({ stripe: { key: '23wr42ewr34' }});

describe('getUserData',()=>{
    test('should ', async () => {
        const data= await getUserData()
        expect(data).toEqual({})
    });
})