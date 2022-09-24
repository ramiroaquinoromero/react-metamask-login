import React from 'react'

function Footer() {
    return (
        <>
            <div className="overlay toggle-icon"></div>
            <a href="javascript:;" className="back-to-top"><i className='bx bxs-up-arrow-alt'></i></a>
            <footer className="page-footer">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item">Visit us:
                        </li>
                        <li className="list-inline-item"><a rel="noopener noreferrer" target="_blank" href="https://www.joinbootup.com/" className="text-stats-youtube"><i className="bx bxl-redux me-1"></i>WebSite</a>
                        </li>
                    </ul>
                    <p className="mb-0">© 2022.Bootup</p>
                </div>
            </footer>
        </>
    )
}

export default Footer