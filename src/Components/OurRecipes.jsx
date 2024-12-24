import { format } from 'date-fns';
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'

const OurRecipes = () => {
    return (
        <div className="container mx-auto my-24">
            <div className="text-center p-1">
                <h3 className="uppercase">tasty and crunchy</h3>
                <h2 className="uppercase text-4xl font-bold pt-2">Special Recipes</h2>
                <p className="w-3/6 md:mx-auto pt-5 font-thin">In this section, we celebrate the diversity and creativity of food shared through our platform. "Our Special Recipes" showcases unique, delicious meals prepared using surplus ingredients. These recipes not only help reduce food waste but also bring communities together to explore new culinary experiences. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                <div>
                    <img src={blog1} alt="" />
                    <div className='font-thin text-base pt-2'>December {format(new Date(), 'P')} / Healthy</div>
                    <h2 className='uppercase font-bold text-2xl pt-2'>Italian famous pasta with meat and cheese</h2>
                    <p className='font-thin pt-1 text-gray-800'>This classic Italian dish combines the rich flavors of perfectly cooked pasta, tender meat, and melted cheese, creating a comforting and indulgent meal....</p>
                    <p className='pt-2 font-thin text-gray-800'>1 Comment</p>
                </div>
                <div>
                    <img src={blog2} alt="" />
                    <div className='font-thin text-base pt-2'>December {format(new Date(), 'P')} / Recipes</div>
                    <h2 className='uppercase font-bold text-2xl pt-2'>Chocolate truffle cake with honey flavor</h2>
                    <p className='font-thin pt-1 text-gray-800'>Indulge in the decadent delight of a Chocolate Truffle Cake with a unique twist of honey flavor. This luxurious cake features layers of velvety chocolate....</p>
                    <p className='pt-2 font-thin text-gray-800'>2 Comment</p>
                </div>
                <div>
                    <img src={blog3} alt="" />
                    <div className='font-thin text-base pt-2'>December {format(new Date(), 'P')} / Healthy</div>
                    <h2 className='uppercase font-bold text-2xl pt-2'>Chicken soup with spring veggies and pasta</h2>
                    <p className='font-thin pt-1 text-gray-800'>Perfectly moist and beautifully decadent, this cake is ideal for special occasions or as a treat to satisfy your sweet tooth.With its smooth....</p>
                    <p className='pt-2 font-thin text-gray-800'>1 Comment</p>
                </div>
            </div>
        </div>
    );
};

export default OurRecipes;