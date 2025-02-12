import explore1 from '../assets/explore1.png'
import explore2 from '../assets/explore2.jpg'
import explore3 from '../assets/explore3.jpg'

const ExploreSharing = () => {
    return (
        <div className="container mx-auto max-sm:p-2 mb-10 mt-20">
            <div>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center"><span className="text-violet-600">Explore</span> the Heart of Food <span  >Sharing</span></h2>
                <div className='border-2 border-violet-600 w-[350px] sm:w-[600px] lg:w-[800px] mx-auto mt-3 text-right'></div>
            </div>
            <div className='flex gap-5 md:gap-16 items-center mt-16 max-md:flex-col'>
                <div className='flex-1'>
                    <h2 className="text-2xl sm:text-4xl font-semibold">Community Heroes</h2>
                    <p className="text-lg font-thin pt-3">Discover the inspiring stories of local heroes who are making food sharing a success. From organizing pickups to ensuring zero wastage, these individuals are driving change in their communities.Discover the inspiring stories of local heroes who are making food sharing a success. From organizing pickups to ensuring zero wastage, these individuals</p>
                </div>
                <div className='flex-1'>
                    <img className='rounded-2xl' src={explore1} alt="" />
                </div>
            </div>
            <div className='flex gap-5 md:gap-16 items-center mt-14 max-md:flex-col'>
                <div className='flex-1'>
                    <img className='rounded-2xl' src={explore2} alt="" />
                </div>
                <div className='flex-1'>
                    <h2 className="text-2xl sm:text-4xl font-semibold">Sharing Hubs Across Cities</h2>
                    <p className="text-lg font-thin pt-3">Explore vibrant sharing hubs in various cities, where surplus food meets grateful hands. These hubs are bridging the gap between excess and need, one meal at a time.Explore vibrant sharing hubs in various cities, where surplus food meets grateful hands. These hubs are bridging the gap between excess and need, one meal at a time.</p>
                </div>
            </div>
            <div className='flex gap-5 md:gap-14 items-center mt-16 max-md:flex-col'>
                <div className='flex-1'>
                    <h2 className="text-2xl sm:text-4xl font-semibold">Impact Through Collaboration</h2>
                    <p className="text-lg font-thin pt-3">Collaborate with local businesses and community groups to amplify the impact of food sharing initiatives. Together, we can build a sustainable future where no food goes to waste.Collaborate with local businesses and community groups to amplify the impact of food sharing initiatives. Together, we can build a sustainable future</p>
                </div>
                <div className='flex-1'>
                    <img className='rounded-2xl' src={explore3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ExploreSharing;