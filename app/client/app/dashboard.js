app.dashboard = (router) => (a,x) => a.div([

  app.fetch({
    url: '/api/system',
    placeholder: a['div.text-center'](app.spinner('Loading system')),
    success: (system, el) => el.$nodes = a["app-system"](
      x.panes(
        {
          proximate: app.dashboard.menu(router),
          adjacent: [

            (system.label && system.label.text) ?
            a['div.container-fluid.mb-1'](
              system.label.text,
              { style: {
                textAlign: 'center',
                fontSize: '1.5rem',
                padding: '0.5rem',
                color: system.label.color,
                backgroundColor: system.label.background_color
              } }
            ) :
            a._,

            a['div.container-fluid.position-relative'](
              app.dashboard.system(router)
            )
          ],
          percent: window.localStorage.systemMenuWidthPercent || '33',
          panesTag: {
            $on: {
              'ax.appkit.panes.resize': (e, el) => {
                const panesPercent = e.detail.percent
                window.localStorage.systemMenuWidthPercent = panesPercent
              }
            }
          }
        }
      ),
      // {
      //   id: 'system',
      //   $state: system
      // }
    ),
  })


])
