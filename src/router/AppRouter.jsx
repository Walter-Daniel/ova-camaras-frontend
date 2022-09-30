import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { ShopRoutes } from "../journal/routes/ShopRoutes";


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={ <AuthRoutes /> } />
        <Route path="*" element={ <ShopRoutes /> }/>
    </Routes>
  )
}
