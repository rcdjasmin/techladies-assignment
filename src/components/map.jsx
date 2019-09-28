import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
         }

    }
    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
    };


    displayMarkers(areas) {
        if (areas.length > 0) {
            return areas.map((area)=> {
                return <Marker
                        key={area.name}
                        id={area.name}
                        forecast={area.forecast}
                        position={{
                            lat: area.location.latitude,
                            lng: area.location.longitude
                        }}
                        onClick={this.onMarkerClick}
                        />
            })
        } else {
            return;
        }

    }

    render() {
        return (
        <React.Fragment>

            <Map
            google={this.props.google}
            zoom={12}
            initialCenter={{lat: 1.3448,lng: 103.8224}}
            onClick={this.onMapClicked}
            style={{
                width: '965px',
                height: '720px'
            }}
            >

            {this.displayMarkers(this.props.areas)}
            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                    <div>
                        <h3 className="map-marker--area">{this.state.selectedPlace.id}</h3>
                        <p className="map-marker--forecast">{this.state.selectedPlace.forecast}</p>
                    </div>
            </InfoWindow>
            </Map>
        </React.Fragment>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDGhSq5Wnx7WVw8BZxssTGKeThVYvOGfHM'
})(MapContainer);