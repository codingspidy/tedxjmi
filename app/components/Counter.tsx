'use client'
import { NextComponentType } from 'next'
import React from 'react'
import { useEffect, useState } from 'react';

const Counter: NextComponentType = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
    }, [timeLeft]);

    return (
        <div className="counter absolute py-3 inset-x-0 bottom-0 z-[2] border-t bg-gradient-to-b backdrop-blur-2xl border-t-neutral-800 bg-zinc-800/30 from-inherit dark:bg-zinc-800/30 text-white flex items-center gap-x-10 justify-center">
            <div className="counter-item flex flex-col items-center">
                <span className="value text-[24px] md:text-[36px] font-[600]">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="label uppercase text-[8px] md:text-[10px]">Days</span>
            </div>

            <div className="counter-item flex flex-col items-center">
                <span className="value text-[24px] md:text-[36px] font-[600]">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="label uppercase text-[8px] md:text-[10px]">Hours</span>
            </div>

            <div className="counter-item flex flex-col items-center">
                <span className="value text-[24px] md:text-[36px] font-[600]">
                    {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="label uppercase text-[8px] md:text-[10px]">Minutes</span>
            </div>

            <div className="counter-item flex flex-col items-center">
                <span className="value text-[24px] md:text-[36px] font-[600]">
                    {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="label uppercase text-[8px] md:text-[10px]">Seconds</span>
            </div>
        </div>
    );
}

export default Counter

export type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate() + 2;

    const difference = +new Date(`${year}-${month}-${day}`) - +new Date();

    let timeLeft: TimeLeft = {} as TimeLeft;

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return timeLeft;
};

