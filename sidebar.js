miro.onReady(() => {
    // Subscribe on user selected widgets
    miro.addListener(miro.enums.event.SELECTION_UPDATED, getWidget)
    getWidget()
  })
  
  // Get HTML elements for tip and text container
  const widgetTextElement = document.getElementById('widget-text')
  
  async function getWidget() {
    // Get selected widgets
    let widgets = await miro.board.selection.get()
  
    // Get first widget from selected widgets
    let text = widgets[0].text.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')
  
    // Check that the widget has text field
    if (typeof text === 'string') {
      // show text in sidebar
      widgetTextElement.value = text
    } else {
      // clear text in sidebar
      widgetTextElement.value = ''
    }
  }
  