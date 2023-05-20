import Banner from "../Banner/Banner";
import ClientSay from "../ClientSay/ClientSay";
import FeaturedProducts from "../FeaturedProduts/FeaturedProducts";
import Gallery from "../Gallery/Gallery";
import ToysCategory from "../ToysCategory/ToysCategory";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <Gallery></Gallery>
            <FeaturedProducts></FeaturedProducts>
            <ClientSay></ClientSay>
            <ToysCategory></ToysCategory>
          
        </div>
    );
};

export default Home;