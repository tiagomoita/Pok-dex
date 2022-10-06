import React from 'react';
import Styles from "./App.styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
import Home from './screens/Home';
import Details from './screens/Details';
import Favourites from './screens/Favourites';
import { Provider as MainProvider } from './context/MainContext';

const queryClient = new QueryClient()

//Main App Routing with 3 Routes, QueryClientProvider in order to use react-query library and the Main Provider from Context API

function App() {
  return (
    <>
      <MainProvider>
        <QueryClientProvider client={queryClient}>
          <Styles>
            <BrowserRouter>
                  <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/details"} element={<Details />} />
                    <Route path={"/favourites"} element={<Favourites />} />
                    <Route element={<> Error page </>} />
                  </Routes>
            </BrowserRouter>
          </Styles>
        </QueryClientProvider>
      </MainProvider>
    </>
  );
}

export default App;
