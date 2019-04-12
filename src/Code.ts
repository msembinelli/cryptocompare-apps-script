function CryptoCompare(from) {
    var defaultFrom = "BTC";
    from = from ? from : defaultFrom;
    var apiKey = PropertiesService.getScriptProperties().getProperty('apiKey');
    var to = "USD";
    var url = "https://min-api.cryptocompare.com/data/price?fsym=" + from + "&tsyms=" + to + "&api_key=" + apiKey;

    var response = UrlFetchApp.fetch(url);
    var text = response.getContentText();

    var json = JSON.parse(text);
    var price = json[to];

    return parseFloat(price);
}