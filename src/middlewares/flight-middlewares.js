const validateCreateFlight = (req, res, next) => {
    if (
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.departureTime ||
        !req.body.arrivalTime ||
        !req.body.price
    ) {
        return res.status(400).json(
            {
                data: {},
                success: false,
                message: "Invalid request body for create flight",
                error: "Missing mandatory properties for create flight"
            })
    }

    next();
}

module.exports = {
    validateCreateFlight
}