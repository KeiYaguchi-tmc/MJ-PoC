const images = [
  // {src: 'img/工程名.svg', width: 100, height: 100, type: 'shape'},
  // {src: 'img/会社・組織名.svg', width: 100, height: 100, type: 'shape'},
  // {src: 'img/物の流れ.svg', width: 100, height: 100, type: 'line'},
  // {src: 'img/情報の流れ.svg', width: 100, height: 100, type: 'line'},
  // {src: 'img/リードタイム.svg', width: 100, height: 100, type: 'line'},
  { src: 'img/かんばん.svg', width: 100, height: 100, type: 'img' },
  { src: 'img/ロット形式ポスト.svg', width: 100, height: 100, type: 'img' },
  { src: 'img/物と情報の停滞.svg', width: 100, height: 100, type: 'img' },
  { src: 'img/ストア（店）.svg', width: 100, height: 100, type: 'img' },
  { src: 'img/紙・指示書.svg', width: 100, height: 100, type: 'img' },
  { src: 'img/Eメール.svg', width: 100, height: 100, type: 'img' },
  { src: 'img/FAX.svg', width: 100, height: 100, type: 'img' },
  { src: 'img/電話.svg', width: 100, height: 100, type: 'img' },
  { src: 'img/システム・アプリケーション.svg', width: 100, height: 100, type: 'img' },
]

function getImage(img) {
  return `<div class="draggable-item image-box">
		<img src="${img.src}" data-image-url="https://keiyaguchi-tmc.github.io/MJ-PoC/${img.src}">
	  </div>`
}

function addShapes(container) {
  container.innerHTML += `<div class="shape draggable-item"
                          background-color="#d3d3d3"
                          shape-width=100
                          shape-height=500
                          shape-type=7
                          shape-opacity=1>
     				              <div class="koutei"></div>
			                    </div>
                          <div class="shape draggable-item"
                          background-color="#FFFFFF"
                          shape-width=430
                          shape-height=200
                          shape-type=7
                          shape-opacity=0>
     		                  <div class="soshiki" ></div>
			                    </div>`
}

function addLines(container) {
  container.innerHTML += `<div class="line draggable-item"
                          line-start=0 
                          line-end=8 
                          line-style=2>
                          <div class="arrow"></div>
                          </div>
                          <div class="line draggable-item"
                          line-start=8
                          line-end=0
                          line-style=1>
                          <div class="dasharrow"></div>
                          </div>
                          <div class="line draggable-item"
                          line-start=8 
                          line-end=8 
                          line-style=2
                          line-type="LT">
                          <div class="leadarrow"></div>
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
    text: text,
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
    onClick: async (targetElement) => {
      const url = targetElement.getAttribute('data-image-url')
      const widget = (await createImage(0, 0, url))[0]
      miro.board.viewport.zoomToObject(widget)
    },
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
      return {
        url: `data:image/svg+xml,%3Csvg width='140' height='140' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Crect stroke='null' x='0' y='0' fill='%23${currentShapeColor}' height='140' width='140'/%3E%3C/g%3E%3C/svg%3E`,
        //createShape(canvasX, canvasY, currentShapeColor, currentShapeText, currentShapeType, currentShapeOpacity)
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
    onClick: async (targetElement) => {
      const sstyle = targetElement.getAttribute('line-start')
      const estyle = targetElement.getAttribute('line-end')
      const linestyle = targetElement.getAttribute('line-style')
      const linetype = targetElement.getAttribute('line-type')
      const widget = (await createLine(0, 0, sstyle, estyle, linestyle, linetype))[0]
      miro.board.viewport.zoomToObject(widget)
    },
    getDraggableItemPreview: (targetElement) => {
      currentlineStartStyle = targetElement.getAttribute('line-start')
      currentlineEndStyle = targetElement.getAttribute('line-end')
      currentlineStyle = targetElement.getAttribute('line-style')
      currentlineType = targetElement.getAttribute('line-type')
      return {
        url: `data:image/svg+xml,%3Csvg width='140' height='140' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Crect stroke='null' x='0' y='0' fill='%23${currentlineStartStyle}' height='140' width='140'/%3E%3C/g%3E%3C/svg%3E`,
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
