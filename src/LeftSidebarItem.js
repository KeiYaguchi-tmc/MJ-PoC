const images = [
  { src: 'img/かんばん.svg', type: 'かんばん' },
  { src: 'img/ロット形式ポスト.svg', type: 'ロット形式ポスト' },
  { src: 'img/物と情報の停滞.svg', type: '停滞' },
  { src: 'img/ストア（店）.svg',  type: 'ストア（店）' },
  { src: 'img/紙・指示書.svg',  type: '紙・指示書' },
  { src: 'img/Eメール.svg',  type: 'Eメール' },
  { src: 'img/FAX.svg',  type: 'FAX' },
  { src: 'img/電話.svg',  type: '電話' },
  { src: 'img/システム・アプリケーション.svg',  type: 'システム・アプリケーション' },
]

const shapes = [
  {src: `data:image/svg+xml,%3Csvg width='50' height='100' xmlns='http://www.w3.org/2000/svg' overflow='hidden' viewBox='0,0,300,1800'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M1407 435h281v1729h-281z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)' transform='translate(-1407 -435)'%3E%3Cpath stroke='%23000' stroke-width='10.313' stroke-miterlimit='8' fill='%23D3D3D3' d='M1412 440h271v1719h-271z'/%3E%3C/g%3E%3C/svg%3E`,  type: 'shape'},
  {src: `data:image/svg+xml,%0A%3Csvg width='100' height='120' xmlns='http://www.w3.org/2000/svg' overflow='hidden' viewBox='0, 0, 800, 800'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M2197 1105h789v480h-789z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)' transform='translate(-2197 -1105)'%3E%3Cpath d='M2200.5 1187.33c0-43.53 35.3-78.83 78.83-78.83h624.34c43.53 0 78.83 35.3 78.83 78.83v315.34c0 43.53-35.3 78.83-78.83 78.83h-624.34c-43.53 0-78.83-35.3-78.83-78.83Z' stroke='%23000' stroke-width='6.875' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E`,  type: 'shape'},
  {src: `data:image/svg+xml,%3Csvg width='300' height='100' xmlns='http://www.w3.org/2000/svg' overflow='hidden' viewBox='0, 0, 800, 100'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M2326 471h766v127h-766z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)' transform='translate(-2326 -471)'%3E%3Cpath d='M2326.5 524.188h650.34v20.625H2326.5Zm640.03-20.625 61.87 30.937-61.87 30.938Z'/%3E%3C/g%3E%3C/svg%3E`,  type: 'shape'},
  {src: `data:image/svg+xml,%3Csvg width='300' height='100' xmlns='http://www.w3.org/2000/svg' overflow='hidden' viewBox='0, 0, 800, 100'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M2263 688h766v127h-766z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)' transform='translate(-2263 -688)'%3E%3Cpath d='M3028.4 741.188h-82.5v20.625h82.5Zm-144.375 0h-82.5v20.625h82.5Zm-144.375 0h-82.5v20.625h82.5Zm-144.375 0h-82.5v20.625h82.5Zm-144.375 0h-72.842v20.625h72.842Zm-62.53-20.625-61.875 30.937 61.875 30.938Z'/%3E%3C/g%3E%3C/svg%3E`,  type: 'shape'},
  {src: `data:image/svg+xml,%3Csvg width='300' height='100' xmlns='http://www.w3.org/2000/svg' overflow='hidden' viewBox='0, 0, 800, 200'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M3237 366h829v232h-829z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)' transform='translate(-3237 -366)'%3E%3Cpath d='M3352.06 524.188h598.78v20.625h-598.78Zm10.31 41.25L3300.5 534.5l61.87-30.937Zm578.16-61.875 61.87 30.937-61.87 30.938Z'/%3E%3Cpath d='M3631.5 535c0-10.769 8.73-19.5 19.5-19.5s19.5 8.731 19.5 19.5c0 10.77-8.73 19.5-19.5 19.5s-19.5-8.73-19.5-19.5Z' stroke='%23000' stroke-width='4.583' stroke-miterlimit='8' fill-rule='evenodd'/%3E%3Ctext font-family='Arial,Arial_MSFontService,sans-serif' font-weight='400' font-size='83' transform='translate(3601.11 471)'%3E○○%3C/text%3E%3C/g%3E%3C/svg%3E`,  type: 'shape'},
]

// 「物と情報の流れ図」記号の画像を取得する
function getImage(img) {
  return `<div class="draggable-item">
          <div class="item-frame">
          <img src="${img.src}" data-image-url="https://akihomaeda-tmc.github.io/index_only/${img.src}">
          </div>
          <div class="item-text">${img.type}</div>
	        </div>`
}

// 「工程」「会社・組織」の記号をツールバーに描画する
function addShapes(container) {
  container.innerHTML += `<div class="shape draggable-item"
                          background-color="#d3d3d3"
                          shape-width=79
                          shape-height=500
                          shape-type=3
                          shape-opacity=1
                          data-image-url="${shapes[0].src}">
                          <div class="item-frame"><div class="process"></div></div>
                          <div class="item-text">工程</div>
			                    </div>
                          <div class="shape draggable-item"
                          background-color="#FFFFFF"
                          shape-width=380
                          shape-height=200
                          shape-type=7
                          shape-opacity=0
                          shape-name="organization"
                          data-image-url="${shapes[1].src}">
                          <div class="item-frame"><div class="organization"></div></div>
                          <div class="item-text">会社・組織</div>
			                    </div>`
}

// 「物の流れ」「情報の流れ」「リードタイム」の記号をツールバーに描画する
function addLines(container) {
  container.innerHTML += `<div class="line draggable-item"
                          line-start=0 
                          line-end=8 
                          line-style=2
                          data-image-url="${shapes[2].src}">
                          <div class="item-frame"><div class="obj-flow"></div></div>
                          <div class="item-text">物の流れ</div>
                          </div>
                          <div class="line draggable-item"
                          line-start=8
                          line-end=0
                          line-style=1
                          data-image-url="${shapes[3].src}">
                          <div class=" item-frame"><div class="info-flow"></div></div>
                          <div class="item-text">情報の流れ</div>
                          </div>
                          <div class="line draggable-item"
                          line-start=8 
                          line-end=8 
                          line-style=2
                          line-type="LT"
                          data-image-url="${shapes[4].src}">
                          <div class=" item-frame"><div class="lead-time"></div></div>
                          <div class="item-text">リードタイム</div>
                          </div>`
}

// 取得した「物と情報の流れ図」記号の画像をツールバーに表示する
function addImages(container) {
  container.innerHTML += images.map((i) => getImage(i)).join('')
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
function createShape(canvasX, canvasY, wid, hei, color, text, stype, sopacity, sname) {
  if(sname == "organization"){
    createText(canvasX - 30, canvasY + 150, "○○組織・会社", 3.42)
  }
  return miro.board.widgets.create({
    type: 'shape',
    x: canvasX,
    y: canvasY,
    width: Number(wid),
    height: Number(hei),
    style: {
      textColor: '#000',
      backgroundColor: color,
      backgroundOpacity: sopacity,
      borderWidth: 2,
      borderColor: '#000', //'transparent',
      fontFamily: 0,
      fontSize: 36,
      textColor: '#000',
      shapeType: stype,
    },
  })
}

// ボードに線を描画する
function createLine(canvasX, canvasY, sstyle, estyle, lstyle, linetype) {
  if(linetype == "LT"){
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
      lineStartStyle: sstyle,
      lineEndStyle: estyle, //filled_arrow=8
      lineStyle: lstyle, //実線=2 , 点線=1
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


  let currentShapeColor
  let currentShapeWidth
  let currentShapeHeight
  let currentShapeText
  let currentShapeType
  let currentShapeOpacity
  let currentShapeName
  const shapeOptions = {
    draggableItemSelector: '.shape ',
    getDraggableItemPreview: (targetElement) => {
      currentShapeColor = targetElement.getAttribute('background-color')
      currentShapeWidth = targetElement.getAttribute('shape-width')
      currentShapeHeight = targetElement.getAttribute('shape-height')
      currentShapeText = targetElement.innerText
      currentShapeType = targetElement.getAttribute('shape-type')
      currentShapeOpacity = targetElement.getAttribute('shape-opacity')
      currentShapeName = targetElement.getAttribute('shape-name')
      currentImageUrl = targetElement.getAttribute('data-image-url')
      return {
        width: 150,
        height: 150,
        url: currentImageUrl,
      }
    },
    onDrop: (canvasX, canvasY) => {
      console.log('onDrop 2')
      createShape(canvasX, canvasY, currentShapeWidth, currentShapeHeight, currentShapeColor, currentShapeText, currentShapeType, currentShapeOpacity, currentShapeName)
    },
  }
  miro.board.ui.initDraggableItemsContainer(container, shapeOptions)

  //線
  let currentlineStartStyle
  let currentlineEndStyle
  let currentlineStyle
  let currentlineType
  const lineOptions = {
    draggableItemSelector: '.line',
    getDraggableItemPreview: (targetElement) => {
      currentlineStartStyle = targetElement.getAttribute('line-start')
      currentlineEndStyle = targetElement.getAttribute('line-end')
      currentlineStyle = targetElement.getAttribute('line-style')
      currentlineType = targetElement.getAttribute('line-type')
      currentImageUrl = targetElement.getAttribute('data-image-url')
      return {
        url: currentImageUrl
      }
    },
    onDrop: (canvasX, canvasY) => {
      console.log('onDrop 3')
      createLine(canvasX, canvasY, currentlineStartStyle, currentlineEndStyle, currentlineStyle, currentlineType)
    },
  }
  miro.board.ui.initDraggableItemsContainer(container, lineOptions)
}

miro.onReady(bootstrap)
