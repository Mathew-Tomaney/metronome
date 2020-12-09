function IntervalSelector(props) {
    return(
        <input onChange={props.handleIntervalChange} type="range" id="bpm" min="40" max="218"/>
    );
    
};
export default IntervalSelector;