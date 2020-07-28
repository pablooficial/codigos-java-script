//pagina que nao quer exibir
exibeRelogio = false;
exibeFooter = false;


///chama os parametros que é para exibir e depois navegar
consultarLocais($event) {
    const parametros = {
        queryParams: {
        exibeRelogio: true,
        exibeFooter:true,
    }
}
this.router.navigate(['local-navegar'], parametros);
}
