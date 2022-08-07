import ReactDOM from "react-dom/client";
import App from "./app";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Detail from "./components/Detail";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DndProvider backend={HTML5Backend}>
              <App />
            </DndProvider>
          }
        />
        <Route path=":type/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
