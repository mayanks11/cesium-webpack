import * as Cesium from "cesium";
import "cesium/Widgets/widgets.css";

// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token
export default function App(){

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1OWUxNy1mMWZiLTQzYjYtYTQ0OS1kMWFjYmFkNjc5YzciLCJpZCI6NTc3MzMsImlhdCI6MTYyNzg0NTE4Mn0.XcKpgANiY19MC4bdFUXMVEBToBmqS8kuYpUlxJHYZxk';

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Cesium.Viewer('root', {
terrainProvider: Cesium.createWorldTerrain(),
shouldAnimate: true

});

viewer.clock.multiplier = 100;
viewer;
return null;

}