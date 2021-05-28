import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import { Provider as AuthProvider } from "next-auth/client";
import localstorage from "../storage/localstorage";
import { hydrate } from "../slices/basketSlice";

store.subscribe(() => {
  localstorage.set("basket", JSON.stringify(store.getState().basket));
});
var basket = localstorage.get("basket");
basket = basket ? JSON.parse(basket) : { items: [] }; store.dispatch(hydrate(basket));

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>);
};

export default MyApp;