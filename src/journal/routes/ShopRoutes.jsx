import { Route, Routes, Navigate } from "react-router-dom";
import { ProductsUserPage } from "../pages/products/ProductsUserPage";
import { ShopPage } from "../pages/ShopPage";




export const ShopRoutes = () => {
  return (
    <Routes> 
        <Route path="/" element={ <ShopPage /> } />
        <Route path="/products" element={ <ProductsUserPage /> } />
        <Route path="/*" element={ <Navigate to ="/" /> } />
    </Routes>
  )
}
