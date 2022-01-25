import Layout from '../components/shared/Layout'
import ContentsLayout from '../components/shared/ContentsLayout';
import youtubeData from '../data/youtubeData.json';
import ExploreCard from "../components/explore/ExploreCard";
import HomeFilter from "../components/home/HomeFilter";
import React, {useState } from 'react';

function Home() {
    const [filter, setFilter] = useState('');
    function changeFilter(value){
        setFilter(value);
    }

    return (
        <Layout activeMenu="home">
            <HomeFilter clickfn={changeFilter}/>
            <ContentsLayout>
                {youtubeData['data'].map(function (data, index) {
                    return <ExploreCard key={`explore-card-${index}`} data={data} />;
                })}
            </ContentsLayout>
        </Layout>
    )
}

export default Home;