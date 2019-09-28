import React, { Component } from 'react';
class AreasList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        if(this.props.areas.length > 0) {
            return (
                <div>
                    <ul>
                        {this.props.areas.map((area)=>{
                            return (
                                <li key={area.index}>
                                {area.name}<br/>
                                <small>{area.forecast}</small>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        } else {
            return null;
        }

    }
}

export default AreasList;