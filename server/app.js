    const express = require("express")
    const cors = require("cors")
    const cookieParser = require("cookie-parser")
    const bodyParser = require('body-parser');

    const app = express()

    app.use(cors({
        origin: 'https://news-application-3rqa.vercel.app',
        credentials: true
    }));

    app.use(cookieParser())
    app.use(bodyParser.json());

    app.use(express.json())
    app.use(express.urlencoded({extended:true}))

    app.use("/" , require("./routes/user.route.js"))
    app.use("/" , require("./routes/article.route.js"))
    app.use("/" , require("./routes/comment.route.js"))
    
    module.exports = app;
