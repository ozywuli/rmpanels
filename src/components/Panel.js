import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Panel extends Component {
    static propTypes = {
        id: PropTypes.number,
        activePanel: PropTypes.number,
        panelContent: PropTypes.string
    }

    constructor(props) {
        super(props)
        this.handleIsActiveClass = this.handleIsActiveClass.bind(this);
    } 


    /**
     * Adds an `is-active` class to an element depending on the activePanel id
     * @returns {string} Either `is-active` or empty string
     */
    handleIsActiveClass() {
        return this.props.id === this.props.activePanel ? 'is-active' : ''
    }
    
    render() {
        // Conditional panel content
        let panelContent;

        // Set conditional panel content
        if (this.handleIsActiveClass()) {
            panelContent = this.props.panelContent;         
        }

        return (
            <div className={`panel ${this.handleIsActiveClass()}`}>
                {panelContent}
            </div>
        )
    }
}

export default Panel;
