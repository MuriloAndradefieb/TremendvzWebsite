var express = require("express");
var router = express.Router();


router.get("/", function (req, res) {
    res.render("pages/index", {titulo:"Página Inicial"})
});

router.get("/ep", function (req, res) {
    res.render("pages/ep", {titulo:"Pagina de novo lançamento"})
});

router.get("/galeria", function (req, res) {
    res.render("/pages/galeria", {titulo:"Arquivos e fotos da banda"})
});

router.get("/perfil", function (req, res) {
    res.render("pages/perfil", {titulo:"Perfil do Usuario"})
});

router.get("/login", function (req, res) {
    res.render("pages/login", {titulo:"Login"})
});

router.get("/luthbox", function (req, res) {
    res.render("pages/luthbox", {titulo:"Luthbox"})
});

router.get("/pagamento-luth", function (req, res) {
    res.render("pages/pagamento-luth", {titulo:"Pagamento da Luthbox"})
});

router.get("/seletivas", function (req, res) {
    res.render("pages/seletivas", {titulo:"Seletivas"})
});

router.get("/luthbox-seguros", function (req, res) {
    res.render("pages/luthbox-seguros", {titulo:"Serviço Luthbox"})
});

router.get("/sobre", function (req, res) {
    res.render("pages/sobre", {titulo:"Sobre nós"})
});

router.get("/cadastro", function (req, res) {
    res.render("pages/cadastro", {titulo:"Cadastro para login"})
});
router.get("/pagamento-mensalidade", function (req, res) {
    res.render("pages/pagamento-mensalidade", {titulo:"Pagamento Mensalidade"})
});
router.get("/regulamento", function (req, res) {
    res.render("pages/regulamento", {titulo:"Regulamento"})
});
router.get("/pagamento", function (req, res) {
    res.render("pages/pagamento", {titulo:"Pagamento"})
});
router.get("/sair", function (req, res) {
    res.render("pages/sair", {titulo:"Sair da conta"})
});
router.get("/mensalidade", function (req, res) {
    res.render("pages/mensalidade", {titulo:"Sair da conta"})
});

module.exports = router;