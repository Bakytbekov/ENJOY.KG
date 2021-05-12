import React, {useState} from 'react';
import AnimationCard from './AnimationCard/AnimationCard';
import Footer from './Footer/Footer';
import Section from './Section/Section';
import Filter from './TopicList/Filter';
import TopicList from './TopicList/TopicList';


const Home = () => {

    return (
        <>
          <Section/>  
          <Filter />
          <AnimationCard/>
          <TopicList/>
        </>
    );
};

export default Home;