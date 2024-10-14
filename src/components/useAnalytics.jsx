import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useAnalytics = () => {
    const location = useLocation();

    useEffect(() => {
        const sendPageView = () => {
            if (window.gtag) {
                window.gtag('config', 'G-NDP4D5Z4CS', {
                    page_path: location.pathname,
                });
            }
        };
        sendPageView();
    }, [location]);
};

export default useAnalytics;
