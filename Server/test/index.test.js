const chai = require("chai");
const request = require("supertest");
const app = require("../index.js");

const expect = chai.expect;

describe("Server", () => {
	describe("GET /products", () => {
		it("responds with an array of products", (done) => {
			request(app)
				.get("/products")
				.expect(200)
				.end((err, res) => {
					if (err) return done(err);
					expect(res.body).to.be.an("array");
					done();
				});
		});
	});

	describe("POST /products", () => {
		it("updates a product given an id", (done) => {
			const id = 1;
			const updatedProduct = {
				active: false,
				linked: true,
				selectedColor: "red",
			};

			request(app)
				.post(`/products?id=${id}`)
				.send(updatedProduct)
				.expect(200)
				.end((err, res) => {
					if (err) return done(err);
					expect(res.text).to.be.equal(
						`Product with id ${id} has been updated.`
					);
					done();
				});
		});

		it("responds with 404 if product with given id is not found", (done) => {
			const id = 10;
			const updatedProduct = {
				active: false,
				linked: true,
				selectedColor: "red",
			};

			request(app)
				.post(`/products?id=${id}`)
				.send(updatedProduct)
				.expect(404)
				.end((err, res) => {
					if (err) return done(err);
					expect(res.text).to.be.equal(`Product with id ${id} not found.`);
					done();
				});
		});
	});
});
