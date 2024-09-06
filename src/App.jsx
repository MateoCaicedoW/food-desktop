import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes, HashRouter, Link } from 'react-router-dom';
import Layout from './components/ui/Layout.jsx';
import Home from './components/home/Home.jsx';
import Overview from './components/overview/Overview.jsx';
import ProductsComponent from './components/products/Products.jsx';
export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout/>} >
                    <Route index element={<Home />} />
                    <Route path='/overview' element={<Overview />} />
                    <Route path="/products" element={<ProductsComponent />} />
                </Route >

                <Route path="*" element={
                    <div>
                        <Link to="/">Go back</Link>
                        <h1>404 Not Found</h1>
                    </div>
                } />
            </Routes>
        </HashRouter>
    )
}