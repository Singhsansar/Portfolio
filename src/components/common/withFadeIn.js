import React, { useEffect, useRef, useState } from 'react';

const withFadeIn = (WrappedComponent) => {
    return (props) => {
        const [isVisible, setIsVisible] = useState(false);
        const ref = useRef(null);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                },
                { threshold: 0.2 }
            );

            const currentRef = ref.current;
            if (currentRef) {
                observer.observe(currentRef);
            }

            return () => {
                if (currentRef) {
                    observer.unobserve(currentRef);
                }
            };
        }, []);

        return (
            <div
                ref={ref}
                className={`transition-opacity duration-200 ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transformOrigin: 'center' }}
            >
                <WrappedComponent {...props} />
            </div>
        );
    };
};

export default withFadeIn;
