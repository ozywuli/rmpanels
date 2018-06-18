import React, { Component } from 'react';
import Header from './Header';
import Panel from './Panel';
import PropTypes from 'prop-types';

class Dashboard extends Component {
    static propTypes = {
        content: PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {
            activePanel: 0
        }
        this.toggleActivePanel = this.toggleActivePanel.bind(this);
    }

    /**
     * Toggles the activePanel boolean state
     * @return {undefined}
     */
    toggleActivePanel() {
        let activePanel = this.state.activePanel ? 0 : 1;
        this.setState({activePanel})
    }

    /**
     * Push content values into an array
     * @return {array} An array of content
     */
    contentArray() {
        let tempArray = [];
        tempArray.push(this.props.content.contentA);
        tempArray.push(this.props.content.contentB);

        return tempArray;
    }

    render() {
        return (
            <div className="dashboard">
                <Header 
                    headerData={this.props.content.headerData}
                    activePanel={this.state.activePanel}
                    toggleActivePanel={this.toggleActivePanel}
                />
                <div className="panels">
                    {
                        this.contentArray().map((item, index) => {
                            return <Panel 
                                key={index}
                                id={index}
                                activePanel={this.state.activePanel}
                                panelContent={item}
                            />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Dashboard;