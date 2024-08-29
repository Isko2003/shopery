import { useEffect, useState } from "react";

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate - now;

            let timeLeft = {};

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

        const targetDate = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000); // 5 days
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ display: 'flex', fontSize: '20px' }}>
            <div className="flexCenter flex-col">
                <span className="text-primary">{timeLeft.days || '00'}</span>
                <p className="countTime">days</p>
            </div>
            <div className="text-gray-400" style={{ margin: '0 5px' }}>:</div>
            <div className="flexCenter flex-col">
                <span className="text-primary">{timeLeft.hours || '00'}</span>
                <p className="countTime">hours</p>
            </div>
            <div className="text-gray-400" style={{ margin: '0 10px' }}>:</div>
            <div className="flexCenter flex-col">
                <span className="text-primary">{timeLeft.minutes || '0'}</span>
                <p className="countTime">mins</p>
            </div>
            <div className="text-gray-400" style={{ margin: '0 10px' }}>:</div>
            <div className="flexCenter flex-col">
                <span className="text-primary">{timeLeft.seconds || '0'}</span>
                <p className="countTime">secs</p>
            </div>
        </div>
    );
};

export default CountdownTimer;
