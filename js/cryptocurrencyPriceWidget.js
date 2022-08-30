const listCryptocurrency = document.querySelector('h1.pTtl.aTtl.sml.itm').innerText.split('$');
listCryptocurrency.shift();
if(listCryptocurrency.length){
    document.querySelector('#cryptocurrencyPrices').innerHTML += '<style>.drK .nomics-ticker-widget-bg-light{background-color: #4d4e51} .nomics-ticker-widget-embedded:not(:last-child) {margin-bottom: 20px;} .nomics-ticker-widget-embedded.nomics-ticker-widget-size-responsive{max-width: 100%;}</style>';
    for (let symbol of (listCryptocurrency.map(symbol => symbol.split(' ')[0]))) {
        document.querySelector('#cryptocurrencyPrices').innerHTML += '<div class="nomics-ticker-widget" data-base="' +symbol+ '" data-quote="USD"/>' }
        /* ' + ((localStorage.getItem('webMode') === 'drK') ? 'data-theme="dark"' : '') + ' */
}
ldJs('https://widget.nomics.com/embed.js', "cryptocurrency-widget", !0, 'body');
