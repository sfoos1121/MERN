import React, { useState } from 'react';

const Tabsdisplay = (props) => {
    
    //
    const [tabsHandler, setTabshandler] = useState({
        style: "tab",
        text: "no"
    });

    //This is what we want to display
    const [tabsMode, setTabsMode] = useState ({
        style: "tab 1",
        text: "Tab 1 content is showing here",
    })   

    const toggleTabs = (e) => {
    //     setTabshandler({
    //     text: e.target.value + "tab",
    //     style: e.target.value,
    //     })
    // }

    setTabsMode({
        style: tabsMode.style,
        text: `${e.target.value} content is showing here`
        })
    }

    const styleTabsMode = {
        display: "inline-flex",
        marginTop: "2em",
    }

    return (
        <div className="main">
            <div style={styleTabsMode}>
                <div>
                    <input onClick={toggleTabs} name="tab" type="button" value="Tab 1"></input>
                </div>
                <div>
                    <input onClick={toggleTabs} name="tab" type="button" value="Tab 2"></input>
                </div>
                <div>
                    <input onClick={toggleTabs} name="tab" type="button" value="Tab 3"></input>
                </div>               
            </div>
            <p>{tabsMode.text}</p>
        </div>
    );

}

export default Tabsdisplay;