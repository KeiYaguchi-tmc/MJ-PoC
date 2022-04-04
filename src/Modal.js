const init = {
    modal: () => {
        const kojo = document.getElementById("factorymark")
        kojo.addEventListener('click', func.displaymodal);
    },
}

const func = {
    displaymodal: () => {
        miro.board.ui.openModal("UseKojomark.html", { width: 1000, height: 600 });
        console.log("工場マークの使い方を表示します。")
    }
}

document.addEventListener('DOMContentLoaded', () => init.modal())

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