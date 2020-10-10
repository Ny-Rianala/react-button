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
                      variant="text Disable"
                      size="sm"
                      disable="true"  
                 >
                    Default
                  </Buttons>
                  <Buttons
                      variant="withIcon iconStart"
                      size="lg"
                      
                 >
                    Default
                  </Buttons>
                  <Buttons
                      variant="withIcon iconEnd"
                      size="lg"
                    
                 >
                    Default
                  </Buttons>
                  <Buttons
                      variant="AllSize"
                      size="sm"
                    
                 >
                    Default
                  </Buttons>
                  <Buttons
                      variant="AllSize"
                      size="md"
                    
                 >
                    Default
                  </Buttons>
                  <Buttons
                      variant="AllSize"
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
                      variant="AllSize"
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
                    Default
                  </Buttons>
                  <Buttons
                      variant="hover-focus"
                      size="md"   
                 >
                    Default
                  </Buttons>
                  <Buttons
                      variant="darkbluebutton"
                      size="md"   
                 >
                    Default
                  </Buttons>
                  <Buttons
                      variant="darkSecondary"
                      size="lg"   
                 >
                    Secondary
                  </Buttons>
                  <Buttons
                      variant="darkRedDanger"
                      size="md"   
                 >
                    Default
                  </Buttons>
                </div>
            </main>
        )
    }
}


export default App;