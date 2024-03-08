'use client'

const SCREEN_XXL = 1400;
const SCREEN_XXXL = 1700;

import { useState, useEffect } from 'react';

export const useResize = () => {
    if (typeof window !== 'undefined') {
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
            amount: calcAmount(width)
        };
    } else return {
        width: '',
        amount: 2
    }

    function calcAmount(width: number) {
        if (width > SCREEN_XXXL) return 4;
        if (width < SCREEN_XXXL && width > SCREEN_XXL) return 3;
        return 2;
    }
};