app.polling = (route, success, options = {}) => (a, x) =>
  a["app-polling"](a._, {
    $init: (el) => () => {
      el.$check();
    },
    $wait: (el) => () => {
      el.$nodes = [app.polling.wait()];
    },
    $check: (el) => () => {
      el.$nodes = [app.polling.check(route, success, options)];
    },
  });
