import {RouterProvider} from "react-router-dom"
import { mainRoutes } from "./routes/mainRoutes";
import { Provider } from "react-redux/es/exports";
import { store } from "./global/store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
let persistor = persistStore(store)

const App = ()=>{
  return (
    <div>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={mainRoutes} />
      </PersistGate>
    </Provider>
    </div>
  )
}

export default App;
