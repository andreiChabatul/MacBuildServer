'use client'

const OPEN_WIDTH = 500;

import { useState, useEffect } from 'react';

export const useShowBurger = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = (event: Event) => {
            const target = event.target as Window
            setWidth(target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        width,
        isShowBurger: width <= OPEN_WIDTH
    };
};