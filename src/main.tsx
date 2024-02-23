import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider } from "react-router-dom";
import QueryClientProvider from './components/Provider/QueryClientProvider'

import router from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </QueryClientProvider>
);
