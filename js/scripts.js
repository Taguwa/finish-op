//
//使ってない。ファイルを直接開く場合
//

let fileInput = document.getElementById('csv_file');
let message = document.getElementById('message');
let fileReader = new FileReader();
let items = [];

// ファイル変更時イベント
fileInput.onchange = () => {
  message.innerHTML = "読み込み中..."

  let file = fileInput.files[0];
  fileReader.readAsText(file, "UTF-8");
};

// ファイル読み込み時
fileReader.onload = () => {
  // ファイル読み込み
  let fileResult = fileReader.result.split('\r\n');

  // 先頭行をヘッダとして格納
  let header = fileResult[0].split(',')
  // 先頭行の削除
  fileResult.shift();

  // CSVから情報を取得
  items = fileResult.map(item => {
    let datas = item.split(',');
    let result = {};
    for (const index in datas) {
      let key = header[index];
      result[key] = datas[index];
    }
    return result;
  });
  console.log(items);
  // テーブル初期化
  let tbody = document.querySelector('#csv_data_table tbody');
  tbody.innerHTML = "";

  //　CSVの内容を表示
  let tbody_html = "";
  for (item of items) {
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
  message.innerHTML = items.length + "件のデータがあります。"
}

// ファイル読み取り失敗時
fileReader.onerror = () => {
  items = [];
  message.innerHTML = "ファイル読み取りに失敗しました。"
}


