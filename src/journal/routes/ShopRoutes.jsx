import { Route, Routes, Navigate } from "react-router-dom";
import { ShopPage } from "../pages/ShopPage";




export const ShopRoutes = () => {
  return (
    <Routes> 
        <Route path="/" element={ <ShopPage /> } />
        <Route path="/*" element={ <Navigate to ="/" /> } />
    </Routes>
  )
}
