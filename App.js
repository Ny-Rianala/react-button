import React from "react"
import Buttons from "./Buttons.js";
import "./index.css";



class App extends React.Component {
    render() {
        return(
            <main>
                <div>
                  <Buttons
                      variant="hover"
                      size="sm"
                  >
                    Default
                  </Buttons>
                  <Buttons
                      variant="outline"
                      size="sm" 
                  >
                    Default</Buttons>
                  <Buttons 
                      variant="text"
                      size="sm" 
                 >
                    Default
                        </Buttons>
                  <Buttons
                      variant="DisableShadow"
                      size="sm" 
                 >
                    Default
                  </Buttons>
                  <Buttons
                      variant="text disable"
                      size="sm"
                      disable="true"
                 >
                    Default
                  </Buttons>
                  
                </div>
            </main>
        )
    }
}


export default App;