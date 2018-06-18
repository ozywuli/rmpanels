import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PanelToggle extends Component {
    static propTypes = {
        activePanel: PropTypes.number,
        toggleActivePanel: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    } 
    
    /**
     * Click handler for the panel-toggle anchor element
     * @param {object} event the native event object returned by a click
     * @returns {undefined}
     */
    onClickHandler(event) {
        event.preventDefault();

        // Toggle the active panel
        this.props.toggleActivePanel();
    }

    /**
     * Handle the `activePanel` state by returning a + or - string character
     * @returns {string} + or - string character 
     */
    handleActivePanelState() {
        return this.props.activePanel === 0 ? '-' : '+';
    }

    render() {
        return (
            <a 
                href="#" 
                className="panel-toggle"
                onClick={this.onClickHandler}
            >
                {this.handleActivePanelState()}
            </a>
        )
    }
}

export default PanelToggle;
