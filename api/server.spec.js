const request = require('supertest');
const server = require('./server.js');

describe('server', () => {
    it('db environment set to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('GET /', () => {
        it('should return 200 OK', () => {
            return request(server)
            .get('/')
            .expect(200)
        });
    });

    describe('GET /users', () => {
        it('users should be json', () => {
            return request(server)
            .get('/users')
            .then(res => {
                expect(res.type).toMatch(/json/);
            })
        });
    });
});