//During the test the env variable is set to test
process.env.NODE_ENV = 'Development';

let mongoose = require("mongoose");
let Item = require('../models/Item');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Items', () => {
    beforeEach((done) => { //Before each test we empty the database
        Item.deleteMany({}, (err) => {
            done();
        });
    });
    /*
     * Test the /GET route
     */
    describe('/GET items', () => {
        it('it should GET all the items', (done) => {
            chai.request(server)
                .get('/api/v1/items')
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.data.should.be.a('array');
                    res.body.data.length.should.be.eql(0);
                    done();
                });
        });
    });

    /*
 * Test the /POST route for create a item
 */
    describe('/POST item', () => {

        it('it should POST a item', (done) => {
            let item = {
                description: "Steel Mesh Sheets",
                quantity: 100
            }
            chai.request(server)
                .post('/api/v1/items')
                .send(item)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success').eql(true);
                    res.body.data.should.have.property('_id');
                    res.body.data.should.have.property('description');
                    res.body.data.should.have.property('quantity');
                    res.body.data.should.have.property('createdAt');
                    done();
                });
        });
    });

    /*
 * Test the /GET/:id route
 */
    describe('/GET/:id item', () => {
        it('it should GET a item by the given id', (done) => {
            let item = new Item({ description: "Clay Bricks", quantity: 100 });
            item.save((err, item) => {
                chai.request(server)
                    .get('/api/v1/items/' + item.id)
                    .send(item)
                    .end((err, res) => {
                        res.should.have.status(201);
                        res.body.should.be.a('object');
                        res.body.data.should.have.property('description').eql(item.description);;
                        res.body.data.should.have.property('quantity').eql(item.quantity);;
                        res.body.data.should.have.property('_id').eql(item.id);
                        done();
                    });
            });

        });
    });

    /*
 * Test the /PUT/:id route
 */
    describe('/PUT/:id item', () => {
        it('it should UPDATE a item given the id', (done) => {
            let item = new Item({ description: "Clay Bricks", quantity: 100 });
            item.save((err, item) => {
                chai.request(server)
                    .put('/api/v1/items/' + item.id)
                    .send({ description: "Red House Clay Bricks", quantity: 200 })
                    .end((err, res) => {
                        res.should.have.status(201);
                        res.body.should.be.a('object');
                        res.body.data.should.be.a('object');
                        res.body.should.have.property('success').eql(true);
                        res.body.data.should.have.property('description').eql("Red House Clay Bricks");
                        res.body.data.should.have.property('quantity').eql(200);

                        done();
                    });
            });
        });
    });

    /*
* Test the /DELETE/:id route
*/
    describe('/DELETE/:id item', () => {
        it('it should DELETE a item given the id', (done) => {
            let item = new Item({ description: "Clay Bricks", quantity: 100 });
            item.save((err, item) => {
                chai.request(server)
                    .delete('/api/v1/items/' + item.id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('success').eql(true);
                        res.body.should.have.property('msg').eql("Item Removed");
                        done();
                    });
            });
        });
    });

});