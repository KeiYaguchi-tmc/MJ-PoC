const init = {
    //スマホ版子画面表示
    guidebookModal: () => {
        const modal = document.getElementById("sumahoguidebook")
        modal.addEventListener('click', func.guidebookModal_display);
    },
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
    //アプリが動かない場合(再インストール)
    boardReinstallModal: () => {
        const modal = document.getElementById("board-reinstall-method")
        modal.addEventListener('click', func.boardReinstallModal_display);
    },
    //ToolTips(はてなマーク)
    // boardReinstallModal: () => {
    //     const help = {
    //         help1: "help1",
    //         help2: "help2",
    //         help3: "help3",
    //         help4: "help4",
    //     }
    //     for (let key in help) {
    //         var obj = document.getElementById(help[key]).getElementsByTagName("li");
    //         var length = obj.length;
    //         for (var i = 0; i < length; i++) {
    //             obj.item(i).onmouseover = function () {
    //                 var element = document.createElement("div");
    //                 element.innerHTML = this.getAttribute('data-text');
    //                 element.className = `${help[key]}-tooltips`;
    //                 this.appendChild(element);
    //             }
    //             obj.item(i).onmouseout = function () {
    //                 this.removeChild(this.childNodes.item(this.childNodes.length - 1));
    //             }
    //         }
    //     }
    // },
}

const func = {
    guidebookModal_display: () => {
        miro.board.ui.openModal("QRchord.html", { width: 280, height: 330 });
        console.log("QRコード表示。")
    },
    kojoModal_display: () => {
        miro.board.ui.openModal("UseKojomark.html", { width: 1000, height: 600 });
        console.log("工場マークの使い方を表示します。")
    },
    boardShareEditModal_display: () => {
        miro.board.ui.openModal("sharedmethods.html", { width: 670, height: 350 });
        console.log("ボードの共同編集方法を表示します。")
    },
    boardReinstallModal_display: () => {
        miro.board.ui.openModal("reinstallmethods.html", { width: 670, height: 200 });
        console.log("再インストール方法を表示します。")
    },
}

//DOMツリーロード時に実行
//スマホ版子画面表示
document.addEventListener('DOMContentLoaded', () => init.guidebookModal())
//工場マーク
document.addEventListener('DOMContentLoaded', () => init.kojoModal())
//ボードの共同編集方法
document.addEventListener('DOMContentLoaded', () => init.boardShareEditModal())
//アプリが動かない場合(再インストール)
document.addEventListener('DOMContentLoaded', () => init.boardReinstallModal())