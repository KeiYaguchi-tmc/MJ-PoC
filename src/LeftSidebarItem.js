const widgets = [
  //工程
  {
    class: 'shapes',
    color: '#d3d3d3',
    width: 140,
    height: 3110,
    type: 3,
  },
  //工程1/2
  {
    class: 'shapes',
    color: '#d3d3d3',
    width: 140,
    height: 1480,
    type: 3,
  },
  //工程1/4
  {
    class: 'shapes',
    color: '#d3d3d3',
    width: 140,
    height: 665,
    type: 3,
  },
  //工程1/16
  {
    class: 'shapes',
    color: '#d3d3d3',
    width: 600,
    height: 108,
    type: 3,
  },
  //停滞
  {},
  //情報の流れ
  {
    class: 'lines',
    xlength: 400,
    ylength: 0,
    start: '8',
    end: '0',
    style: '1',
  },
]

// 「工程」「情報の流れ」の記号をツールバーに描画する
function addContents(container) {
    // アイコンをツールバーに描画する
    const buttonLength = 14; // svg画像icon01～14
    for(var i=1;i<=buttonLength;i++){
      const num = ('0' + i).slice(-2);
      container.innerHTML += `
        <div class="draggable-item ${i>7?'sub':''}">
            <img class="${(widgets[i-1]||{}).class}" 
                 src="img/icon${num}.svg" 
                 preview="https://KeiYaguchi-tmc.github.io/MJ-PoC/img/icon${num}_.svg" 
                 datano="${i-1}">
        </div>
      `;
    }
    
    // すべて表示ボタン
    container.innerHTML += `
      <div class="draggable-item sub"></div>
      <div class="openclose">
        <div class="item" id="openclose">
          <span class="icon"></span>
          <span class="icon-text"></span>
        </div>
      </div>
    `;
    
}

// ボードに画像を描画する
function createImage(canvasX, canvasY, url) {
  return miro.board.widgets.create({
    type: 'image',
    url: url,
    scale: 10,
    x: canvasX,
    y: canvasY,
  })
}

// ボードに図形を描画する
function createShape(canvasX, canvasY, no) {
  return miro.board.widgets.create({
    type: 'shape',
    x: canvasX,
    y: canvasY,
    width: Number(widgets[no].width),
    height: Number(widgets[no].height),
    style: {
      textColor: '#000',
      backgroundColor: widgets[no].color,
      backgroundOpacity: 1,
      bold: 1,
      borderWidth: 7,
      borderColor: '#000',
      fontFamily: 0,
      fontSize: 64,
      shapeType: widgets[no].type,
    },
  })
}

// ボードに線を描画する
function createLine(canvasX, canvasY, no) {
  return miro.board.widgets.create({
    type: 'line',
    startPosition: {
      x: canvasX,
      y: canvasY,
    },
    endPosition: {
      x: canvasX + Number(widgets[no].xlength),
      y: canvasY + Number(widgets[no].ylength),
    },
    style: {
      lineColor: '#000',
      lineThickness: 10,//厚さ
      lineStartStyle: widgets[no].start,
      lineEndStyle: widgets[no].end, //filled_arrow=8
      lineStyle: widgets[no].style, //実線=2 , 点線=1
      lineType: 0, //曲がり度
    },
  })
}

function bootstrap() {
  const container = document.getElementById('container')

  //コンテナにアイコンを設置する
  addContents(container)

  //画像の描画関連
  let currentImageUrl
  const imageOptions = {
    draggableItemSelector: 'img',
    getDraggableItemPreview: (targetElement) => {
      currentImageUrl = targetElement.getAttribute('preview')
      return {
        width: 150,
        height: 150,
        url: currentImageUrl,
      }
    },
    onDrop: (canvasX, canvasY) => {
      console.log('image create')
      createImage(canvasX, canvasY, currentImageUrl)
    },
  }
  miro.board.ui.initDraggableItemsContainer(container, imageOptions)

  //図形の描画関連
  let currentWidgetsPreview;
  let currentWidgetsNo;

  let currentClassName;
  const widgetOptions = {
    //CSSセレクタが「.shapes」or「.lines」
    draggableItemSelector: '.shapes,.lines',
    //プレビュー
    getDraggableItemPreview: (targetElement) => {
      currentWidgetsPreview = targetElement.getAttribute('preview');
      currentWidgetsNo = targetElement.getAttribute('datano');
      currentClassName = targetElement.getAttribute('class');
      return {
        width: 150,
        height: 150,
        url: currentWidgetsPreview,
      };
    },
    //ドロップ時
    onDrop: (canvasX, canvasY) => {
      if (currentClassName === 'shapes') {
        console.log('shape create')
        createShape(canvasX, canvasY, currentWidgetsNo)
      } else if (currentClassName === 'lines') {
        console.log('line create')
        createLine(canvasX, canvasY, currentWidgetsNo)
      }
    },
  }
  miro.board.ui.initDraggableItemsContainer(container, widgetOptions)
}

miro.onReady(bootstrap);

$(function(){
	$(document).on('click', '.openclose', function(){
		$(this).closest('#container').toggleClass('on');
		$(this).closest('#container').find('.draggable-item.sub').slideToggle(300);
	});
});