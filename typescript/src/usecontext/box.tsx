import { useContext } from "react";
import { ThemeContext } from "./themecontext";  // Capitalize 'C' in ThemeContext

export const Box = () => {
    const theme = useContext(ThemeContext);  // Capitalize 'C' here as well
    return (
        <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>
            Theme context nnnn
        </div>
    );
};
