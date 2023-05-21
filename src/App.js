import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Link, Outlet } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './Home';
import About from './About';
import ErrorPage from './ErrorPage';
import BlogPost from './BlogPost';
import CategoriesPage from './CategoriesPage';
import KawaiiDanishPastelEtc from './ProductCategories/KawaiiDanishPastelEtc';
import ModernMinimalistScandinavianEtc from './ProductCategories/ModernMinimalistScandinavianEtc';
import CottagecoreGothBiophilicGrungeEtc from './ProductCategories/CottagecoreGothBiophilicGrungeEtc';
import LuxuryHighEndExpensiveEtc from './ProductCategories/LuxuryHighEndExpensiveEtc';
import BohemianMaximalistEclecticEtc from './ProductCategories/BohemianMaximalistEclecticEtc';
import GamingRoomWorkSpacesEtc from './ProductCategories/GamingRoomWorkSpacesEtc';
import CharacterThemedEtc from './ProductCategories/CharacterThemedEtc';
import LEDNeonsColorsEtc from './ProductCategories/LEDNeonsColorsEtc';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<ErrorPage />}/>
        <Route path="/blogpost" element={<BlogPost />}/>
        <Route path="/CategoriesPage" element={<CategoriesPage />}/>
        <Route path="/Categories/KawaiiDanishPastelEtc" element={<KawaiiDanishPastelEtc />}/>
        <Route path="/Categories/ModernMinimalistScandinavianEtc" element={<ModernMinimalistScandinavianEtc />}/>
        <Route path="/Categories/CottagecoreGothBiophilicGrungeEtc" element={<CottagecoreGothBiophilicGrungeEtc />}/>
        <Route path="/Categories/LuxuryHighEndExpensiveEtc" element={<LuxuryHighEndExpensiveEtc />}/>
        <Route path="/Categories/BohemianMaximalistEclecticEtc" element={<BohemianMaximalistEclecticEtc />}/>
        <Route path="/Categories/GamingRoomWorkSpacesEtc" element={<GamingRoomWorkSpacesEtc />}/>
        <Route path="/Categories/CharacterThemedEtc" element={<CharacterThemedEtc />}/>
        <Route path="/Categories/LEDNeonsColorsEtc" element={<LEDNeonsColorsEtc />}/>
        </Route>
        )
)

  return (
  <RouterProvider router={router} />
  );

  }
export default App;
