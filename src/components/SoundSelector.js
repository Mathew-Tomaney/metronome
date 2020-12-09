function SoundSelector(props) {


    return(
        <>
        <select onChange= {props.handleSoundChange}>
            <option selected disabled> Select sound... </option>
            {props.sounds.map(sound => {
                return <option value={sound.url}> {sound.name} </option>
            })}
        </select>
        
            {/* <input onChange={handleSoundChange}type="radio" id="wow" name="soundChoice" value="Wow" checked/>
            <label for="wow">Wow</label>
            <input type="radio" id="beep" name="soundChoice" value="Beep"/>
            <label for="beep">Beep</label> */}
        </>
    );
};
export default SoundSelector;