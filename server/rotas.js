
const router = require("express").Router();
const controller = require('./controller');

router.get('/', controller.home);
router.get('/login', controller.login);
router.get('/sessao', controller.sessao);
router.get('/sair', controller.deslogar);
router.get('/conta', verificarLogado(), controller.conta);

router.get('*', (req, res) => {
    res.render(process.cwd() + "/public/404.ejs", {code: 404, msg: 'Ops! Rota Inexistente.'});
});

function verificarLogado(){
	return async (req, res, next) => {

        if (!req || !res || !req.session.conta) {
            res.redirect('/login');
            return;
        }

        if (req.session.conta){
        	next();
        }
	}
}

module.exports = router;