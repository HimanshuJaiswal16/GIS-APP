function LayerPanel() {
    return (
        <div className="layer-panel-wrapper">
            <div className="header">
                <span className="header-logo">
                    <span className="gis">Gis</span>
                    System
                </span>
            </div>

            <div className="search-wrap">
                <input type="text" placeholder="Search Address or Place" />
            </div>

            <div className="layer-panel">
                <h6>Layer Panel</h6>

                <p className="active-panel">Active Panel</p>
                <div className="card-wrapper">
                    <div className="cards">
                        <div className="card-header">
                            <p className="card-header-name">
                                <svg fill="#ffffff" width="800px" height="800px" viewBox="0 0 32 32" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        <title>stack2</title>
                                        <path
                                            d="M28.608 11.246l-12.608-8.632-12.608 8.632 12.608 8.631 12.608-8.631zM16 21.803l-11.129-7.338-1.479 1.535 12.608 8.631 12.608-8.631-1.499-1.568-11.109 7.371zM16 26.559l-11.129-7.338-1.479 1.535 12.608 8.631 12.608-8.631-1.499-1.568-11.109 7.371z" />
                                    </g>
                                </svg>
                                Layer 1
                            </p>
                            <div className="card-tools">
                                {/* Eye Icon */}
                                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <title>eye</title>
                                    <path
                                        d="M0 16q0.064 0.128 0.16 0.352t0.48 0.928 0.832 1.344 1.248 1.536 1.664 1.696 2.144 1.568 2.624 1.344 3.136 0.896 3.712 0.352 3.712-0.352 3.168-0.928 2.592-1.312 2.144-1.6 1.664-1.632 1.248-1.6 0.832-1.312 0.48-0.928l0.16-0.352q-0.032-0.128-0.16-0.352t-0.48-0.896-0.832-1.344-1.248-1.568-1.664-1.664-2.144-1.568-2.624-1.344-3.136-0.896-3.712-0.352-3.712 0.352-3.168 0.896-2.592 1.344-2.144 1.568-1.664 1.664-1.248 1.568-0.832 1.344-0.48 0.928zM10.016 16q0-2.464 1.728-4.224t4.256-1.76 4.256 1.76 1.76 4.224-1.76 4.256-4.256 1.76-4.256-1.76-1.728-4.256zM12 16q0 1.664 1.184 2.848t2.816 1.152 2.816-1.152 1.184-2.848-1.184-2.816-2.816-1.184-2.816 1.184l2.816 2.816h-4z" />
                                </svg>

                                {/* Info Icon */}
                                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,15a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0ZM12,8a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,8Z" />
                                </svg>

                                {/* Close Icon */}
                                <svg width="800px" height="800px" className="close" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        <g id="Menu / Close_LG">
                                            <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                                                stroke="#B0AFAF" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>

                        <div className="card-body">
                            <p>
                                <span className="color-box"></span>
                                Legend 1
                            </p>

                            <p>
                                <span className="color-box"></span>
                                Legend 2
                            </p>
                        </div>
                    </div>

                    <div className="cards">
                        <div className="card-header">
                            <p className="card-header-name">
                                <svg fill="#ffffff" width="800px" height="800px" viewBox="0 0 32 32" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        <title>stack2</title>
                                        <path
                                            d="M28.608 11.246l-12.608-8.632-12.608 8.632 12.608 8.631 12.608-8.631zM16 21.803l-11.129-7.338-1.479 1.535 12.608 8.631 12.608-8.631-1.499-1.568-11.109 7.371zM16 26.559l-11.129-7.338-1.479 1.535 12.608 8.631 12.608-8.631-1.499-1.568-11.109 7.371z" />
                                    </g>
                                </svg>
                                Layer 2
                            </p>
                            <div className="card-tools">
                                {/* Eye Icon */}
                                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <title>eye</title>
                                    <path
                                        d="M0 16q0.064 0.128 0.16 0.352t0.48 0.928 0.832 1.344 1.248 1.536 1.664 1.696 2.144 1.568 2.624 1.344 3.136 0.896 3.712 0.352 3.712-0.352 3.168-0.928 2.592-1.312 2.144-1.6 1.664-1.632 1.248-1.6 0.832-1.312 0.48-0.928l0.16-0.352q-0.032-0.128-0.16-0.352t-0.48-0.896-0.832-1.344-1.248-1.568-1.664-1.664-2.144-1.568-2.624-1.344-3.136-0.896-3.712-0.352-3.712 0.352-3.168 0.896-2.592 1.344-2.144 1.568-1.664 1.664-1.248 1.568-0.832 1.344-0.48 0.928zM10.016 16q0-2.464 1.728-4.224t4.256-1.76 4.256 1.76 1.76 4.224-1.76 4.256-4.256 1.76-4.256-1.76-1.728-4.256zM12 16q0 1.664 1.184 2.848t2.816 1.152 2.816-1.152 1.184-2.848-1.184-2.816-2.816-1.184-2.816 1.184l2.816 2.816h-4z" />
                                </svg>

                                {/* Info Icon */}
                                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,15a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0ZM12,8a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,8Z" />
                                </svg>

                                {/* Close Icon */}
                                <svg width="800px" height="800px" className="close" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        <g id="Menu / Close_LG">
                                            <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                                                stroke="#B0AFAF" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>

                        <div className="card-body">
                            <p>
                                <span className="color-box"></span>
                                Legend 1
                            </p>

                            <p>
                                <span className="color-box"></span>
                                Legend 2
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LayerPanel;