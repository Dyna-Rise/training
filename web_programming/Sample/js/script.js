console.log("ファイル連動中かチェック");

// 変数messageを宣言
let message = "";
// 「指名したid名を持っている要素情報を取得する命令」を起動
// この命令はdocumentと呼ばれるものが持っています
message = document.getElementById("welcomeMessage");
//指定した場所のテキストを決める
message.textContent = "こんにちは！";

//条件分岐
// もしも○○ならA、でなければB
// 処理が分岐する

// let hour = 16; //時間を記録する変数
let hour = new Date().getHours(); //時間を取得する命令

if (hour >= 18) { //変数hourが18以降ならこんばんわ！
    message.textContent = "こんばんわ！";
} else if (hour >= 10) { //でない時、13以降ならこんちには！
    message.textContent = "こんにちは！";
} else if (hour >= 4) { //でない時、4以降ならおはよう！
    message.textContent = "おはよう！";
}

//繰り返し処理

// idがstars1である要素(div)の情報を変数starEle1に覚えておいてもらう
let starEle1 = document.getElementById("stars1");

//forには3つの情報を指定
// ・カウント専用の変数を用意
// ・カウント専用の変数がどうなるまで繰り返しなのか条件を用意
// ・カウント専用の変数がどのようにカウントされるのかを決める
// ++ 指定した変数を1増やす インクリメント演算子
for (let i = 0; i < 3; i++) {
    //spanというタグを生成し、そのテキストの中身は☆とする
    let addCnt = document.createElement("span");
    addCnt.textContent = "☆";

    //特定しておいた場所starEle1に生成したspanを足す
    starEle1.appendChild(addCnt);
}

//数の大きい・小さいの比較の記号
// a < 5 ⇒ aは5より小さい（未満）
// a <= 5 ⇒ aは5以下
// a > 5 ⇒ aは5より大きい
// a >= 5 ⇒ aは以上
// a == 5 ⇒ aは5と同じ
// a === 5 ⇒ aは5と同じ
// a != 5 ⇒ aは5とは異なる

// ※「=」は代入演算子 A = B ：Bの結果をAに入れる