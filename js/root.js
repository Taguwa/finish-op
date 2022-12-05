//
//データの管理（すべてのHTMLでincludeして）
//

message.innerHTML = "データを取得してください";
//select2 config
$(document).ready(function () {
    $('.select').select2({
      width: '350px',
      placeholder: ' ',
      allowClear: true,
      language: 'ja',
      tags: true
    });
  });
//
//SQL関連
//
function connect_SQL(){
 // requireの設定
 const mysql = require('mysql');

 // MySQLとのコネクションの作成
 const connection = mysql.createConnection({
     host : 'localhost',
     user : 'root',
     database: 'data'
 });
 
 // 接続
 connection.connect();
 
 // userdataの取得
 connection.query('SELECT * from userdata;', function (err, rows, fields) {
     if (err) { console.log('err: ' + err); } 
 
     console.log('name: ' + rows[0].name);
     console.log('id: ' + rows[0].id);
 
 });
 
 // userdataのカラムを取得
 connection.query('SHOW COLUMNS FROM userdata;', function (err, rows, fields) {
     if (err) { console.log('err: ' + err); }
 
     console.log(rows[0].Field);
     console.log(rows[1].Field);
 });
 
 // 接続終了
 connection.end();
};

//main data
connection.query('SELECT * from data;', function (err, rows, fields) {
    if (err) { console.log('err: ' + err); }

    console.log(rows[0].Field);
    console.log(rows[1].Field);
});

var data = [
    {
        "id": "1",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "405",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "2",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "403",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "3",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "405",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "4",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "401",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "5",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "409",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "6",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "409",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "7",
        "資産番号": "00000-99999999-00000",
        "所属": "CS",
        "資産名": "PC",
        "場所": "408",
        "担当": "uchida",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "8",
        "資産番号": "00000-99999999-00000",
        "所属": "AD",
        "資産名": "PC",
        "場所": "402",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "9",
        "資産番号": "00000-99999999-00000",
        "所属": "EE",
        "資産名": "PC",
        "場所": "409",
        "担当": "ooshima",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    },
    {
        "id": "10",
        "資産番号": "00000-99999999-00000",
        "所属": "ME",
        "資産名": "PC",
        "場所": "405",
        "担当": "utsugi",
        "管理者": "shimakawa",
        "形式": "macbookpro",
        "個数": "1",
        "識別番号": "1",
        "取得日時": "2022/07/12",
        "編集日時": "2022/07/13"
    }]

function data_upload(){

};

//更新 table
function refresh() {

    console.log(data);
    let tbody = document.querySelector('#csv_data_table tbody');
    tbody.innerHTML = "";

    //　CSVの内容を表示
    let tbody_html = "";
    for (item of data) {
        tbody_html += `<tr>
      <td>${item.id}</td>
      <td>${item.資産番号}</td>
      <td>${item.所属}</td>
      <td>${item.資産名}</td>
      <td>${item.場所}</td>
      <td>${item.担当}</td>
      <td>${item.管理者}</td>
      <td>${item.形式}</td>
      <td>${item.個数}</td>
      <td>${item.識別番号}</td>
      <td>${item.取得日時}</td>
      <td>${item.編集日時}</td>
    </tr>
    `
    }
    tbody.innerHTML = tbody_html;
    console.log(tbody_html);
    message.innerHTML = data.length + "件のデータがあります。"
};

//絞り込み検索
function location_search() {
    const str = document.getElementById("location1").value;

    let tbody = document.querySelector('#csv_data_table tbody');
    tbody.innerHTML = "";

    var data_03 = data.filter(function (data) {
        return data.場所 == str;
    })
    console.log(data_03);
    //　CSVの内容を表示
    let tbody_html = "";
    for (item of data_03) {
        tbody_html += `<tr>
      <td>${item.id}</td>
      <td>${item.資産番号}</td>
      <td>${item.所属}</td>
      <td>${item.資産名}</td>
      <td>${item.場所}</td>
      <td>${item.担当}</td>
      <td>${item.管理者}</td>
      <td>${item.形式}</td>
      <td>${item.個数}</td>
      <td>${item.識別番号}</td>
      <td>${item.取得日時}</td>
      <td>${item.編集日時}</td>
    </tr>
    `
    }
    tbody.innerHTML = tbody_html;
    console.log(tbody_html);
    message.innerHTML = "部屋" + str + "には" + data_03.length + "件の資産があります。"
};

function kind_search() {
    const str = document.getElementById("kind").value;

    let tbody = document.querySelector('#csv_data_table tbody');
    tbody.innerHTML = "";

    var data_03 = data.filter(function (data) {
        return data.所属 == str;
    })
    console.log(data_03);
    //　CSVの内容を表示
    let tbody_html = "";
    for (item of data_03) {
        tbody_html += `<tr>
      <td>${item.id}</td>
      <td>${item.資産番号}</td>
      <td>${item.所属}</td>
      <td>${item.資産名}</td>
      <td>${item.場所}</td>
      <td>${item.担当}</td>
      <td>${item.管理者}</td>
      <td>${item.形式}</td>
      <td>${item.個数}</td>
      <td>${item.識別番号}</td>
      <td>${item.取得日時}</td>
      <td>${item.編集日時}</td>
    </tr>
    `
    }
    tbody.innerHTML = tbody_html;
    console.log(tbody_html);
    message.innerHTML = "学科" + str + "が所有している資産は" + data_03.length + "件です"
};

function user_search() {
    const str = document.getElementById("user").value;

    let tbody = document.querySelector('#csv_data_table tbody');
    tbody.innerHTML = "";

    var data_03 = data.filter(function (data) {
        return data.担当 == str;
    })
    console.log(data_03);
    //　CSVの内容を表示
    let tbody_html = "";
    for (item of data_03) {
        tbody_html += `<tr>
      <td>${item.id}</td>
      <td>${item.資産番号}</td>
      <td>${item.所属}</td>
      <td>${item.資産名}</td>
      <td>${item.場所}</td>
      <td>${item.担当}</td>
      <td>${item.管理者}</td>
      <td>${item.形式}</td>
      <td>${item.個数}</td>
      <td>${item.識別番号}</td>
      <td>${item.取得日時}</td>
      <td>${item.編集日時}</td>
    </tr>
    `
    }
    tbody.innerHTML = tbody_html;
    console.log(tbody_html);
    message.innerHTML = "ユーザー" + str + "は" + data_03.length + "件の資産を担当しています"
};

function admin_search() {
    const str = document.getElementById("admin1").value;

    let tbody = document.querySelector('#csv_data_table tbody');
    tbody.innerHTML = "";

    var data_03 = data.filter(function (data) {
        return data.管理者 == str;
    })
    console.log(data_03);
    //　CSVの内容を表示
    let tbody_html = "";
    for (item of data_03) {
        tbody_html += `<tr>
      <td>${item.id}</td>
      <td>${item.資産番号}</td>
      <td>${item.所属}</td>
      <td>${item.資産名}</td>
      <td>${item.場所}</td>
      <td>${item.担当}</td>
      <td>${item.管理者}</td>
      <td>${item.形式}</td>
      <td>${item.個数}</td>
      <td>${item.識別番号}</td>
      <td>${item.取得日時}</td>
      <td>${item.編集日時}</td>
    </tr>
    `
    }
    tbody.innerHTML = tbody_html;
    console.log(tbody_html);
    message.innerHTML = "管理者" + str + "は" + data_03.length + "件の資産を持っています。"
};

//data -> muuri HTML形式に生成して変更　（ボタンを押した時）
function data_change_format_muuriHTML(){
//get_element
 var structure_text = document.getElementById('structure_text');

//elementに何かあったら消す
//structure_text.remove();

//テスト表示用オブジェクト
var a = [{   id: "1",
資産番号: '00000-99999999-00000',
所属: 'EE',
資産名: 'PC',
場所: '405',
担当: 'uchida',
管理者: 'shimakawa',
形式: 'macbookpro',
個数: '1',
識別番号: '1',
取得日時: '2022/07/12',
編集日時: '2022/07/13'},{   "id": "1",
資産番号: '00000-99999999-00000',
所属: 'CS',
資産名: 'PC',
場所: '405',
担当: 'uchida',
管理者: 'shimakawa',
形式: 'macbookpro',
個数: '1',
識別番号: '1',
取得日時: '2022/07/12',
編集日時: '2022/07/13'},{   "id": "1",
資産番号: '00000-99999999-00000',
所属: 'ME',
資産名: 'PC',
場所: '405',
担当: 'uchida',
管理者: 'shimakawa',
形式: 'macbookpro',
個数: '1',
識別番号: '1',
取得日時: '2022/07/12',
編集日時: '2022/07/13'},{   "id": "1",
資産番号: '00000-99999999-00000',
所属: 'AD',
資産名: 'PC',
場所: '405',
担当: 'uchida',
管理者: 'shimakawa',
形式: 'macbookpro',
個数: '1',
識別番号: '1',
取得日時: '2022/07/12',
編集日時: '2022/07/13'},{   "id": "1",
資産番号: '00000-99999999-00000',
所属: 'AC',
資産名: 'PC',
場所: '405',
担当: 'uchida',
管理者: 'shimakawa',
形式: 'macbookpro',
個数: '1',
識別番号: '1',
取得日時: '2022/07/12',
編集日時: '2022/07/13'}]

//HTML生成
var addcode = '';
for(var i = 0 ; i < a.length ;i ++){
addcode += '<li class="item ' + a[i].所属 +'" room-data="room' + a[i].場所 + '"><div class="item-content" style="background-color:#f7f7f7e1; border: 2px solid #333333;"><img src="muuri_module/img/480x320.png" alt="" />' 
                + '<br><strong>資産番号</strong> : ' +  a[i].資産番号 + '<br>'
                + '<strong>所属学科</strong> : ' +  a[i].所属 + '<br>'
                + '<strong>資産名</strong> : ' +  a[i].資産名 + '<br>'
                + '<strong>場所</strong> : ' +  a[i].場所 + '<br>'
                + '<strong>担当</strong> : ' +  a[i].担当 + '    '
                + '<strong>管理者</strong> : ' +  a[i].管理者 + '<br>'
                + '<strong>形式</strong> : ' +  a[i].形式 + '<br>'
                + '<strong>個数</strong> : ' +  a[i].個数
                + 'つ中 : ' +  a[i].識別番号 + 'つ目<br>'
                + '<strong>取得日時</strong> : ' +  a[i].取得日時 + '   '
                + '<strong>最終編集</strong> : ' +  a[i].編集日時 + '</div></li>';
}

 console.log(addcode);

//生成した変数addcodeをinsertする
structure_text.insertAdjacentHTML('afterend',addcode);
};
