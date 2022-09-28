import React, { createElement as e, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return e("div", { className: "container" }, [
    e("h1", { className: "text-3xl font-bold underline", key: 0 }, `Test ${count}`),
    e(
      "button",
      {
        className: "py-2 px-4 border",
        key: 1,
        onClick: () => setCount(count+1),
      },
      "Hi React"
    ),
  ]);
}

export default App;
