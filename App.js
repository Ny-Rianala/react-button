import React from "react"
import Buttons from "./Buttons.js";



class App extends React.Component {
    render() {
        return(
            <main>
                <div>
                  <button className="btnDefault">Default</button>
                  <button className="btnDefault btnHover" type="button hover">Default</button>
                </div>
                <div>
                  <button className="btnDefault btnOutline">Default</button>
                  <button className="btnDefault ">Default</button>
                </div>
            </main>
        )
    }
}


export default App;