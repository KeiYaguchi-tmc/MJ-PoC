const selectedBtnFontSize = document.getElementById("selectedBtnFontSize");
const selectedBtnWidth = document.getElementById("selectedBtnWidth");
const selectedBtnFontLarger = document.getElementById("selectedBtnFontLarger");
const selectedBtnFontSmaller = document.getElementById("selectedBtnFontSmaller");
const selectedBtnWidthLarger = document.getElementById("selectedBtnWidthLarger");
const selectedBtnWidthSmaller = document.getElementById("selectedBtnWidthSmaller");
const fontSize = document.getElementById("fontSize");
const width = document.getElementById("width");

/**
 * 申し訳ありません。addEventListener lister [function] に async 必須です。
 * 失念してましたが無いと miro.board.selection.get() が動作しません。
 * ! Uncaught Syntax Error: Unexpected reserved word になります。
 *
 * 並列処理と直列処理を別々のボタンにして、それぞれ EventLinstener 登録しています。
 * それぞれのボタンの処理先functionは同一で、最後の更新処理が並列か直列です。（押したボタンによる分岐）
 */
selectedBtnFontSize.addEventListener("click", selectionWidgetsFontUpdate);
selectedBtnWidth.addEventListener("click", selectionWidgetsWidthUpdate);
selectedBtnFontLarger.addEventListener("click", selectionWidgetsFontLargerUpdate);
selectedBtnFontSmaller.addEventListener("click", selectionWidgetsFontSmallerUpdate);
selectedBtnWidthLarger.addEventListener("click", selectionWidgetsWidthLargerUpdate);
selectedBtnWidthSmaller.addEventListener("click", selectionWidgetsWidthSmallerUpdate);

/*
 * 文字一括変更
 */
async function selectionWidgetsFontUpdate() {
  const selectionWidgets = await miro.board.selection.get(); // 選択しているウィジェットの取得

  //let updatedWidgetsData = []; // 更新したウィジェットのコンソール確認用データ

  // 選択しているウィジェットデータの有無確認
  if (selectionWidgets.length) {
    /**
     * 一括更新:ウィジェットパラメータ
     */
    /**********************************/
    const updateWidgetParam = {
      style: {
        // defaultで64px
        fontSize: 64,
      },
    };

    /**
     * 更新対象の処理
     *
     * @param object
     * @return mixed (更新対象の場合) object / (更新対象でない場合) false : コンソール確認用
     */
    async function selectionWidgetUpdate(widget) {
      // 更新対象判定
      if (
        /**
         * 更新する対象のシェイプやスタイルなど
         */
        widget.type === "SHAPE" &&
        widget.style.shapeType === 3 && // 角丸長方形
        widget.style.backgroundColor === "#d3d3d3" &&
        /**
         * 一括更新条件と更新する対象の条件が一致するウィジェットは処理しない
         */
        widget.style.fontSize !== updateWidgetParam.style.fontSize // フォントサイズの比較
      ) {
          await miro.board.widgets.update({
            id: widget.id, // 更新に必要なウィジェットID
            text: widget.text, // textを更新元ウィジェットから設定しないと削除されるので注意
            style: updateWidgetParam.style,
          });
      }
    }

    //更新処理
    await Promise.all(
      selectionWidgets.map((widget) => selectionWidgetUpdate(widget))
    );
    miro.showNotification(`文字サイズを${updateWidgetParam.style.fontSize}pxに一括変更しました。`);
    fontSize.value = updateWidgetParam.style.fontSize;
  }
}

/*
 * 文字を大きくする
 */
async function selectionWidgetsFontLargerUpdate() {
  const selectionWidgets = await miro.board.selection.get(); // 選択しているウィジェットの取得
  const fontSizeArray = [10, 12, 14, 18, 24, 36, 48, 64, 80, 144, 288];

  // 選択しているウィジェットデータの有無確認
  if (selectionWidgets.length) {

    /**
     * 一括更新:ウィジェットパラメータ
     */
    /**********************************/
    const updateWidgetParam = {
      style: {
        // 最大文字サイズ：288px
        fontSize:  fontSizeArray.find(x => x > selectionWidgets[0].style.fontSize) < 288
                 ? fontSizeArray.find(x => x > selectionWidgets[0].style.fontSize)
                 : 288,
      },
    };

    /**
     * 更新対象の処理
     *
     * @param object
     * @return mixed (更新対象の場合) object / (更新対象でない場合) false : コンソール確認用
     */
    async function selectionWidgetUpdate(widget) {
      // 更新対象判定
      if (
        /**
         * 更新する対象のシェイプやスタイルなど
         */
        widget.type === "SHAPE" &&
        widget.style.shapeType === 3 && // 角丸長方形
        widget.style.backgroundColor === "#d3d3d3" &&
        /**
         * 一括更新条件と更新する対象の条件が一致するウィジェットは処理しない
         */
        widget.style.fontSize !== updateWidgetParam.style.fontSize // フォントサイズの比較
      ) {
          await miro.board.widgets.update({
            id: widget.id, // 更新に必要なウィジェットID
            text: widget.text, // textを更新元ウィジェットから設定しないと削除されるので注意
            style: updateWidgetParam.style,
          });
      }
    }

    //更新処理
    await Promise.all(
      selectionWidgets.map((widget) => selectionWidgetUpdate(widget))
    );
    miro.showNotification(`文字サイズを${updateWidgetParam.style.fontSize}pxに一括変更しました。`);
    fontSize.value = updateWidgetParam.style.fontSize;
  }
}

/*
 * 文字を小さくする
 */
async function selectionWidgetsFontSmallerUpdate() {
  const selectionWidgets = await miro.board.selection.get(); // 選択しているウィジェットの取得
  const fontSizeArray = [288, 144, 80, 64, 48, 36, 24, 18, 14, 12, 10];

  // 選択しているウィジェットデータの有無確認
  if (selectionWidgets.length) {

    /**
     * 一括更新:ウィジェットパラメータ
     */
    /**********************************/
    const updateWidgetParam = {
      style: {
        // 最小文字サイズ：10px
        fontSize:  fontSizeArray.find(x => x < selectionWidgets[0].style.fontSize) > 10
                 ? fontSizeArray.find(x => x < selectionWidgets[0].style.fontSize)
                 : 10,
      },
    };

    /**
     * 更新対象の処理
     *
     * @param object
     * @return mixed (更新対象の場合) object / (更新対象でない場合) false : コンソール確認用
     */
    async function selectionWidgetUpdate(widget) {
      // 更新対象判定
      if (
        /**
         * 更新する対象のシェイプやスタイルなど
         */
        widget.type === "SHAPE" &&
        widget.style.shapeType === 3 && // 角丸長方形
        widget.style.backgroundColor === "#d3d3d3" &&
        /**
         * 一括更新条件と更新する対象の条件が一致するウィジェットは処理しない
         */
        widget.style.fontSize !== updateWidgetParam.style.fontSize // フォントサイズの比較
      ) {
          await miro.board.widgets.update({
            id: widget.id, // 更新に必要なウィジェットID
            text: widget.text, // textを更新元ウィジェットから設定しないと削除されるので注意
            style: updateWidgetParam.style,
          });
      }
    }

    //更新処理
    await Promise.all(
      selectionWidgets.map((widget) => selectionWidgetUpdate(widget))
    );
    miro.showNotification(`文字サイズを${updateWidgetParam.style.fontSize}pxに一括変更しました。`);
    fontSize.value = updateWidgetParam.style.fontSize;
  }
}

/*
 * 幅一括変更
 */
async function selectionWidgetsWidthUpdate() {
  const selectionWidgets = await miro.board.selection.get(); // 選択しているウィジェットの取得

  // 選択しているウィジェットデータの有無確認
  if (selectionWidgets.length) {
    /**
     * 一括更新:ウィジェットパラメータ
     */
    const updateWidgetParam = {
      width: 140,
    };

    /**
     * 更新対象の処理
     *
     * @param object
     */
    async function selectionWidgetUpdate(widget) {
      // 更新対象判定
      if (
        /**
         * 更新する対象のシェイプやスタイルなど
         */
        widget.type === "SHAPE" &&
        widget.style.shapeType === 3 && // 角丸長方形
        widget.style.backgroundColor === "#d3d3d3" &&
        /**
         * 一括更新条件と更新する対象の条件が一致するウィジェットは処理しない
         */
        widget.width !== updateWidgetParam.width // 幅の比較
      ) {
          await miro.board.widgets.update({
            id: widget.id, // 更新に必要なウィジェットID
            text: widget.text, // textを更新元ウィジェットから設定しないと削除されるので注意
            width: updateWidgetParam.width,
          });
      }
    }

    //更新処理
    await Promise.all(
      selectionWidgets.map((widget) => selectionWidgetUpdate(widget))
    );
    miro.showNotification(`記号幅サイズを${updateWidgetParam.width.toFixed()}pxに一括変更しました。`);
    width.value = updateWidgetParam.width.toFixed();
  }
}

/*
 * 幅を大きくする
 */
async function selectionWidgetsWidthLargerUpdate() {
  const selectionWidgets = await miro.board.selection.get(); // 選択しているウィジェットの取得

  // 選択しているウィジェットデータの有無確認
  if (selectionWidgets.length) {
    /**
     * 一括更新:ウィジェットパラメータ
     */
    const updateWidgetParam = {
      width: selectionWidgets[0].width * 1.2,
    };

    /**
     * 更新対象の処理
     *
     * @param object
     */
    async function selectionWidgetUpdate(widget) {
      // 更新対象判定
      if (
        /**
         * 更新する対象のシェイプやスタイルなど
         */
        widget.type === "SHAPE" &&
        widget.style.shapeType === 3 && // 角丸長方形
        widget.style.backgroundColor === "#d3d3d3" &&
        /**
         * 一括更新条件と更新する対象の条件が一致するウィジェットは処理しない
         */
        widget.width !== updateWidgetParam.width // 幅の比較
      ) {
          await miro.board.widgets.update({
            id: widget.id, // 更新に必要なウィジェットID
            text: widget.text, // textを更新元ウィジェットから設定しないと削除されるので注意
            width: updateWidgetParam.width,
          });
      }
    }

    //更新処理
    await Promise.all(
      selectionWidgets.map((widget) => selectionWidgetUpdate(widget))
    );
    miro.showNotification(`記号幅サイズを${updateWidgetParam.width.toFixed()}pxに一括変更しました。`);
    width.value = updateWidgetParam.width.toFixed();
  }
}

/*
 * 幅を小さくする
 */
async function selectionWidgetsWidthSmallerUpdate() {
  const selectionWidgets = await miro.board.selection.get(); // 選択しているウィジェットの取得

  // 選択しているウィジェットデータの有無確認
  if (selectionWidgets.length) {
    /**
     * 一括更新:ウィジェットパラメータ
     */
    const updateWidgetParam = {
      width: selectionWidgets[0].width * 0.8,
    };

    /**
     * 更新対象の処理
     *
     * @param object
     */
    async function selectionWidgetUpdate(widget) {
      // 更新対象判定
      if (
        /**
         * 更新する対象のシェイプやスタイルなど
         */
        widget.type === "SHAPE" &&
        widget.style.shapeType === 3 && // 角丸長方形
        widget.style.backgroundColor === "#d3d3d3" &&
        /**
         * 一括更新条件と更新する対象の条件が一致するウィジェットは処理しない
         */
        widget.width !== updateWidgetParam.width // 幅の比較
      ) {
          await miro.board.widgets.update({
            id: widget.id, // 更新に必要なウィジェットID
            text: widget.text, // textを更新元ウィジェットから設定しないと削除されるので注意
            width: updateWidgetParam.width,
          });
      }
    }

    //更新処理
    await Promise.all(
      selectionWidgets.map((widget) => selectionWidgetUpdate(widget))
    );
    miro.showNotification(`記号幅サイズを${updateWidgetParam.width.toFixed()}pxに一括変更しました。`);
    width.value = updateWidgetParam.width.toFixed();
  }
}


// /*
//  * async 必須
//  */
// async function selectionWidgetsWidthUpdate() {
//   const selectionWidgets = await miro.board.selection.get(); // 選択しているウィジェットの取得

//   //let updatedWidgetsData = []; // 更新したウィジェットのコンソール確認用データ

//   // 選択しているウィジェットデータの有無確認
//   if (selectionWidgets.length) {
//     //console.log("選択しているウィジェット", selectionWidgets); // 選択しているウィジェットデータ > コンソール

//     /**
//      * 一括更新:ウィジェットパラメータ
//      *
//      * @var object
//      */
//     const updateWidgetParam = {
//       // style: {
//       //   // inputから、未入力は32 デバッグ用
//       //   fontSize: document.getElementById("fontSize").value
//       //     ? Number(document.getElementById("fontSize").value)
//       //     : 32,
//       // },
//       style: {
//         // defaultは64px
//         fontSize: 64,
//       },

//       // // inputから、未入力は64 デバッグ用
//       // width: document.getElementById("width").value
//       //   ? Number(document.getElementById("width").value)
//       //   : 64,

//       //defaultで64px
//       width: 64,
//     };

//     /**
//      * 更新対象の処理
//      *
//      * @param object
//      * @return mixed (更新対象の場合) object / (更新対象でない場合) false : コンソール確認用
//      */
//     async function selectionWidgetUpdate(widget) {
//       let updatedWidget = [false];

//       // 更新対象判定
//       if (
//         /**
//          * 更新する対象のシェイプやスタイルなど
//          */
//         widget.type === "SHAPE" &&
//         widget.style.shapeType === 3 && // 角丸長方形
//         //widget.style.backgroundColor === "#e6e6e6" &&
//         /**
//          * 一括更新条件と更新する対象の条件が一致するウィジェットは
//          * 速度的に処理をしない方が良いと思われます。
//          */
//         (widget.style.fontSize !== updateWidgetParam.style.fontSize || // フォントサイズの比較
//           widget.width !== updateWidgetParam.width) // 幅の比較
//       ) {
//         updatedWidget = await miro.board.widgets.update({
//           id: widget.id, // 更新に必要なウィジェットID
//           text: widget.text, // textを更新元ウィジェットから設定しないと削除されるので注意
//           style: updateWidgetParam.style,
//           width: updateWidgetParam.width,
//         });
//       }

//       //return updatedWidget[0];
//     }

//     /**
//      * 更新処理
//      */
//     const updateMethodType = this.dataset.type;
//     //console.time(updateMethodType); // 更新処理時間計測 : start
//     switch (updateMethodType) {
//       case "parallel":
//         /**
//          * * 並列処理 / Promise.all() : 高速化・比較実用的の方
//          * * 処理するウィジェット数が多いと 「Syncing... Please wait.」が表示され
//          * * 処理中にミロボード（画面）がロックされますが、更新処理は圧倒的にこちらの方が早いです。
//          */
//         //updatedWidgetsData = 
//         await Promise.all(
//           selectionWidgets.map((widget) => selectionWidgetUpdate(widget))
//         );

//         break;

//       default:
//         // case "series": 用
//         /**
//          * ! 直列処理 / for...of : 解説した方
//          * ! 処理中にミロボードが画面ロックせず、その間にボード上で作業ができるようですが
//          * ! 並列処理に比べて8〜10倍、処理に時間が必要です。
//          */
//         for (const widget of selectionWidgets) {
//           updatedWidgetsData.push(await selectionWidgetUpdate(widget));
//         }

//         break;
//     }
//     //console.timeEnd(updateMethodType); // 更新処理時間計測 : end
//   }

//   // 更新したウィジェットのコンソール確認：更新していないウィジェットは削除（集計に含めない）
//   //console.log("更新したウィジェット", updatedWidgetsData.filter(Boolean));
// }