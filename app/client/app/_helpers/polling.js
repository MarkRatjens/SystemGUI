app.polling = (route, success, options = {}) => 
  a["app-polling"]([], {
    $init: (el) => {
      el.$check();
    },
    $wait: (el) => () => {
      el.$nodes = [app.polling.wait()];
    },
    $check: (el) => () => {
      el.$nodes = [app.polling.check(route, success, options)];
    },
  });
