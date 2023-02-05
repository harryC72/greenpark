const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;

describe("Product API", () => {
	const app = require("../index.js");

	describe("GET /products", () => {
		it("should return all products", (done) => {
			request(app)
				.get("/products")
				.end((err, res) => {
					expect(res.statusCode).to.equal(200);
					expect(res.body).to.be.an("array");
					expect(res.body).to.have.lengthOf(3);
					done();
				});
		});
	});

	describe("PATCH /products/:id", () => {
		it("should update a product", (done) => {
			const id = 1;
			const updatedProduct = {
				active: false,
				linked: true,
				selectedColor: "red",
			};

			request(app)
				.patch(`/products/${id}`)
				.send(updatedProduct)
				.end((err, res) => {
					expect(res.statusCode).to.equal(200);
					expect(res.text).to.equal(`Product with id ${id} has been updated.`);
					done();
				});
		});

		it("should return 404 if product not found", (done) => {
			const id = 4;
			const updatedProduct = {
				active: false,
				linked: true,
				selectedColor: "red",
			};

			request(app)
				.patch(`/products/${id}`)
				.send(updatedProduct)
				.end((err, res) => {
					expect(res.statusCode).to.equal(404);
					expect(res.text).to.equal(`Product with id ${id} not found.`);
					done();
				});
		});
	});
});
