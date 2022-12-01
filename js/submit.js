//
//登録機能
//

var str1,str2,str3,str4,str5,str6,str7,str8;
function submit_input() {
    str1 = document.getElementById("submit_kind").value;
    console.log(str1);
    str2 = document.getElementById("submit_place").value;
    console.log(str2);
    str3 = document.getElementById("submit_user").value;
    console.log(str3);
    str4 = document.getElementById("submit_admin").value;
    console.log(str4);
    str5 = document.getElementById("submit_name").value;
    console.log(str5);
    str6 = document.getElementById("submit_format").value;
    console.log(str6);
    str7 = document.getElementById("submit_number").value;
    console.log(str7);
    str8 = document.getElementById("submit_images").value;
    console.log(str8);

    message_out.innerHTML = "下記の内容で登録しますか？" + "<br>" + "学科 : "+ str1
                                                + "<br>" + "場所 : " + str2
                                                + "<br>" + "所有者 : " + str3
                                                + "<br>" + "管理者 : " + str4
                                                + "<br>" + "資産名 : " + str5
                                                + "<br>" + "形式 : " + str6
                                                + "<br>" + "個数 : " + str7
                                                + "<br>" + "画像ファイル（仮） : " + str8
    
};

function upload_input(){
    message.innerHTML = "登録しました。"
    data.push({
        "id":"0",
        "資産番号": "00000-99999999-00000",
        "所属":str1,
        "資産名":str5,
        "場所": str2,
        "担当":str3,
        "管理者":str4,
        "形式":str6,
        "個数":str7,
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    });
}