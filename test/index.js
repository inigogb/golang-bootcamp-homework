const chai = require("chai");
const { expect } = chai;
const chaiHttp = require("chai-http");
const app = require("../src/app");
const { encodeString } = require("../src/utils/strings");
const params = encodeString(JSON.stringify({
    lat: 33.441792,
    lon: -94.037689
}));

chai.use(chaiHttp);

describe("GET Hello World from API endpoint", () => {
    it("Should GET Hello World from an API endpoint", () => {
        chai.request(app)
            .get("/hello-world")
            .end((error, response) => {
                console.log("RESPONSE from API", response.body);
                expect(response).to.have.status(200);
                expect(response.body).to.have.property("message");
                expect(response.body.message).to.be.equal("Hello, World");
            })
    });
});

describe("GET Weather data from GPS Coordinates",() => {
    it("Should GET weather data from GPS Coordinates", (done) => {
    chai.request(app)
        .get(`/check-weather/${params}`)
        .end((error, response) => {
            console.log("RESPONSE from API", response.body);
            expect(response).to.have.status(200);
            expect(response.body).to.have.property("weather");
            expect(response).to.be.json;
            done();
        });
    });
});