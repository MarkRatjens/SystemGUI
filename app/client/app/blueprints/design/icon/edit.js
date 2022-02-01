app.blueprints.design.icon.edit = (route) => (a, x) => [
  app.float({
    left: [
      a({
        $nodes: (el) => [
          a({
            $tag: 'iframe',
            class: 'border border-1',
            id: 'iconFrameRaw',
            src: `/api/blueprints/@${route.params.blueprintIdentifier}/icon/raw`,
            height: 258,
            width: 258,
            $on: {
              'load: style iframe': (e, el) => {
                const new_style_element = document.createElement("style");
                new_style_element.textContent = "img {height: 256px; width: 256px;}"
                el.contentDocument.head.appendChild(new_style_element);
              },
            },
          }),
          a({
            $tag: 'iframe',
            id: 'iconFrameThumbnail',
            src: `/api/blueprints/@${route.params.blueprintIdentifier}/icon/thumbnail`,
            height: 0,
            width: 0,
            style: {border: 'none'},
          }),
          a({
            $tag: 'iframe',
            id: 'iconFrameBordered',
            src: `/api/blueprints/@${route.params.blueprintIdentifier}/icon/bordered`,
            height: 0,
            width: 0,
            style: {border: 'none'},
          }),
          a.div([
            x.filepond({
              inputTag: {
                name: 'icon',
              },
              filepondTag: {
                id: 'iconUploader',
              },
              filepond: {
                credits: false,
                labelIdle: 'Drop icon file, or <span class="filepond--label-action">browse</span>.',
                labelTapToUndo: '',
                allowRevert: false,
                server: {
                  process: {
                    url: `/api/blueprints/@${route.params.blueprintIdentifier}/icon`,
                    method: 'PUT',
                    onload: () => setTimeout(() => {
                      let iconUploader = document.querySelector('#iconUploader')
                      if (!iconUploader) return
                      let filepond = iconUploader.$filepond
                      if (filepond.getFiles().length != 0) {
                        for (let i = 0; i <= filepond.getFiles().length - 1; i++) {
                          filepond.removeFile(filepond.getFiles()[0].id)
                        }
                      }
                      iconFrameRaw.contentWindow.location.reload(true)
                      iconFrameThumbnail.contentWindow.location.reload(true)
                      iconFrameBordered.contentWindow.location.reload(true)

                    }, 1500)
                  },
                }
              },
            })
          ], {
            style: 'width: 300px;',
          }),
        ],
        class: 'p-1',
      }),
    ],
    right: [
      app.button({
        label: app.icon('fa fa-trash'),
        title: 'Delete icon',
        onclick: (e, el) => route.open('delete'),
        class: 'btn btn-outline-danger',
      }),
    ],
  }),

  a.p(
    app.button({
      label: app.icon('fa fa-check', 'Done'),
      onclick: (e, el) => route.open('..'),
      class: 'btn btn-primary',
    }),
  )
]
