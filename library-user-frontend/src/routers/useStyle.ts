import { useEffect } from 'react';

const useStyle = (href: string) => {
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;

        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, [href]);
};

export default useStyle;
