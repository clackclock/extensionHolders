console.log("it works");

let article = document.querySelector("article");
let bb = document.body.style;

bb.backgroundColor = "antiquewhite";
// bb.backgroundImage = "url('https://cdn.pixabay.com/photo/2014/11/18/11/09/paper-535983_1280.png')";
bb.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f85e44c2-48f1-476d-859d-ecbf33a71cfd/d23unvt-6a35822d-7e43-4599-8f2d-a0296e10acae.jpg/v1/fill/w_600,h_826,q_75,strp/old_paper_texture_ii_by_haunted_medea_d23unvt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODI2IiwicGF0aCI6IlwvZlwvZjg1ZTQ0YzItNDhmMS00NzZkLTg1OWQtZWNiZjMzYTcxY2ZkXC9kMjN1bnZ0LTZhMzU4MjJkLTdlNDMtNDU5OS04ZjJkLWEwMjk2ZTEwYWNhZS5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.4gctlQCEJB_8OnaoWM5IOVf8S3JTz2SjrXEvB9qPbzU')";
// bb.backgroundRepeat = "no-repeat";
bb.backgroundSize = "100%";
bb.backgroundPosition = "center";

// document.body.style.fontFamily = "Jacquarda Bastarda 9, serif";
//document.getElementsByTagNameNS("h1").style.fontFamily = "Jacquarda Bastarda 9, serif";

let t = document.querySelector("article");
if(t){
    let tex = t.textContent;
    let wordMatch = /[^\s]+/g;
    let words = text.matchAll(wordMatch);

    let wS = words.style.fontFamily;
    wS = "Jacquarda Bastarda 9, serif";
}



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

$(document).ready(function(){
    $("body").css("background-color", "antiquewhite");
    $("h1").css("fontFamily","Jacquarda Bastarda 9, serif" );
})