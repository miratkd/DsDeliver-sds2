import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => {
    return (
        <ContentLoader
            speed={1}
            width={1000}
            height={160}
            viewBox="0 0 1000 160"
            backgroundColor="#da5c5c"
            foregroundColor="#ecebeb"
        >
            <rect x="270" y="0" rx="3" ry="3" width="500" height="10" />
            
        </ContentLoader>
    )
}

export default Loader;