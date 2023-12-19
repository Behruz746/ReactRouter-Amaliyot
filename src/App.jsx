import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Form from "./pages/help/Form";
import PageNotFound from "./pages/pageErrorFound/PageNotFound";

import "./sass/App.scss";
import RootLyout from "./layout/RootLyout";
import LayoutContact from "./layout/LayoutContact";

function App() {
  // new React router -v 6.4 with object pathes ⭐✨

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLyout />,

      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <LayoutContact />,
          children: [
            {
              path: "faq",
              element: <Faq />,
            },

            {
              path: "form",
              element: <Form />,
            },
          ],
        },

        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
