import React from 'react';

const Gmap = React.createClass({

    getDefaultProps() {
        return{
        }
    },
    
    getInitialState(){
        return{
          canvasMap: null,
          markers: [],
          token: ''
        }
    },
    
    componentWillUnmount() {
        this.state.markers.forEach(marker => marker.setMap(null));
        this.setState({markers: []});
        this.state.canvasMap.clearOverlays();
    },

    componentDidMount() {
        this.createMap()
    },

    createMap() {
        let markersData = 
        [{
            id: 0,
            lat: '52.536442713519584',
            long: '13.246550429546673'
        },{
            id: 1,
            lat: '52.51313680847127',
            long: '13.393239602464208'
        }];
        var mapOptions = {
          zoom: 13,
          center: new google.maps.LatLng(52.516843, 13.383301)
        };

        this.setState({
            canvasMap: new google.maps.Map(this.refs.canvasMap, mapOptions)
        }, () => {
            this.createMarkers(markersData);
        });
    },

    createMarkers(markers) {
        var oldMarkers = $.extend([], this.state.markers);
        var newMarkers = markers.map(marker => new google.maps.Marker({
          position: new google.maps.LatLng(marker.lat, marker.long),
          map: this.state.canvasMap
        }));
        this.setState({markers: oldMarkers.concat(newMarkers)});
    },

    render() {
        return (
            <div className="fullscreen-map" ref="canvasMap"></div>
        );
    }
});

export default Gmap;