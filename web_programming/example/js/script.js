console.log("script.jsが読み込まれました。");

// 問題1: 変数を使って図形を描こう
function executeExercise1() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    const resultElement = document.getElementById('result1');

    // Canvasをクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    resultElement.textContent = "";

    // ここからコードを書いてみましょう！
    // ------------------------------------------------------------------

    // 1. 四角形の色を変数で宣言してみよう
    //    例: let fillColor = "red";
    let fillColor = ; // ← ここに好きな色を設定してください

    // 2. 四角形のX座標、Y座標、幅、高さを変数で宣言してみよう
    //    例: let rectX = 50;
    let rectX = ;    // ← ここにX座標を設定してください
    let rectY = ;     // ← ここにY座標を設定してください
    let rectWidth = ; // ← ここに幅を設定してください
    let rectHeight = ; // ← ここに高さを設定してください

    // 3. 宣言した変数を使って、四角形を描画してみよう
    ctx.fillStyle = fillColor;
    ctx.fillRect(rectX, rectY, rectWidth, rectHeight);

    // ------------------------------------------------------------------
    // ここまで

    resultElement.textContent = "問題1が実行されました！変数を使って色や位置を変更してみよう！";
}

// 問題2: 条件分岐で色を変えよう
function executeExercise2() {
    const canvas = document.getElementById('canvas2');
    const ctx = canvas.getContext('2d');
    const resultElement = document.getElementById('result2');

    // Canvasをクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    resultElement.textContent = "";

    // 1. 円の中心のX座標とY座標、半径を変数で決めよう
    let circleX = Math.random() * canvas.width; // 0からCanvasの幅までのランダムなX座標
    let circleY = canvas.height / 2;
    let radius = 40;

    
    // ここからコードを書いてみましょう！
    // ------------------------------------------------------------------

    // 2. もしも円のX座標がCanvasの中心より左なら色を"red"に、そうでなければ"green"に設定してみよう
    let circleColor;
    if (circleX < canvas.width / 2) { // ← ここに条件を書いてみよう
        ; // ← 条件が真の時に実行されるコード
    }  {
        ; // ← 条件が偽の時に実行されるコード
    }

    // ------------------------------------------------------------------
    // ここまで

    // 3. 決めた色で円を描画してみよう
    ctx.beginPath();
    ctx.arc(circleX, circleY, radius, 0, Math.PI * 2);
    ctx.fillStyle = circleColor;
    ctx.fill();

    resultElement.textContent = `問題2が実行されました！円のX座標は${circleX.toFixed(0)}、色は${circleColor}です。`;
}

// 問題3: 繰り返しで星を描こう
function executeExercise3() {
    const canvas = document.getElementById('canvas3');
    const ctx = canvas.getContext('2d');
    const resultElement = document.getElementById('result3');

    // Canvasをクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    resultElement.textContent = "";

    // ここからコードを書いてみましょう！
    // ------------------------------------------------------------------

    // 1. 何回繰り返すかを決める変数を宣言してみよう
    let numberOfStars = ; // ← ここに星の数を設定してください

    // 2. for文を使って、指定した回数だけ星（小さな四角形や円）を描いてみよう
    for () { // ← ここを完成させてみよう
        // 星のランダムな位置とサイズ、色を変数で決める
        let starX = Math.random() * canvas.width;
        let starY = Math.random() * canvas.height;
        let starSize = Math.random() * 10 + 5; // 5pxから15pxのランダムなサイズ
        let starColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`; // ランダムな色

        // 星を描画（ここでは小さな四角形を星に見立てる）
        ctx.fillStyle = starColor;
        ctx.fillRect(starX, starY, starSize, starSize);
    }

    // ------------------------------------------------------------------
    // ここまで

    resultElement.textContent = `問題3が実行されました！${numberOfStars}個の星が描かれました。`;
}

// ページが読み込まれたときに各問題の初期表示を行う
document.addEventListener('DOMContentLoaded', () => {
    executeExercise1();
    executeExercise2();
    executeExercise3();
});