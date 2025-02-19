import express from "express";


const app = express();
const port = 3000;


app.use(express.static('public'));


app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})


app.get("/register",(req,res) => {
    res.render("pages/register.ejs");
});


app.get("/login", (req,res) => {
    res.render("pages/login.ejs");
})