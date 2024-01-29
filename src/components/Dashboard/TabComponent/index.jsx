import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import { createTheme, ThemeProvider } from "@mui/material";
import "./style.css";
import Grid from '../Grid';
import List from '../List';

export default function TabComponent({ coinsList }) {
    const [value, setValue] = useState("grid");

    const style = {
        color: "var(--white)",
        textTransform: "capitalize",
        fontSize: "1.2rem",
        fontWeight: "bold",
        width: "50vw",
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: "#fff200",
            }
        }
    });


    return (
        <ThemeProvider theme={theme}>
            <TabContext value={value}>
                <TabList onChange={(e, newValue) => setValue(newValue)} variant="fullWidth">
                    <Tab label="Grid" value="grid" sx={style} />
                    <Tab label="List" value="list" sx={style} />
                </TabList>

                <TabPanel value="grid">
                    <div className="grid-container">
                        {coinsList.length > 0 ?
                            coinsList.map((coin, idx) => (
                                <Grid key={idx} coin={coin} delay={((idx + 5) % 5) * 0.1} />
                            )) :
                            <h4 className="no-data">No Data Found !</h4>
                        }
                    </div>
                </TabPanel>
                <TabPanel className="list-panel" value="list">
                    <table className="list-table">
                        {coinsList.length > 0 ?
                            coinsList.map((coin, idx) => (
                                <List key={idx} coin={coin} delay={(idx % 10) * 0.1} />
                            )) :
                            <h4 className="no-data">No Data Found !</h4>
                        }
                    </table>
                </TabPanel>
            </TabContext>
        </ThemeProvider>
    );
}