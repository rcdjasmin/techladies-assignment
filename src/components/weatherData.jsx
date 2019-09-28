import React, { Component } from 'react';
import MapContainer from './map';
import '../styles/weatherPage.css';
import AreasList from './list';

class WeatherData extends Component {
    constructor() {
        super();
        this.state = {
            areas: {},
            names: [],
            forecasts: []
         };
    }

    componentDidMount(){
        fetch('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast')
        .then(results => results.json())
        .then((data) => {
            let names = data.area_metadata.map((area) => {
                return area.name;
            });
            let forecasts = data.area_metadata.map((area,index) => {
                return ({
                    name: area.name,
                    location: area.label_location,
                    forecast: data.items[0].forecasts[index].forecast
                });
            });

            this.setState({
                areas: data.area_metadata,
                names: names,
                forecasts: forecasts
            });
        });

    }
    render() {
        return (
            <React.Fragment>

            <div className="weather-page-container">
                <div>
                    <AreasList areas={this.state.forecasts}/>
                </div>
                <div>
                    <MapContainer areas={this.state.forecasts}/>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default WeatherData;