import React, { Component } from 'react';
import PanelToggle from './PanelToggle';
import PropTypes from 'prop-types';

class Header extends Component {
    static propTypes = {
        headerData: PropTypes.array,
        activePanel: PropTypes.number,
        toggleActivePanel: PropTypes.func
    }

    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <header className="header">
                <div className="header-container">
                    {
                        this.props.headerData.map((item, index) => {
                            return <div 
                                key={index}
                                className="header-block mod-data"
                            >
                                {item}
                            </div>
                        })
                    }
                    <div className="header-block">
                        <PanelToggle 
                            activePanel={this.props.activePanel}
                            toggleActivePanel={this.props.toggleActivePanel}
                        />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;

