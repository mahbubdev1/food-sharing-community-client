const About = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-violet-600">
                        About Us
                    </h2>
                    <p className="mt-4  mx-auto w-2/3 text-black">
                        Welcome to <strong>Food Sharing BD</strong>, where we aim to reduce food waste and 
                        support our community by sharing surplus food with those in need. Together, we can create 
                        a positive impact and build a better tomorrow.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-8">
                    {/* Card 1 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full sm:w-1/3">
                        <h3 className="text-xl font-semibold text-violet-500 mb-2">
                            Our Mission
                        </h3>
                        <p className="text-gray-700">
                            To eliminate food waste by connecting donors with recipients, 
                            ensuring that surplus food is distributed to those who need it the most.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full sm:w-1/3">
                        <h3 className="text-xl font-semibold text-violet-500 mb-2">
                            Our Vision
                        </h3>
                        <p className="text-gray-700">
                            To create a sustainable and food-secure society where no food goes to waste 
                            and every individual has access to nutritious meals.
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full sm:w-1/3">
                        <h3 className="text-xl font-semibold text-violet-500 mb-2">
                            How We Work
                        </h3>
                        <p className="text-gray-700">
                            Through our easy-to-use platform, donors can list surplus food, and recipients 
                            can find available food in their locality, ensuring fast and efficient sharing.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
