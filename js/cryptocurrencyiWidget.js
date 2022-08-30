let hasCoin = 0, listCryptocurrency = [];
if(document.querySelector('#coin-is-here')){
    hasCoin = 1;
    listCryptocurrency = JSON.parse(document.querySelector('#coin-is-here').getAttribute('data'))
} else {
    listCryptocurrency = document.querySelector('h1.pTtl.aTtl.sml.itm').innerText.split('$');
    listCryptocurrency.shift();
    listCryptocurrency = (listCryptocurrency.map(symbol => symbol.split(' ')[0]))
    hasCoin = listCryptocurrency.length;
}
if(hasCoin){
    for (let symbol of listCryptocurrency) {
        document.querySelector('#cryptocurrencyPrices').innerHTML += '<style>.drK .nomics-ticker-widget-bg-light{background-color: #4d4e51} .nomics-ticker-widget-embedded:not(:last-child) {margin-bottom: 20px;} .nomics-ticker-widget-embedded.nomics-ticker-widget-size-responsive{max-width: 100%;}</style>';
        document.querySelector('#cryptocurrencyPrices').innerHTML += '<div class="nomics-ticker-widget" data-base="' +symbol+ '" data-quote="USD"/>' 
    } /* ' + ((localStorage.getItem('webMode') === 'drK') ? 'data-theme="dark"' : '') + ' */
    ldJs('https://widget.nomics.com/embed.js', "cryptocurrency-widget", !0, 'body');
}
