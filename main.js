const port = 9090,
    express = require("express"),
    app = express();
/*app.get("/", (req, res) => {
    res.send("Hello, Universe!");
})
app.post("/contact", (req, res) => {
    res.send("Contact information submitted successfully.");
})*/
const layouts = require("express-ejs-layouts");
app.set("view engine", "ejs");
app.use(layouts);
app.use(express.static("public"));
//const errorcontroller = require("./controllers/errorcontroller");
//app.use(errorcontroller.logErrors);
//app.use(errorcontroller.respondNoResourceFound);
//app.use(errorcontroller.respondInternalError);
/*app.get("/items/:vegetable", (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
})*/
app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
})
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
})
const homeController = require("./controllers/homeController");
//app.get("/items/:vegetable", homeController.sendReqParam);
app.get("/name/:myName", homeController.respondWithName);
app.listen(port, () => {
    console.log(`The Express.js server has started and is listening
on port number: ${port}`);
});