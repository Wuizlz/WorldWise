import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";

import { CitiesProvider } from "./context/CitiesContext";
import { AuthProvider } from "./context/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import { Suspense } from "react";

// dist/assets/index-c849b75a.css   30.24 kB │ gzip:   5.06 kB
// dist/assets/index-54109bd5.js   510.18 kB │ gzip: 148.92 kB

const Homepage = lazy(() => import(`./pages/Homepage`));
const Product = lazy(() => import(`./pages/Product`));
const Pricing = lazy(() => import(`./pages/Pricing`));
const Login = lazy(() => import(`./pages/Login`));
const AppLayout = lazy(() => import(`./pages/AppLayout`));
const PageNotFound = lazy(() => import(`./pages/PageNotFound`));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="/" element={<Homepage />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="product" element={<Product />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    {" "}
                    <AppLayout />{" "}
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route
                  path="cities"
                  element={<CityList cities></CityList>}
                ></Route>
                <Route path="cities/:id" element={<City />}>
                  {" "}
                </Route>
                <Route
                  path="countries"
                  element={<CountryList> </CountryList>}
                ></Route>
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
