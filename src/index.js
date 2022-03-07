let toolbarIcon =
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M22.4,2.3H1.6A.7.7,0,0,0,.9,3V21a.8.8,0,0,0,.7.8H22.4a.8.8,0,0,0,.7-.8V3A.7.7,0,0,0,22.4,2.3Z
  m-5.6,19H6.4V8.4L9.3,2.8h0V9.4L13,2.8h0V9.7l3.7-7h.1Z" fill="#5999CD"/>
  <path d="M13,11.2c-1,0-1.8,1.1-1.8,2.4S12,16,13,16s1.8-1.1,1.8-2.4S14,11.2,13,11.2Zm0,3.6
  c-.2,0-.4-.3-.4-.6a.4.4,0,1,1,.8,0C13.4,14.5,13.2,14.8,13,14.8Zm.6.9a2,2,0,0,0,.6-1.4
  c0-.9-.5-1.6-1.2-1.6s-1.1.7-1.1,1.6a1.4,1.4,0,0,0,.6,1.4,2,2,0,0,1-1.1-2.1A1.9,1.9,0,0,1,13,11.3
  c1,0,1.7,1,1.7,2.3A2.4,2.4,0,0,1,13.6,15.7Z" fill="currentColor"/>
  <path d="M8.7,11.2c-1,0-1.8,1.1-1.8,2.4S7.7,16,8.7,16s1.8-1.1,1.8-2.4S9.7,11.2,8.7,11.2Zm0,3.6
  c-.2,0-.4-.3-.4-.6a.5.5,0,0,1,.4-.5.5.5,0,0,1,.4.5C9.1,14.5,8.9,14.8,8.7,14.8Zm.5.9
  a2.1,2.1,0,0,0,.7-1.4,1.5,1.5,0,0,0-1.2-1.6c-.7,0-1.2.7-1.2,1.6a2,2,0,0,0,.6,1.4A2.5,2.5,0,0,1,7,13.6
  c0-1.3.8-2.3,1.7-2.3s1.7,1,1.7,2.3A2.4,2.4,0,0,1,9.2,15.7Z" fill="currentColor"/>
  <path d="M22.4,2.2a.8.8,0,0,1,.7.8V21a.8.8,0,0,1-.7.8H1.6A.8.8,0,0,1,.9,21V3a.8.8,0,0,1,.7-.8H22.4m0-.7H1.6A1.5,1.5,0,0,0,.1,3V21
  a1.5,1.5,0,0,0,1.5,1.5H22.4A1.5,1.5,0,0,0,23.9,21V3A1.5,1.5,0,0,0,22.4,1.5Z" fill="currentColor"/>
  </svg>`

  let libraryIcon =
  `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48px" height="48px">
  <path class="st0" d="M44.8,4.5H3.2A1.5,1.5,0,0,0,1.7,6V42a1.5,1.5,0,0,0,1.5,1.5H44.8A1.5,1.5,0,0,0,46.3,42
  V6A1.5,1.5,0,0,0,44.8,4.5Zm-11,38.4a.1.1,0,0,1-.1.1h-21a.1.1,0,0,1-.1-.1V16.6L18.5,5.3h.1V18.6L26,5.3h.1
  V19.3L33.7,5h.1Z" fill="#5999CD"/>
  <path d="M26.1,22.3c-2,0-3.6,2.2-3.6,4.9S24.1,32,26.1,32s3.7-2.1,3.7-4.8S28.1,22.3,26.1,22.3Zm0,7.4
  c-.5,0-.8-.5-.8-1.2s.3-1.1.8-1.1.8.5.8,1.1S26.5,29.7,26.1,29.7Zm1.2,1.8a3.8,3.8,0,0,0,1.2-2.9
  c0-1.7-1.1-3.2-2.4-3.2s-2.4,1.5-2.4,3.3A3.9,3.9,0,0,0,25,31.6a4.8,4.8,0,0,1-2.3-4.3
  c0-2.7,1.5-4.8,3.4-4.8s3.4,2.1,3.4,4.6A4.7,4.7,0,0,1,27.3,31.5Z" fill="currentColor"/>
  <path d="M17.3,22.3c-2.1,0-3.7,2.2-3.7,4.9S15.2,32,17.3,32s3.6-2.1,3.6-4.8S19.3,22.3,17.3,22.3Zm0,7.4
  c-.5,0-.8-.5-.8-1.2s.3-1.1.8-1.1.8.5.8,1.1S17.7,29.7,17.3,29.7Zm1.1,1.8a3.5,3.5,0,0,0,1.2-2.9
  c0-1.8-1-3.2-2.3-3.2s-2.4,1.4-2.4,3.2a3.3,3.3,0,0,0,1.3,2.9,4.6,4.6,0,0,1-2.3-4.3
  c0-2.6,1.5-4.6,3.4-4.6s3.4,2,3.4,4.6A4.8,4.8,0,0,1,18.4,31.5Z" fill="currentColor"/>
  <path class="st2" d="M44.8,4.5A1.5,1.5,0,0,1,46.3,6V42a1.5,1.5,0,0,1-1.5,1.5H3.2A1.5,1.5,0,0,1,1.7,42
  V6A1.5,1.5,0,0,1,3.2,4.5H44.8m0-1.5H3.2a3,3,0,0,0-3,3V42a3.1,3.1,0,0,0,3,3H44.8a3.1,3.1,0,0,0,3-3
  V6A3,3,0,0,0,44.8,3Z" fill="currentColor"/>
  </svg>`

  // import toolbarIcon from "./assets/process-color-toolbar.svg?raw";
  // import libraryIcon from "./assets/process-color-library.svg?raw";

miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      toolbar: {
        title: 'デジタル物情アプリ',
        toolbarSvgIcon: toolbarIcon, // 24 x 24 px
        librarySvgIcon: libraryIcon, // 48 x 48 px
        onClick: () => {
          miro.board.ui.openLeftSidebar('LeftSidebarItem.html', {title: 'デジタル物情アプリ'})
        }, 
      },
    },
  })
})