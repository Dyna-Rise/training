document.addEventListener('DOMContentLoaded', function() {
    // --- if文の例：時間帯によってメッセージを変える ---
    const welcomeMessageElement = document.getElementById('welcomeMessage');
    const currentHour = 14;// 現在の時間を取得
    // const currentHour = new Date().getHours(); //時間取得を自動化の場合

    let message = '';
    if (currentHour >= 5 && currentHour < 12) {
        message = 'おはようございます！今日も一緒に楽しく学びましょう！';
    } else if (currentHour >= 12 && currentHour < 18) {
        message = 'こんにちは！午後の学習も頑張りましょう！';
    } else {
        message = 'こんばんは！今日もお疲れ様でした！';
    }
    welcomeMessageElement.textContent = message;
});

document.addEventListener('DOMContentLoaded', function() {
    // ... (以前のif文のコード) ...

    // --- forループの例：各能力の重要度を星で表示 ---
    const importanceDivs = document.querySelectorAll('.importance-stars');

    importanceDivs.forEach(div => {
        const importance = parseInt(div.dataset.importance, 10); // data-importance属性の値を取得

        // forループを使って星を動的に追加
        for (let i = 0; i < importance; i++) {
            const star = document.createElement('span');
            star.textContent = '⭐'; // 星の絵文字
            star.style.color = 'gold'; // 星の色
            div.appendChild(star);
        }
    });

});