import HeroSection from './HeroSection';
import ProductCard from './ProductCard';
import Tags from './Tags';
import BlogPost from './BlogPost';

function Home(){
    return(
  <>
  <HeroSection />
  <ProductCard />
  <Tags />
  <ProductCard />
  <BlogPost />
  </>
    )
}
export default Home;