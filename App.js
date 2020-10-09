import React from "react"
import Buttons from "./Buttons.js";



class App extends React.Component {
    render() {
        return(
            <main>
                <div>
                  <Buttons
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
                 >
                    Default
                  </Buttons>
                </div>
            </main>
        )
    }
}


export default App;