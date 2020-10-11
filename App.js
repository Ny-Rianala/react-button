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
                    Default
                  </Buttons>
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
                      variant="Disable"
                      size="sm"
                      disable 
                 >
                    Disable
                  </Buttons>
                  <Buttons
                      StartIcon="local_grocery_store"
                      size="lg" 
                 >  
                    Default
                    
                  </Buttons>
                  <Buttons
                      StartIcon="local_grocery_store"
                      size="lg"
                    
                 >
                    Default
                  </Buttons>
                  <Buttons
                      variant="AllButtonSizes"
                      size="sm"  
                 >
                    Default
                  </Buttons>
                  <Buttons
                      variant="AllButtonSizes"
                      size="md"
                 >
                    Default
                  </Buttons>
                  <Buttons
                      variant="AllButtonSizes"
                      size="lg"
                    
                 >
                    Default
                  </Buttons>
                  <Buttons
                      variant="default"
                      size="md"
                 >
                    Default
                  </Buttons>
                  <Buttons
                      variant="primary"
                      size="md"
                 >
                    Default
                  </Buttons>
                  <Buttons
                      variant="secondary"
                      size="lg"
                    
                 >
                    Secondary
                  </Buttons>
                  <Buttons
                      variant="danger"
                      size="md"
                 >
                    Danger
                  </Buttons>
                </div>
            </main>
        )
    }
}


export default App;