/*BOM (Browser Object Model)*/

/*BOM - > PROPRIEDADES E MÉTODOS RELATIVOS AO BROWSER.
*	innerWidth / innerHeight/outerWidth
	outerHeight
	opener
	pageXOffset / pageYOffset
	scrennX / screenY
*/
//retorna o tamanho interno do browser
innerHeight

//largura interna: área disponível interna do browser
innerWidth

//outerHeight:altura externa 
outerHeight

//outerWidth: largura externa
outerWidth

//
opener

//pageXOffset / pageYOffset - > retorna quanto 'scrolou' a página = barra de scroll

pageXOffset

pageYOffset

//scrennX / screenY - > posição da minha janela em relação ao monitor

scrennX

screenY

/*BOM - Objeto History
	esse objeto vai mostrar informações relativas ao histórico de navegação
History
	.length,
	.go(), ->avança na lista do histórico
	.back(),->volta
	.forward() ->vai pra frente

	assim podemos utilizar javascript para navegar no histórico
	*/

	history.length

	/*BOM - Objeto Location - dár informações da URL da página que
	estamos visualizando no browser

	location
		.hash,
		.host,
		.hostname
		.href
		.pathname
		.port
		.protocol
		.search

	MÉTODOS DO OBJETO LOCATION:

	location
		.assign(url), -> navega na url, recebe uma url por parâmetro
		.reload() -> recarrega a página (refrash)
		.replace(url)-> abre uma página mas o history.length não é alterado. Não altera
		o hisótico.

	*/

	/*BOM - Objeto Navigator -> dá dicas do navegador, browser, do S.O.
	tipos de arquivos aceitos, etc. Informações referentes ao navegador

	navigator
		.appName, ->
		.appVersion, ->
		.userAgent -> identificar de onde está chegando a requisição pra sua página
		.platform ->'WIN32'
		.cookieEnable
		.language
		.mimeTypes
		.plugins

	*/

	/*BOM - Objeto Screen -> diferença é as propriedades é referente a tela independente
	do browser

	screen
		.availableWidth / availableHeight
		.width / height

	*/

	/*BOM -  métodos

		alert(), confirm(), prompt(),
		open(),  -> window.open('http://google.com.br');
					window.open('http://google.com.br', 'janela', 'width=600, height=300');

		close(), -> só funciona se abrir com o método open (JS)

		scrollTo(x,y), -> scrola a página até um adetermina posição:
						scrollTo(0, 50); Vai pra posição exata/fixa

		scrollBy(dx, dy), -> acrescenta a scrolagem atual

		print() -> imprime a página.

		opener - > é uma referência ao objeto window de quem chamou essa página (q ele está)
	*/

	/*BOM - eventos
		Load,
		Error,
		Resize,
		Scroll
		Unload
		beforeunload*/