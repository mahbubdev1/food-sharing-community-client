import loading from '../../assets/loading.gif';
const Loader = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <img className='w-64' src={loading} alt="" />
        </div>
    );
};

export default Loader;