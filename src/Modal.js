const init = {
    //工場マークの出し方説明
    kojoModal: () => {
        const modal = document.getElementById("factorymark")
        modal.addEventListener('click', func.kojoModal_display);
    },
    //ボードの共同編集方法
    boardShareEditModal: () => {
        const modal = document.getElementById("board-share-edit-method")
        modal.addEventListener('click', func.boardShareEditModal_display);
    },
}

const func = {
    kojoModal_display: () => {
        miro.board.ui.openModal("UseKojomark.html", { width: 1000, height: 600 });
        console.log("工場マークの使い方を表示します。")
    },
    boardShareEditModal_display: () => {
        miro.board.ui.openModal("(仙石さんが作ったhtml)", { width: 1000, height: 600 });
        console.log("ボードの共同編集方法を表示します。")
    },
}

//DOMツリーロード時に実行
//工場マーク
document.addEventListener('DOMContentLoaded', () => init.modal())
//ボードの共同編集方法
document.addEventListener('DOMContentLoaded', () => init.boardShareEditModal())

/*スマホ版子画面表示*/
const open = {
    modal: () => {
        const guidebook = document.getElementById("sumahoguidebook")
        guidebook.addEventListener('click', funce.displaymodal);
    },
}

const funce = {
    displaymodal: () => {
        miro.board.ui.openModal("QRchord.html", { width: 280, height: 330 });
        console.log("QRコード表示。")
    }
}

document.addEventListener('DOMContentLoaded', () => open.modal())