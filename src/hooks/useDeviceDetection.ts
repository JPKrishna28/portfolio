import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if the user is on a mobile device
 * @param breakpoint - Width in pixels to consider as mobile (default: 1024)
 * @returns boolean - true if mobile, false if desktop
 */
export const useDeviceDetection = (breakpoint: number = 1024): boolean => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        // Initial check
        const checkDevice = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        // Check on mount
        checkDevice();

        // Add event listener for window resize
        window.addEventListener('resize', checkDevice);

        // Cleanup
        return () => window.removeEventListener('resize', checkDevice);
    }, [breakpoint]);

    return isMobile;
};
