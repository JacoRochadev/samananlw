//servidor
const express = require('express')
const server = express()

const { 
    pageLanding, 
    pageStudy, 
    pageGiveClasses, 
    saveClasses } = require('./pages')


//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})
server
//
.use(express.urlencoded({ extended: true}))
// configure static files (css, scripts, images)
//configurar arquivos estáticos(css, scripts, imagens)
.use(express.static("public"))
// application routes
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

.listen(5500)