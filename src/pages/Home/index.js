import React, { useState } from 'react';
import SectionHome from '../../sections/Home';
import ComponentNavigationBar from '../../components/NavigationBar';
import ComponentMenuLogin from '../../components/MenuLogin';



export default function Home() {

    const [toggle, setToggle] = useState({
        menu: false
    })

    const ToggleContext = React.createContext({
        menu: false
    })

    return (
        <>
            <ToggleContext.Provider value={{ toggle, setToggle }}>
                <ToggleContext.Consumer>
                    {
                        ( {toggle, setToggle} ) => (
                            <>
                                <ComponentNavigationBar {...{ toggle, setToggle }} />
                                <ComponentMenuLogin {...{ toggle, setToggle }} />
                                <SectionHome />
                            </>
                        )
                    }
                </ToggleContext.Consumer>
            </ToggleContext.Provider>
        </>
    );
}
