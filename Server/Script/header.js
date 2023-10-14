// header.js

let header = document.querySelector("header"); // ヘッダー要素を取得

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        // スクロールが20px以上の場合、ヘッダーを固定する
        header.style.position = "fixed";
        header.style.top = "0";
    } else {
        // スクロールが20px未満の場合、ヘッダーの固定を解除する
        header.style.position = "static";
    }
});
