import React, { Suspense } from "react";
const Header = React.lazy(() => import("../../app-front/src/Header.jsx"));

const App = () => {
    return (
        <div>
            <Suspense fallback={<div>Chargement...</div>}>
                <Header />
            </Suspense>
            <h2>Application Hôte</h2>
        </div>
    );
};

export default App;
