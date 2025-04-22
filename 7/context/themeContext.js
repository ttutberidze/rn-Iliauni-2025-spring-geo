import { createContext, useContext, useState } from "react";
import { Appearance } from "react-native";

const themeConfig = {
    light: {
        color: 'darkgreen',
        backgroundColor: 'lightgreen'
    },
    dark: {
        color: 'lightgreen',
        backgroundColor: 'darkgreen'
    }
}

const currentTheme = Appearance.getColorScheme()
console.log(currentTheme)

const ThemeContext = createContext(themeConfig[currentTheme])

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(themeConfig[currentTheme]);

    const toggle = () => {
        setTheme((prevTheme) => {
            if(prevTheme === themeConfig.light) {
                return themeConfig.dark
            }
            return themeConfig.light
        })
    }

    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeContextProvider