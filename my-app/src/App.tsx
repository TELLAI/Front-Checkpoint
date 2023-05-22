import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from "@apollo/client";
import Continents from "./pages/Continents";
import {Route, Routes} from "react-router";
import OneContinent from "./pages/OneContinent";
import {BrowserRouter as Router}  from "react-router-dom";

const httpLink = createHttpLink({
    uri: "https://countries.nausicaa.wilders.dev/",
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

function Main() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route element={<Continents/>} path="/"/>
                    <Route path="/continent/:id" element={<OneContinent/>}/>
                </Routes>
            </Router>

            <Continents/>
        </div>
    );
}

function App() {
    return (
        <ApolloProvider client={client}>
            <Main/>
        </ApolloProvider>
    );
}

export default App;
