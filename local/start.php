<?php
//echo 'echoで出力';
//var_dump( 'var_dumpで出力' );
//var_dump( 1 );

$a = 3;
$b = 5;
$sum = $a + $b;
//echo $sum;

$message = "こんにちは";
//echo $message;

//入力されたデータ
$email = htmlspecialchars( $_POST["email"] );
$password = $_POST["password"];

/* ここからデータベース関連 */
$HOST = "localhost";//ホスト名
$DBNAME = "login_prac";//データベース名
$USER = "root";//データベース接続の為のユーザー名
$PASS = "";//データベース接続の為のパスワード
//接続の為のオブジェクト生成
$pdo = new pdo('mysql:host='.$HOST.';dbname='.$DBNAME.';',$USER,$PASS);

//sql_str = "select * from account where 1";
$sql_str = "select * from account where email = '".$email."'";
//SELECT "検索したいカラム名" from "検索をかけるテーブル名" where "条件"
//select -> 検索
//insert -> 挿入 insert "テーブル名" ("カラム1","カラム2") values("カラム1に入れる値","カラム2に入れる値");
//update -> 更新 update set "テーブル名" 更新したいカラム1 = カラム1に入れる値, 更新したいカラム2 = カラム2に入れる値 where 条件

// SQL文をセット
$stmt = $pdo->prepare($sql_str);
// SQL文を実行し、変数$db_dataに結果を代入
$stmt->execute();
$db_data = $stmt -> fetchAll();
/* ここまでデータベース関連 */
 
//データベースにあるデータ
for( $i = 0; $i < count( $db_data ); $i++ ){
    echo 'メールアドレス：'.$db_data[$i]["email"].", パスワード：".$db_data[$i]["password"];
    echo '</br>';
}

// SQL改良版
if( count( $db_data ) < 1 ){
    echo 'アカウントが見つかりません';
}else{
    echo 'ログインできました</br>';
     $last_name = $db_data[0]["last_name"];
     $first_name = $db_data[0]["first_name"];
     echo $last_name.' '.$first_name.'さん、こんにちは';
}






$flag = false;//ログイン可能かどうか
$last_name = "";
$first_name = "";
for( $i = 0; $i < count( $db_data ); $i++ ){
    if( $db_data[$i]["email"] == $email ){
        if( $db_data[$i]["password"] == $password ){
            //echo 'ログインできました';
            $last_name = $db_data[$i]["last_name"];
            $first_name = $db_data[$i]["first_name"];
            $flag = true;
		}else{
            //echo 'パスワードが異なります';
		}
        break;
	}
}

if( $flag ){
    echo 'ログインできました</br>';
    echo $last_name.' '.$first_name.'さん、こんにちは';
}else{
    echo '入力されたメールアドレスで登録されていない、またはパスワードが異なります';
}

echo '
<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>アカウント登録情報</title>
</head>
<body>
    <h1>アカウント登録情報</h1>
    <form action="update_account.php" method="POST">
        <div>
            <label>名前(性)</label>
            <input name="last_name" value="'.$last_name.'">
        </div>
        <div>
            <label>名前(名)</label>
            <input name="first_name" value="'.$first_name.'">
        </div>
        <div>
            <button>送信</button>
        </div>
    </form>
</body>
</html>
';

?>
