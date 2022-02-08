const images = [
  // {src: 'img/物の流れ.svg', width: 100, height: 100, type: 'line'},
  // {src: 'img/情報の流れ.svg', width: 100, height: 100, type: 'line'},
  // {src: 'img/リードタイム.svg', width: 100, height: 100, type: 'line'},
  { src: 'img/かんばん.svg', width: 100, height: 100, type: 'かんばん' },
  { src: 'img/ロット形式ポスト.svg', width: 100, height: 100, type: 'ロット形式ポスト' },
  { src: 'img/物と情報の停滞.svg', width: 100, height: 100, type: '停滞' },
  { src: 'img/ストア（店）.svg', width: 100, height: 100, type: 'ストア（店）' },
  { src: 'img/紙・指示書.svg', width: 100, height: 100, type: '紙・指示書' },
  { src: 'img/Eメール.svg', width: 100, height: 100, type: 'Eメール' },
  { src: 'img/FAX.svg', width: 100, height: 100, type: 'FAX' },
  { src: 'img/電話.svg', width: 100, height: 100, type: '電話' },
  { src: 'img/システム・アプリケーション.svg', width: 100, height: 100, type: 'システム・アプリケーション' },
]

const shapes = [
  {src: `data:image/svg+xml,%3Csvg width='35' height='150' xmlns='http://www.w3.org/2000/svg' overflow='hidden' viewBox='0, 0, 178, 794'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M1790 819h178v794h-178z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)' transform='translate(-1790 -819)'%3E%3Cpath d='M1793.5 851c0-15.74 12.76-28.5 28.5-28.5h114c15.74 0 28.5 12.76 28.5 28.5v730c0 15.74-12.76 28.5-28.5 28.5h-114c-15.74 0-28.5-12.76-28.5-28.5Z' stroke='%23000' stroke-width='6.875' stroke-miterlimit='8' fill='%23EDEDED' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E`, width: 100, height: 100, type: 'shape'},
  {src: `data:image/svg+xml,%0A%3Csvg width='100' height='120' xmlns='http://www.w3.org/2000/svg' overflow='hidden' viewBox='0, 0, 800, 800'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M2197 1105h789v480h-789z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)' transform='translate(-2197 -1105)'%3E%3Cpath d='M2200.5 1187.33c0-43.53 35.3-78.83 78.83-78.83h624.34c43.53 0 78.83 35.3 78.83 78.83v315.34c0 43.53-35.3 78.83-78.83 78.83h-624.34c-43.53 0-78.83-35.3-78.83-78.83Z' stroke='%23000' stroke-width='6.875' stroke-miterlimit='8' fill='none' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E`, width: 100, height: 100, type: 'shape'},
  {src: `data:image/svg+xml,%3Csvg width='300' height='100' xmlns='http://www.w3.org/2000/svg' overflow='hidden' viewBox='0, 0, 800, 100'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M2326 471h766v127h-766z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)' transform='translate(-2326 -471)'%3E%3Cpath d='M2326.5 524.188h650.34v20.625H2326.5Zm640.03-20.625 61.87 30.937-61.87 30.938Z'/%3E%3C/g%3E%3C/svg%3E`, width: 100, height: 100, type: 'shape'},
  {src: `data:image/svg+xml,%3Csvg width='300' height='100' xmlns='http://www.w3.org/2000/svg' overflow='hidden' viewBox='0, 0, 800, 100'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M2263 688h766v127h-766z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)' transform='translate(-2263 -688)'%3E%3Cpath d='M3028.4 741.188h-82.5v20.625h82.5Zm-144.375 0h-82.5v20.625h82.5Zm-144.375 0h-82.5v20.625h82.5Zm-144.375 0h-82.5v20.625h82.5Zm-144.375 0h-72.842v20.625h72.842Zm-62.53-20.625-61.875 30.937 61.875 30.938Z'/%3E%3C/g%3E%3C/svg%3E`, width: 100, height: 100, type: 'shape'},
  {src: `data:image/svg+xml,%3Csvg width='300' height='100' xmlns='http://www.w3.org/2000/svg' overflow='hidden' viewBox='0, 0, 800, 200'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M3237 366h829v232h-829z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)' transform='translate(-3237 -366)'%3E%3Cpath d='M3352.06 524.188h598.78v20.625h-598.78Zm10.31 41.25L3300.5 534.5l61.87-30.937Zm578.16-61.875 61.87 30.937-61.87 30.938Z'/%3E%3Cpath d='M3631.5 535c0-10.769 8.73-19.5 19.5-19.5s19.5 8.731 19.5 19.5c0 10.77-8.73 19.5-19.5 19.5s-19.5-8.73-19.5-19.5Z' stroke='%23000' stroke-width='4.583' stroke-miterlimit='8' fill-rule='evenodd'/%3E%3Ctext font-family='Arial,Arial_MSFontService,sans-serif' font-weight='400' font-size='83' transform='translate(3601.11 471)'%3E○○%3C/text%3E%3C/g%3E%3C/svg%3E`, width: 100, height: 100, type: 'shape'},
]

function getImage(img) {
  return `<div class="draggable-item">
          <div class="zukei">
          <img src="${img.src}" data-image-url="https://keiyaguchi-tmc.github.io/MJ-PoC/${img.src}">
          </div>
          <div class="text">${img.type}</div>
	        </div>`
}

function addShapes(container) {
  container.innerHTML += `<div class="shape draggable-item"
                          background-color="#d3d3d3"
                          shape-width=100
                          shape-height=500
                          shape-type=7
                          shape-opacity=1
                          data-image-url="${shapes[0].src}">
                          <div class="zukei"><div class="koutei"></div></div>
                          <div class="text">工程</div>
			                    </div>
                          <div class="shape draggable-item"
                          background-color="#FFFFFF"
                          shape-width=380
                          shape-height=200
                          shape-type=7
                          shape-opacity=0
                          data-image-url="${shapes[1].src}">
                          <div class="zukei"><div class="soshiki" ></div></div>
                          <div class="text">会社・組織</div>
			                    </div>`
}

function addLines(container) {
  container.innerHTML += `<div class="line draggable-item"
                          line-start=0 
                          line-end=8 
                          line-style=2
                          data-image-url="${shapes[2].src}">
                          <div class="zukei"><div class="arrow"></div></div>
                          <div class="text">物の流れ</div>
                          </div>
                          <div class="line draggable-item"
                          line-start=8
                          line-end=0
                          line-style=1
                          data-image-url="${shapes[3].src}">
                          <div class="zukei"><div class="dasharrow"></div></div>
                          <div class="text">情報の流れ</div>
                          </div>
                          <div class="line draggable-item"
                          line-start=8 
                          line-end=8 
                          line-style=2
                          line-type="LT"
                          data-image-url="${shapes[4].src}">
                          <div class="zukei"><div class="leadarrow"></div></div>
                          <div class="text">リードタイム</div>
                          </div>`

  // <div class="line draggable-item"
  // 		        line-start=0 
  // 		        line-end=8 
  // 		        line-style=2>
  // 		        M
  // 		   </div>
  //                    <div class="line draggable-item"
  // 		        line-start=8
  // 		        line-end=0
  // 		        line-style=1>
  // 		        J
  // 		   </div>
  // 	           <div class="line draggable-item"
  // 		        line-start=8 
  // 		        line-end=8 
  // 		        line-style=2>
  // 		        L
  // 		   </div>
}

function addImages(container) {
  container.innerHTML += images.map((i) => getImage(i)).join('')
}

function createImage(canvasX, canvasY, url) {
  return miro.board.widgets.create({
    type: 'image',
    url: url,
    scale: 0.3,
    x: canvasX,
    y: canvasY,
  })
}

function createShape(canvasX, canvasY, wid, hei, color, text, stype, sopacity) {
  return miro.board.widgets.create({
    type: 'shape',
    //text: ,
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

function createLine(canvasX, canvasY, sstyle, estyle, lstyle, linetype) {
  if(linetype == "LT"){
    createText(canvasX, canvasY)
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

function createText(canvasX, canvasY) {
  return miro.board.widgets.create({
    type: 'text',
    x: canvasX + 200,
    y: canvasY - 50,
    text: 'LT',
    width: 100,
    scale: 2.57,
    style:{
      fontSize: 36,
      textAlign: "c",
    }
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
    // onClick: async (targetElement) => {
    //   const url = targetElement.getAttribute('data-image-url')
    //   const widget = (await createImage(0, 0, url))[0]
    //   miro.board.viewport.zoomToObject(widget)
    // },
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
  const shapeOptions = {
    draggableItemSelector: '.shape ',
    onClick: async (targetElement) => {
      const color = targetElement.getAttribute('background-color')
      const swidth = targetElement.getAttribute('shape-width')
      const sheight = targetElement.getAttribute('shape-height')
      const text = targetElement.innerText
      const stype = targetElement.getAttribute('shape-type')
      const sopacity = targetElement.getAttribute('shape-opacity')
      const widget = (await createShape(0, 0, swidth, sheight, color, text, stype, sopacity))[0]
      miro.board.viewport.zoomToObject(widget)
    },
    getDraggableItemPreview: (targetElement) => {
      currentShapeColor = targetElement.getAttribute('background-color')
      currentShapeWidth = targetElement.getAttribute('shape-width')
      currentShapeHeight = targetElement.getAttribute('shape-height')
      currentShapeText = targetElement.innerText
      currentShapeType = targetElement.getAttribute('shape-type')
      currentShapeOpacity = targetElement.getAttribute('shape-opacity')
      currentImageUrl = targetElement.getAttribute('data-image-url')
      return {
        width: 150,
        height: 150,
        url: currentImageUrl,
        //url: `data:image/svg+xml,%3Csvg width='35' height='150' xmlns='http://www.w3.org/2000/svg' overflow='hidden' viewBox='0, 0, 178, 794'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M1790 819h178v794h-178z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)' transform='translate(-1790 -819)'%3E%3Cpath d='M1793.5 851c0-15.74 12.76-28.5 28.5-28.5h114c15.74 0 28.5 12.76 28.5 28.5v730c0 15.74-12.76 28.5-28.5 28.5h-114c-15.74 0-28.5-12.76-28.5-28.5Z' stroke='%23000' stroke-width='6.875' stroke-miterlimit='8' fill='%23EDEDED' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E`,
        //url: `data:image/svg+xml,%3Csvg width='140' height='140' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Crect stroke='null' x='0' y='0' fill='%23${currentShapeColor}' height='140' width='140'/%3E%3C/g%3E%3C/svg%3E`,
      }
    },
    onDrop: (canvasX, canvasY) => {
      console.log('onDrop 2')
      createShape(canvasX, canvasY, currentShapeWidth, currentShapeHeight, currentShapeColor, currentShapeText, currentShapeType, currentShapeOpacity)
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
    // onClick: async (targetElement) => {
    //   const sstyle = targetElement.getAttribute('line-start')
    //   const estyle = targetElement.getAttribute('line-end')
    //   const linestyle = targetElement.getAttribute('line-style')
    //   const linetype = targetElement.getAttribute('line-type')
    //   const widget = (await createLine(0, 0, sstyle, estyle, linestyle, linetype))[0]
    //   miro.board.viewport.zoomToObject(widget)
    // },
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
