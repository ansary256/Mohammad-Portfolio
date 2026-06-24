import { Box } from "@mui/material";
import { useContext } from "react";
import { MainContext } from "../../contexts/MainProvider";




const TabPanel = ({ children, index, other}) => {
    const { pageNumberValue: value } = useContext(MainContext);
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`sidebar-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>{children}</Box>
            )}
        </div>
    )
};
export default TabPanel; 