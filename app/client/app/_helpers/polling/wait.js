app.polling.wait = () => 
  a["app-polling-wait"](
    app.spinner(
      a({
        $text: (el) =>
          `Try again in ${el.$count} second${el.$count === 1 ? "" : "s"}`,
        $count: 8,
        $init: (el) => setInterval(() => {
          el.$count--
          el.$render()
        }, 1000),
      })
    ),
    {
      $init: (el) => setTimeout(() => el.$("^app-polling").$check(), 8000),
    }
  );
