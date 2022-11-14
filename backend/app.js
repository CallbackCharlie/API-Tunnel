const fs = require("fs");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

console.clear();
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));

let finishedMessage = `\x1b[36mMotixTech Backend \x1b[32mONLINE`

finishedMessage += '\n\n\x1b[36mAPI Endpoints:'
const api = fs.readdirSync("./endpoints/");
api.forEach(r => {
    if (r.endsWith('.js')) {
        const name = r.slice(0, -3);
        try {
            app.use(`/api/${name}`, require(`./endpoints/${name}`));
            finishedMessage += `\n\x1b[32m☑ Successfully loaded: /api/${name}`;
        } catch (e) {
            finishedMessage += `\n\x1b[31m☒ Couldn't load: /api/${name}`;
            console.log(finishedMessage);
            console.error(e);
        }
    }
});

app.listen(4000, () => {
    finishedMessage += "\n\n\x1b[36mDatabase:";
    const uri = "mongodb+srv://apitunnel:2yZ6ZhC5WpHTmPE@cluster0.l1wktoe.mongodb.net/primary?retryWrites=true&w=majority";
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        finishedMessage += "\n\x1b[32m☑ Connection established.";
        console.log(finishedMessage);
    });
});