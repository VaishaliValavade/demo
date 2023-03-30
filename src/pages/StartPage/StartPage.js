import { useCallback, useState } from "react";

function StartPage() {
    const ddlist = ["Select...", "Red", "Brown", "Blue", "Yellow", "Green"];

    const [name, setName] = useState("");
    const [ddselect, setDDSelect ] = useState(ddlist[0]);

    const handleChange = useCallback((event) => {
        const value = event.target.value.trim();
        setName(value);
      }, []);

  return (
    <>
        <div>

            <div>
                <p>Enter your name...</p>
                <input type="text" onChange={handleChange} value={name}/>
            </div>
            <div>
            <p>Select value from the dropdown... </p>
            
                <select 
                    value={ddselect}
                    onChange={e => setDDSelect(e.target.value)}>
                    {ddlist.map((value) => ( <option value={value} key={value}>{value}</option>))}
                </select>
            </div> 

            { 
                name !== '' && ddselect !== "Select..." &&
                <p> {name} has selected {ddselect} colour.</p>
            }
        </div>
    </>
  );
}


export default StartPage;
