import Banner from "./Banner";
import ExploreSharing from "./ExploreSharing";
import FeaturedFoods from "./FeaturedFoods";
import OurRecipes from "./OurRecipes";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedFoods></FeaturedFoods>
            <ExploreSharing></ExploreSharing>
            <OurRecipes></OurRecipes>
        </div>
    );
};

export default Home;