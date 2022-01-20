import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import "./Giamgia.css";
import Iphone from './Iphone';
import Samsung from './Samsung';
import Oppo from './Oppo';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function LabTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <TabContext value={value}>
                <AppBar position="static">
                    <TabList onChange={handleChange} aria-label="simple tabs example">
                        <Tab className='button' label="Iphone" value="1" />
                        <Tab label="Samsung" value="2" />
                        <Tab label="Oppo" value="3" />
                    </TabList>
                </AppBar>
                <TabPanel value="1">
                    <Iphone />
                </TabPanel>
                <TabPanel value="2"><Samsung /></TabPanel>
                <TabPanel value="3"><Oppo /></TabPanel>
            </TabContext>
        </div>
    );
}
