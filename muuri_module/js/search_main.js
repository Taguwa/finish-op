$(window).on('load',function(){	//画面遷移時にギャラリーの画像が被らないように、すべての読み込みが終わった後に実行する

  //＝＝＝Muuriギャラリープラグイン設定
  var grid = new Muuri('.grid', {
  
  //アイテムの表示速度※オプション。入れなくても動作します
  showDuration: 600,
  showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  hideDuration: 600,
  hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    
  // アイテムの表示/非表示状態のスタイル※オプション。入れなくても動作します
    visibleStyles: {
      opacity: '1',
      transform: 'scale(1)'
    },
    hiddenStyles: {
      opacity: '0',
      transform: 'scale(0.5)'
    } 
  });
  
  //＝＝＝並び替えボタン設定
  $('.sort-btn ul li').on('click',function(){//並び替えボタンをクリックしたら
    var className = $(this).attr("class")//クリックしたボタンのクラス名を取得
    className = className.split(' '); //「.sort-btn ul li」のクラス名を分割して配列にする
  
      //ボタンにクラス名activeがついている場合
    if($(this).hasClass("active")){	
      if(className[0] != "all"){							//ボタンのクラス名がallでなければ
        $(this).removeClass("active");					//activeクラスを消す
        var selectElms = $(".sort-btn ul li.active");	//ボタン内にactiveクラスがついている要素を全て取得
        if(selectElms.length == 0){						//取得した配列内にactiveクラスがついている要素がなければ
          $(".sort-btn ul li.all").addClass("active");//ボタンallにactiveを追加し
          grid.show('');								//ギャラリーの全ての画像を表示
        }else{
          filterDo();									//取得した配列内にactiveクラスがついている要素があれば並び替えを行う
        }
      }	
    }
      //ボタンにクラス名activeがついていない場合
      else{
      if(className[0] == "all"){							//ボタンのクラス名にallとついていたら
        $(".sort-btn ul li").removeClass("active");		//ボタンのli要素の全てのactiveを削除し
        $(this).addClass("active");						//allにactiveクラスを付与
        grid.show('');									//ギャラリーの全ての画像を表示
      }else{
        if($(".all").hasClass("active")){				//allクラス名にactiveクラスが付いていたら
          $(".sort-btn ul li.all").removeClass("active");//ボタンallのactiveクラスを消し
        }
        $(this).addClass("active");						//クリックしたチェックボックスへactiveクラスを付与
        filterDo();										//並び替えを行う
      }
  
    }
    
  });
  
  //＝＝＝画像の並び替え設定
  function filterDo(){
    var selectElms = $(".sort-btn ul li.active");	//全てのボタンのactive要素を取得
    var selectElemAry = [];							//activeクラスがついているボタンのクラス名（sortXX）を保存する配列を定義
    $.each(selectElms, function(index, selectElm) {
      var className = $(this).attr("class")		//activeクラスがついている全てのボタンのクラス名（sortXX）を取得
      className = className.split(' ');			//ボタンのクラス名を分割して配列にし、
      selectElemAry.push("."+className[0]);		//selectElemAry配列に、チェックのついたクラス名（sortXX）を追加
    })
    str = selectElemAry.join(',');				//selectElemAry配列に追加されたクラス名をカンマ区切りでテキストにして
    grid.filter(str); 							//grid.filter(str);のstrに代入し、ボタンのクラス名とliにつけられたクラス名が一致したら出現
  }
  
  });