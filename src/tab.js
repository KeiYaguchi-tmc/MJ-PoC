const tab = {
  btn: {
    els: document.querySelectorAll(".tab-ctrl-btn"), // tab control button
    data: "tabTarget", // dataset name
    active: "active", // actice class name
    hover: "hover", // mouseenter/hover class name
    out: "out", // mouseleave/hover-out class name
    click: (e) => {
      const $ = tab; // self::tab
      const btn = e.target; // clicked btn

      $.btn.els.forEach((node) => {
        if (node.isEqualNode(btn)) {
          node.classList.add($.btn.active);
        } else {
          node.classList.remove($.btn.active);
        }
      });

      const targetIndex = btn.dataset[$.btn.data];
      $.content.els.forEach((node) => {
        if (node.dataset[$.content.data] == targetIndex) {
          node.classList.add($.content.show)
        } else {
          node.classList.remove($.content.show)
        }
      });
    },
    mouseenter: (e) => {
      const $ = tab.btn; // self::tab.btn
      const btn = e.target; // clicked btn

      $.els.forEach((node) => {
        if (node.isEqualNode(btn)) {
          node.classList.add($.hover);
        } else {
          node.classList.add($.out);
        }
      });
    },
    mouseleave: () => {
      const $ = tab.btn; // self::tab.btn

      $.els.forEach((node) => {
        node.classList.remove($.hover);
        node.classList.remove($.out);
      });
    }
  },
  content: {
    els: document.querySelectorAll(".tab-content"), // tab content
    data: "tabIndex", // dataset name
    show: "show", // show class name
  },
  init: () => {
    const $ = tab; // self::tab
    let count = 0;
    let first = {}; // first content element

    /**
     * init control btns
     */
    $.btn.els.forEach((node) => {
      if (node.classList.contains($.btn.active)) {
        count++;
      }
      if (node.dataset[$.btn.data] == 1) {
        first = node;
      }
      node.addEventListener("click", (e) => $.btn.click(e));
      node.addEventListener("mouseenter", (e) => $.btn.mouseenter(e));
      node.addEventListener("mouseleave", () => $.btn.mouseleave());
    });

    if (count > 1) {
      $.btn.els.forEach((node) => {
        if (node.dataset[$.btn.data] != 1) {
          node.classList.remove($.btn.active);
        }
      });
    }

    if (count === 0) {
      first.classList.add($.btn.active);
    }

    /**
     * init tab contents
     */
    count = 0;
    first = {};
    $.content.els.forEach((node) => {
      if (node.classList.contains($.content.show)) {
        count++;
      }
      if (node.dataset[$.content.data] == 1) {
        first = node;
      }
    });

    if (count > 1) {
      $.content.els.forEach((node) => {
        if (node.dataset[$.content.data] != 1) {
          node.classList.remove($.content.show);
        }
      });
    }

    if (count === 0) {
      first.classList.add($.content.show);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => tab.init());