app.modal = (options = {}) =>
  a["app-modal"](
    a["div.modal"](a["div.modal-dialog"](a["div.modal-content"]), {
      tabindex: -1,
    }),
    {
      id: options.id || "modal",
      $open: (el) => (options = {}) => {
        el.$(".modal-dialog").classList.add(`modal-${options.size || "md"}`);
        el.$(".modal-content").$nodes = [
          a["div.modal-header"]([
            a[".modal-title"](options.title),
            a["button.close"](a['!']("&times;"), { data: { dismiss: "modal" } }),
          ]),
          a["div.modal-body"](options.body),
          options.footer ? a["div.modal-footer"](options.footer) : '',
        ];
        $(el.$(".modal")).modal({ backdrop: "static" });
        el.$(".modal-body *").scrollLeft = 0;
      },
    }
  );
