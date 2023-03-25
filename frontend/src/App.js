import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsByCategoryId from './pages/productsByCategoryId/ProductsByCategoryId';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Newsletter from './components/footer/newsletter/Newsletter';
import AppContext from './utils/context';
import ProductSingle from './pages/productSingle/ProductSingle';



function App() {
  return (
    <div>
        <BrowserRouter>
            <AppContext>
                <Header/>
                <Routes>
                    <Route exact path={'/'} element={<Home/>} />      
                    <Route exact path={'/category/:id'} element={<ProductsByCategoryId/>} />
                    <Route exact path={'/product/:id'} element={<ProductSingle/>} />
                </Routes>
                <Newsletter/>
                <Footer/>
            </AppContext>
        </BrowserRouter>
    </div>
  );
}

export default App;
