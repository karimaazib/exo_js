let sentence = prompt("Bienvenue ! discute avec notre bot.");

if (sentence[sentence.length - 1] == "?") {
    console.log("Ouais ouais...");
}
else if (sentence.toLowerCase().includes('fortnite')) {
    console.log("On s'fait une partie soum-soum ?");
}

else if (sentence === sentence.toUpperCase()) {
    console.log("Pwa, calme-toi...");
}
else if (sentence=== " ") {
    console.log("T'es en PLS ?");
}

else {
    console.log("Balek");
}





/*
Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
Pour tout autre phrase que tu lui envoies, le bot répond "balek."*/