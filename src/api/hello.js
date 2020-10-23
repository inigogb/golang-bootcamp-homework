const route = require("express").Router();

route.get("/hello-world", (request, response) => {
    response.status(200).json({
        status: "success",
        message: "Hello, World"
    });
});

module.exports = route;