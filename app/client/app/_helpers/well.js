app.well = (node, options={}) => a['app-well']([
 a['button.float-right.close'](
   '×',
   {
     style: {marginTop: '-0.1rem'},
     $on: {
       'click': (e, el) => {
         let wellEl = el.$('^.well')
         wellEl.$nodes = []
         wellEl.remove()
       }
     },
     ...options.buttonTag,
   }
 ),
 a['pre.error.m-0.mr-4']([node]),
], {
  class: 'mb-1',
  ...options.wellTag,
})
