var path = require("path");

module.exports = function (survey) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    survey.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/app/public/home.html"))
    })
    survey.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/app/public/survey.html"))
    })


};

