app.admin.blueprints.about.icon = (router) => (a, x) => {

  return [
    a({
      $tag: 'div',
      style: 'display: inline-block; vertical-align: top;',
      $init: (el) => {
        el.$load()
      },
      id: 'iconIframe',
      $load: (el) => () => {
        el.innerHTML = '';
        var iframe = document.createElement("iframe");
        iframe.height = 75
        iframe.width = 75
        var content = `
        <html>
        <style>
        img {
            position: absolute;
            top:  50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
        </style>
        <body>
        <img src="/api/blueprints/${router.params.blueprintIdentifier}/icon/bordered" height='0' width='0'></img>
        <img src="/api/blueprints/${router.params.blueprintIdentifier}/icon"></img>
        </body>
        </html>`;
        el.appendChild(iframe);
        var iframeDocument = iframe.contentDocument;
        iframeDocument.open();
        iframeDocument.writeln(content);
        iframeDocument.close();
      },
    }),
    a.div([
      x.filepond({
        inputTag: {
          name: 'icon',
        },
        filepond: {
          credits: false,
          labelIdle: 'Drop icon file, or <span class="filepond--label-action">browse</span>.',
          labelTapToUndo: '',
          server: {
            process: {
              url: `/api/blueprints/${router.params.blueprintIdentifier}/icon`,
              method: 'PUT',
              onload: () => {
                iconIframe.$load()
              }
            },
          }
        },
      })
    ], {
      style: 'display: inline-block; vertical-align: top; width: 300px;',
    }),
    a.div(
      app.button({
        label: app.icon('fa fa-check', 'Done'),
        onclick: () => router.open('..'),
        class: 'btn btn-primary',
      }),
    )
  ]

}
