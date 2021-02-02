import react, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
const style = {
  width: "500px",
  height: "350px",
};

const containerStyle = {
  position: "relative",
  width: "500px",
  height: "350px",
};
export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        onClick={this.onMapClicked}
        style={style}
        containerStyle={containerStyle}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDQ6AUDe1LdzB4oIQDFIdDCCxiRIkjLVT8",
})(MapContainer);
