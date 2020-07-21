import React from 'react';
import './footerComponent.css'
import "bootstrap/dist/css/bootstrap.min.css";

const FooterComponent = () => {
    return (
        <footer className="bd-footer text-muted">
            <div className="container-fluid p-3 p-md-5">
                <p>
                    Copyright related stuff here.
                </p>
            </div>
        </footer>
    );
}

export default FooterComponent;