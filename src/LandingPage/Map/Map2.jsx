const MapSection = () => {
    return (
        <div className={styles.container}>
        <APIProvider apiKey={API_KEY}>
            <Map 
                style={{width: `100vw`, height: '100vh'}}
                defaultCenter={{lat: 22.54992, lng: 0}}
                defaultZoom={3}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                className={styles.map}
            />
        </APIProvider>
    </div>
    )
}

export default MapSection