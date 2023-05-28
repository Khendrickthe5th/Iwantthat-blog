import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';
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
import Release001 from './blog/Release001';
import BlogMain from './BlogMain';
import Disclaimer from './Disclaimer';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route basename="Iwantthat-blog" path="/" element={<RootLayout />}>
        <Route path="/Iwantthat-blog/" element={<Home />}/>
        <Route path="/Iwantthat-blog/about" element={<About />}/>
        <Route path="*" element={<ErrorPage />}/>
        <Route path="/blogpost" element={<BlogPost />}/>
        <Route path="/Iwantthat-blog/CategoriesPage" element={<CategoriesPage />}/>
        <Route path="/Iwantthat-blog/Categories/KawaiiDanishPastelEtc" element={<KawaiiDanishPastelEtc />}/>
        <Route path="/Iwantthat-blog/Categories/ModernMinimalistScandinavianEtc" element={<ModernMinimalistScandinavianEtc />}/>
        <Route path="/Iwantthat-blog/Categories/CottagecoreGothBiophilicGrungeEtc" element={<CottagecoreGothBiophilicGrungeEtc />}/>
        <Route path="/Iwantthat-blog/Categories/LuxuryHighEndExpensiveEtc" element={<LuxuryHighEndExpensiveEtc />}/>
        <Route path="/Iwantthat-blog/Categories/BohemianMaximalistEclecticEtc" element={<BohemianMaximalistEclecticEtc />}/>
        <Route path="/Iwantthat-blog/Categories/GamingRoomWorkSpacesEtc" element={<GamingRoomWorkSpacesEtc />}/>
        <Route path="/Iwantthat-blog/Categories/CharacterThemedEtc" element={<CharacterThemedEtc />}/>
        <Route path="/Iwantthat-blog/Categories/LEDNeonsColorsEtc" element={<LEDNeonsColorsEtc />}/>
        <Route path="/Iwantthat-blog/blog/Release001" element={<Release001 />}/>
        <Route path="/Iwantthat-blog/blog" element={<BlogMain />}/>
        <Route path="/Iwantthat-blog/disclaimer" element={<Disclaimer />}/>
        </Route>
        )
)

  return (
  <RouterProvider router={router} />
  );

  }
export default App;
