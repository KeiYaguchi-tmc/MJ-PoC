const images = [
  { src: 'img/かんばん.svg', imgname: 'かんばん' },
  { src: 'img/ロット形式ポスト.svg', imgname: 'ロット形式ポスト' },
  { src: 'img/物と情報の停滞.svg', imgname: '停滞' },
  { src: 'img/ストア（店）.svg',  imgname: 'ストア（店）' },
  { src: 'img/紙・指示書.svg',  imgname: '紙・指示書' },
  { src: 'img/Eメール.svg',  imgname: 'Eメール' },
  { src: 'img/FAX.svg',  imgname: 'FAX' },
  { src: 'img/電話.svg',  imgname: '電話' },
  { src: 'img/システム・アプリケーション.svg',  imgname: 'システム・アプリケーション' },
]

const shapes = [
  //工程
  {src: `data:image/svg+xml,%3Csvg width='50' height='100' xmlns='http://www.w3.org/2000/svg' overflow='hidden' viewBox='0,0,300,1800'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M1407 435h281v1729h-281z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)' transform='translate(-1407 -435)'%3E%3Cpath stroke='%23000' stroke-width='10.313' stroke-miterlimit='8' fill='%23D3D3D3' d='M1412 440h271v1719h-271z'/%3E%3C/g%3E%3C/svg%3E`,
   color: '#d3d3d3', width: '79', height: '500', type: '3', opacity: '1', classname: 'process', text: '工程'},
  //工程 1/2
  {src: `data:image/svg+xml,%3Csvg width='50' height='100' xmlns='http://www.w3.org/2000/svg' overflow='hidden' viewBox='0,0,300,1800'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M1407 435h281v1729h-281z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)' transform='translate(-1407 -435)'%3E%3Cpath stroke='%23000' stroke-width='10.313' stroke-miterlimit='8' fill='%23D3D3D3' d='M1412 440h271v1719h-271z'/%3E%3C/g%3E%3C/svg%3E`,
   color: '#d3d3d3', width: '79', height: '245', type: '3', opacity: '1', classname: 'process2', text: '工程1/2'},
  //工程 1/3
  {src: `data:image/svg+xml,%3Csvg width='50' height='100' xmlns='http://www.w3.org/2000/svg' overflow='hidden' viewBox='0,0,300,1800'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M1407 435h281v1729h-281z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)' transform='translate(-1407 -435)'%3E%3Cpath stroke='%23000' stroke-width='10.313' stroke-miterlimit='8' fill='%23D3D3D3' d='M1412 440h271v1719h-271z'/%3E%3C/g%3E%3C/svg%3E`,
   color: '#d3d3d3', width: '79', height: '160', type: '3', opacity: '1', classname: 'process3', text: '工程1/3'},
  //工程 1/4
  {src: `data:image/svg+xml,%3Csvg width='50' height='100' xmlns='http://www.w3.org/2000/svg' overflow='hidden' viewBox='0,0,300,1800'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M1407 435h281v1729h-281z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)' transform='translate(-1407 -435)'%3E%3Cpath stroke='%23000' stroke-width='10.313' stroke-miterlimit='8' fill='%23D3D3D3' d='M1412 440h271v1719h-271z'/%3E%3C/g%3E%3C/svg%3E`,
   color: '#d3d3d3', width: '79', height: '120', type: '3', opacity: '1', classname: 'process4', text: '工程1/4'},
  //工程 1/16
  {src: `data:image/svg+xml,%3Csvg width='50' height='100' xmlns='http://www.w3.org/2000/svg' overflow='hidden' viewBox='0,0,300,1800'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M1407 435h281v1729h-281z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)' transform='translate(-1407 -435)'%3E%3Cpath stroke='%23000' stroke-width='10.313' stroke-miterlimit='8' fill='%23D3D3D3' d='M1412 440h271v1719h-271z'/%3E%3C/g%3E%3C/svg%3E`,
   color: '#d3d3d3', width: '79', height: '30', type: '3', opacity: '1', classname: 'process16', text: '工程1/16'},
]

const lines = [
  //物の流れ
  {src: `data:image/svg+xml,%3Csvg width='300' height='100' xmlns='http://www.w3.org/2000/svg' overflow='hidden' viewBox='0, 0, 800, 100'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M2326 471h766v127h-766z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)' transform='translate(-2326 -471)'%3E%3Cpath d='M2326.5 524.188h650.34v20.625H2326.5Zm640.03-20.625 61.87 30.937-61.87 30.938Z'/%3E%3C/g%3E%3C/svg%3E`,
   start: '0', end: '8', style: '2', type: '', classname: 'obj-flow', text: '物の流れ'},
  //情報の流れ
  {src: `data:image/svg+xml,%3Csvg width='300' height='100' xmlns='http://www.w3.org/2000/svg' overflow='hidden' viewBox='0, 0, 800, 100'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M2263 688h766v127h-766z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)' transform='translate(-2263 -688)'%3E%3Cpath d='M3028.4 741.188h-82.5v20.625h82.5Zm-144.375 0h-82.5v20.625h82.5Zm-144.375 0h-82.5v20.625h82.5Zm-144.375 0h-82.5v20.625h82.5Zm-144.375 0h-72.842v20.625h72.842Zm-62.53-20.625-61.875 30.937 61.875 30.938Z'/%3E%3C/g%3E%3C/svg%3E`,
   start: '8', end: '0', style: '1', type: '', classname: 'info-flow', text: '情報の流れ'},
  //リードタイム
  {src: `data:image/svg+xml,%3Csvg width='300' height='100' xmlns='http://www.w3.org/2000/svg' overflow='hidden' viewBox='0, 0, 800, 200'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M3237 366h829v232h-829z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)' transform='translate(-3237 -366)'%3E%3Cpath d='M3352.06 524.188h598.78v20.625h-598.78Zm10.31 41.25L3300.5 534.5l61.87-30.937Zm578.16-61.875 61.87 30.937-61.87 30.938Z'/%3E%3Cpath d='M3631.5 535c0-10.769 8.73-19.5 19.5-19.5s19.5 8.731 19.5 19.5c0 10.77-8.73 19.5-19.5 19.5s-19.5-8.73-19.5-19.5Z' stroke='%23000' stroke-width='4.583' stroke-miterlimit='8' fill-rule='evenodd'/%3E%3Ctext font-family='Arial,Arial_MSFontService,sans-serif' font-weight='400' font-size='83' transform='translate(3601.11 471)'%3E○○%3C/text%3E%3C/g%3E%3C/svg%3E`,
   start: '8', end: '8', style: '2', type: 'LT', classname: 'obj-flow', text: 'リードタイム'},
]

let shapewidget = {
  color:'',
  width:'',
  height:'',
  text:'',
  type:'',
  opacity:'',
  name:'',
  url:'',
}

let linewidget = {
  start_style:'',
  end_style:'',
  style:'',
  type:'',
  url:'',
}

// 「工程」「会社・組織」の記号をツールバーに描画する
function addShapes(container) {
  shapes.forEach(elem => 
    container.innerHTML += `<div class="shape draggable-item"
                            shape-image-url="${elem.src}"
                            background-color="${elem.color}"
                            shape-width=${elem.width}
                            shape-height=${elem.height}
                            shape-type=${elem.type}
                            shape-opacity=${elem.opacity}>
                            <div class="item-frame"><div class="${elem.classname}"></div></div>
                            <div class="item-text">${elem.text}</div>
                            </div>`);
}

// 「物の流れ」「情報の流れ」「リードタイム」の記号をツールバーに描画する
function addLines(container) {
  lines.forEach(elem => 
  container.innerHTML += `<div class="line draggable-item"
                          line-image-url="${elem.src}"
                          line-start=${elem.start}
                          line-end=${elem.end}
                          line-style=${elem.style}
                          line-type="${elem.type}">
                          <div class="item-frame"><div class="${elem.classname}"></div></div>
                          <div class="item-text">${elem.text}</div>
                          </div>`);
}

// 取得した「物と情報の流れ図」記号の画像をツールバーに表示する
function addImages(container) {
  images.forEach(elem => 
    container.innerHTML += `<div class="draggable-item">
                            <div class="item-frame">
                            <img src=${elem.src} data-image-url="https://KeiYaguchi-tmc.github.io/MJ-PoC/${elem.src}">
                            </div>
                            <div class="item-text">${elem.imgname}</div>
                            </div>`);
}

// ボードに画像を描画する
function createImage(canvasX, canvasY, url) {
  return miro.board.widgets.create({
    type: 'image',
    url: url,
    scale: 0.3,
    x: canvasX,
    y: canvasY,
  })
}

// ボードに図形を描画する
function createShape(canvasX, canvasY, shapewidget) {
  if(shapewidget.name == "organization"){
    createText(canvasX - 30, canvasY + 150, "○○組織・会社", 3.42)
  }
  return miro.board.widgets.create({
    type: 'shape',
    x: canvasX,
    y: canvasY,
    width: Number(shapewidget.width),
    height: Number(shapewidget.height),
    style: {
      textColor: '#000',
      backgroundColor: shapewidget.color,
      backgroundOpacity: shapewidget.opacity,
      borderWidth: 2,
      borderColor: '#000', //'transparent',
      fontFamily: 0,
      fontSize: 36,
      textColor: '#000',
      shapeType: shapewidget.type,
    },
  })
}

// ボードに線を描画する
function createLine(canvasX, canvasY, linewidget) {
  if(linewidget.type == "LT"){
    createVerticalLine(canvasX, canvasY)
    createVerticalLine(canvasX + 400, canvasY)
  }
  return miro.board.widgets.create({
    type: 'line',
    startPosition: {
      x: canvasX,
      y: canvasY,
    },
    endPosition: {
      x: canvasX + 400,
      y: canvasY,
    },
    style: {
      lineColor: '#000',
      lineThickness: 10,//厚さ
      lineStartStyle: linewidget.start_style,
      lineEndStyle: linewidget.end_style, //filled_arrow=8
      lineStyle: linewidget.style, //実線=2 , 点線=1
      lineType: 0, //曲がり度
    },
  })
}

// テキストの描画
function createText(canvasX, canvasY, text, scale) {
  return miro.board.widgets.create({
    type: 'text',
    x: canvasX,
    y: canvasY,
    text: text,
    width: 100,
    scale: scale,
    style:{
      textAlign: "c",
    }
  })
}

// リードタイムの横線の描画
function createVerticalLine(canvasX, canvasY) {
  return miro.board.widgets.create({
    type: 'line',
    startPosition: {
      x: canvasX,
      y: canvasY,
    },
    endPosition: {
      x: canvasX,
      y: canvasY + 200,
    },
    style: {
      lineColor: '#000',
      lineThickness: 1,//厚さ
      lineStartStyle: 0,
      lineEndStyle: 0,
      lineStyle: 2, //実線=2 , 点線=1
      lineType: 0, //曲がり度
    },
  })
}

//htmlタグから情報を取得
function shapeWidgetCreate(target){
  shapewidget.color = target.getAttribute('background-color')
  shapewidget.width = target.getAttribute('shape-width')
  shapewidget.height = target.getAttribute('shape-height')
  shapewidget.text = target.innerText
  shapewidget.type = target.getAttribute('shape-type')
  shapewidget.opacity = target.getAttribute('shape-opacity')
  shapewidget.name = target.getAttribute('shape-name')
  shapewidget.url = target.getAttribute('shape-image-url')
}

//htmlタグから情報を取得
function lineWidgetCreate(target){
  linewidget.start_style = target.getAttribute('line-start')
  linewidget.end_style = target.getAttribute('line-end')
  linewidget.style = target.getAttribute('line-style')
  linewidget.type = target.getAttribute('line-type')
  linewidget.url = target.getAttribute('line-image-url')
}

function bootstrap() {
  const container = document.getElementById('container')
  addShapes(container)
  addLines(container)
  addImages(container)

  let currentImageUrl
  const imageOptions = {
    draggableItemSelector: 'img',
    getDraggableItemPreview: (targetElement) => {
      //drag-started
      currentImageUrl = targetElement.getAttribute('data-image-url')
      return {
        width: 150,
        height: 150,
        url: currentImageUrl,
      }
    },
    onDrop: (canvasX, canvasY) => {
      console.log('onDrop 1')
      createImage(canvasX, canvasY, currentImageUrl)
    },
  }
  miro.board.ui.initDraggableItemsContainer(container, imageOptions)

  const shapeOptions = {
    draggableItemSelector: '.shape ',
    getDraggableItemPreview: (targetElement) => {
      shapeWidgetCreate(targetElement)
      return {
        width: 150,
        height: 150,
        url: shapewidget.url,
      }
    },
    onDrop: (canvasX, canvasY) => {
      console.log('onDrop 2')
      createShape(canvasX, canvasY, shapewidget)
    },
  }
  miro.board.ui.initDraggableItemsContainer(container, shapeOptions)

  //線
  const lineOptions = {
    draggableItemSelector: '.line',
    getDraggableItemPreview: (targetElement) => {
      lineWidgetCreate(targetElement)
      return {
        url: linewidget.url,
      }
    },
    onDrop: (canvasX, canvasY) => {
      console.log('onDrop 3')
      createLine(canvasX, canvasY, linewidget)
    },
  }
  miro.board.ui.initDraggableItemsContainer(container, lineOptions)
}

miro.onReady(bootstrap)