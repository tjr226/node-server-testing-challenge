const db = require('../data/dbConfig.js');

const Users = require('./usersModel.js');

describe('users model', () => {
    beforeAll(async () => {
        await db('users').truncate()
    })

    describe('insert()', () => {
        it('should insert user into db', async () => {
            await Users.insert({ name: "Peter" });
            await Users.insert({ name: "Paul" });

            const users = await db('users');

            expect(users).toHaveLength(2);
        });
    });

    describe('remove()', () => {
        it('should delete first user', async () => {
            await Users.remove(1);
            const users = await db('users');
        
            expect(users).toHaveLength(1);
        });
    });
});