
function home(req, res) {
    res.render(process.cwd() + "/public/home.ejs", {titulo: "Home"});
}

function conta(req, res) {
    res.render(process.cwd() + "/public/conta.ejs", {titulo: "Conta", conta: req.session});
}

function login(req, res) {
    res.render(process.cwd() + "/public/login.ejs", {titulo: "Login"});
}

function deslogar(req, res) {
    let nome = req.session.conta;
    req.session = null;
    res.send({code:200, msg: `${nome} Deslogou com sucesso`, logado: false});
}

function sessao(req, res) {
    req.session.conta = "joao";
    res.send({code:200,msg: "Voce foi logado artificalmente como joao", logado: true});
}

module.exports = {
    home,
    conta,
    login,
    sessao,
    deslogar
}