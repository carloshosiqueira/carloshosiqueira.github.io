const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    database: "prodCantina"
});

const teste = (req, res) => {
    res.send("Back-end respondendo ");
}

const create = (req, res) => {
    let nome = req.body.nome;
    let preco = req.body.preco;
    let quantidade = req.body.quantidade
    let query = `INSERT INTO produtos(nome, preco, quantidade) VALUE`;
    query += `("${nome}", "${preco}", "${quantidade}");`;
    con.query(query,(err, result) =>{
        if(err)
            res.redirect("http://localhost:5500/front/erro.html?erro=Provavelmente o Produto ja está cadastrado&err="+err.code);
        if(result)
            res.redirect("http://localhost:5500/front/index.html");
    });
}

const read = (req, res) => {
    con.query ("SELECT * FROM produtos ORDER BY id desc", (err, result)=>{
        if (err)
            res.json(err);
        else
            res.json(result);
    });
}

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", teste);
app.post("/produtos", create);
app.get("/produtos", read);

app.listen(3000, () => {
    console.log("Backend respondendo na porta 3000")
})