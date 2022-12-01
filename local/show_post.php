<?php
$email = $_POST["email"];
$password = $_POST["password"];

//echo "入力されたメールアドレス：".$email;
//echo "入力されたパスワード：".$password;

if( $email == "tani1109ryo@gmail.com" ){
	echo '会員です';
}else{
	echo '会員ではありません。';
}
?>