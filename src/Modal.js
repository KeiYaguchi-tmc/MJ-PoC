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