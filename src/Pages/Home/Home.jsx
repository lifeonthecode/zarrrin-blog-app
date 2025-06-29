import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Technology from '../../Components/Technology/Technology';
import RecentPost from '../../Components/RecentPost/RecentPost';

const Home = () => {
    return (
        <div>

            {/* banner component  */}
            <div>
                <Banner></Banner>
            </div>

            {/* banner component  */}
            <div>
                <Technology/>
            </div>

            {/* banner component  */}
            <div>
                <RecentPost/>
            </div>
        </div>
    );
};

export default Home;