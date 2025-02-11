import Lottie from 'lottie-react';
import noDataFound from '../../assets/Lottie/nodata.json';

const NoDataFound = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center">
                <Lottie
                    animationData={noDataFound}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
        </div>

    );
};

export default NoDataFound;
