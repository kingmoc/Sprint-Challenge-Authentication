const request = require('supertest')
const server = require('./server');


describe('server', () => {

    // it('tests are running w/ DB_ENV set as "testing"', () => {
    //     // expect(process.env.DB_ENV === 'testing').toBe('testing')
    //     expect(process.env.DB_ENV).toBe('testing')
    // })

    describe('POST /REGISTER', () => {
        // it('Should Return 201 Status', () => {
        //     return request(server).post('/api/auth/register')
        //         .send({
        //             username: "Ara",
        //             password: "pass"
        //         })
        //         .set('Content-Type', 'application/json')
        //         .then(res => {
        //             expect(res.status).toBe(201)
        //         })
        // })

        // it('Username should be {Name}', () => {
        //     return request(server).post('/api/auth/register')
        //         .send({
        //             username: "Sylvia",
        //             password: "pass"
        //         })
        //         .set('Content-Type', 'application/json')
        //         .then(res => {
        //             expect(res.body.username).toBe('Sylvia')
        //         })
        // })
    })

    describe('POST /LOGIN', () => {
        // it('Should Return 200 Status', () => {
        //     return request(server).post('/api/auth/login')
        //         .send({
        //             username: "Ara",
        //             password: "pass"
        //         })
        //         .set('Content-Type', 'application/json')
        //         .then(res => {
        //             expect(res.status).toBe(200)
        //         })
        // })

        // it('Username should be {Name}', () => {
        //     return request(server).post('/api/auth/login')
        //         .send({
        //             username: "Ara",
        //             password: "pass"
        //         })
        //         .set('Content-Type', 'application/json')
        //         .then(res => {
        //             expect(res.body.message).toBe('Welcome Ara!')
        //         })
        // })
    })

    describe('GET /JOKES', () => {


        
    })










})