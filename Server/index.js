import express from 'express'
import db from 'mysql'
import cros from 'cors'
import bodyParser from 'body-parser'

let app = express()

let connection = db.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "tibil"
})

app.use(cros())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

connection.connect((err)=> {
    if (err) throw err;
    console.log("Connected!");
});

app.get("/getStudent", (req, res) => {
    connection.query('SELECT * FROM student', (err, result) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    })
})

app.get("/studentChange", (req, res) => {
    connection.query(`SELECT * FROM student WHERE grade = ? AND medium = ? AND section = ?`, [req.query.grade, req.query.medium, req.query.section], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    })
})

app.get("/getByName",(req,res)=>{
    connection.query(`SELECT * FROM student WHERE name like ?`,[`%${req.query.name}%`],(err,result)=>{
        if(err){
            return res.status(500).json({error:err.message})
        }
        res.json(result)
    })
})

app.listen(4040, () => { console.log("Server is up in 4040"); });

