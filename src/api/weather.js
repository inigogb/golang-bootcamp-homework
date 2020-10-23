const router = require("express").Router();
const controller = require("../controllers/weather");
const { b64Decode, encodeString } = require("../utils/strings");

router.get("/:data", async (request, response) => {
    try {
        let { data } = request.params;
        let weather = await controller.getCurrentWeather(b64Decode(data, "utf-8"));
        
        response.status(200).json({
            weather,
            message: `Weather Data fetched successfully!`
        });
    } catch(error) {
        response.status(500).json({
            error: true,
            message: error.message
        });
    }
});

module.exports = router;