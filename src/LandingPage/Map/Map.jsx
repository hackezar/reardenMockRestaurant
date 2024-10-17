import {APIProvider} from '@vis.gl/react-google-maps';


import styles from "./Map.module.css";

const Map = () => {
    return (
        <APIProvider apiKey={"AIzaSyC6vP3BUPx9TMCWTstQfABImHdZ8F63ZyI"} onLoad={() => console.log('Maps API has loaded.')}></APIProvider>
    )
}

export default Map;