const experss = require("express")
const bodyParser =  require("body-parser")
const cors = require("cors")
const router = require("./router");

const app = experss();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));
app.use("/wendigo",router)

let port =process.env.PORT || 3000; 
app.listen(port,function(){ console.log('Server started on port: ' + port); });
