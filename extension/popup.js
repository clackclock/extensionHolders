console.log("it works");

let article = document.querySelector("article");

if(article){
    let text = article.textContent;
    let wordMatch = /[^\s]+/g;
    let words = text.matchAll(wordMatch);

    let wordCount = [...words].length;
    let readingTime = Math.round(wordCount / 200);
    let badge = document.createElement("p");

    badge.textContent = "⏰: " + readingTime + " minute read";
    let firstH1 = article.querySelector("h1");
    if(firstH1){
        firstH1.append(badge);
    }else{
        let body = document.body;
        body.prepend(badge);
    }

}

// $(document).ready(function(){
//     $("body").css("background-color", "antiquewhite");
// })