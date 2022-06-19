import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./../Reducers/index";
import { persistStore } from "redux-persist";

const middlewares = [thunkMiddleware],
  composedWithDevtools = composeWithDevTools(applyMiddleware(...middlewares)),
  createStoreWithMiddleware = composedWithDevtools(createStore),
  configureStore = (initialState) => {
    const store = createStoreWithMiddleware(rootReducer, initialState),
      persistor = persistStore(store);
    return { store, persistor };
  };

export default configureStore;
