import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import '../assets/styles/App.scss'
import useInitialState from "../hooks/useInitialState";

const API = 'http://localhost:3000/initalState';

const App = () => {
    const initialsate = useInitialState(API);
    return (
        <div className="app">
            <Header />
            <Search />
            {
                initialsate.mylist?.length > 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                    {
                        initialsate.mylist.map(
                            item => <CarouselItem key={item.id} {...item} />
                        )
                    }
                    </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                    {
                        initialsate.trends.map(
                            item => <CarouselItem key={item.id} {...item} />
                        )
                    }
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi Video">
                <Carousel>
                    {
                        initialsate.originals.map(
                            item => <CarouselItem key={item.id} {...item} />
                        )
                    }
                </Carousel>
            </Categories>

            <Footer />
        </div>
    )
}

export default App;