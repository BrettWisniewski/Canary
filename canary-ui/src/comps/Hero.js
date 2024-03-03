import React, { useState, useEffect } from 'react';
import Speedometer from './items/Speedometer';
import { Container, Typography, Paper } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Calculations from './items/Calculations';
import EmailConfig from './EmailConfig';
import ComputerInfo from './ComputerInfo';
import DataPoints from './DataPoints';
import Chart from './items/Chart'

const Hero = (props) => {
    const [Value, setValue] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setValue((prevValue) => (prevValue < 100 ? prevValue + 1 : 0));
        }, 100);
        return () => clearInterval(intervalId);
    }, []);

    const calculateBorderColor = (value) => {
        const hue = 120 - (value / 100) * 120;
        return `hsl(${hue}, 100%, 50%)`;
    };

    const calculateBackgroundColor = (value) => {
        const normalizedValue = value - 70;
        const hue = normalizedValue * (5.0 / 2.0);
        
        return `hsl(0, 100%, ${normalizedValue}%)`;
      };
      

    const containerStyle = {
        padding: 30,
        marginTop: 16,
        borderRadius: 15,
        border: `2px solid ${calculateBorderColor(Value)}`,
    }

    useEffect(() => {
        fetch("http://localhost:5000/main-value")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }, []);

    const [tabValue, setTabValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    if (Value > 70) {
        document.body.style.backgroundColor = calculateBackgroundColor(Value);
    } else {
        document.body.style.backgroundColor = "#121212";
    }

    return (
        <>
            <Container>
                <Paper elevation={3} style={containerStyle}>
                    <Typography variant="h2" gutterBottom fontWeight="bold">Canary</Typography>
                    <Typography variant="h6" gutterBottom><Calculations /></Typography>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Network Stability" value="1" />
                                <Tab label="Data Points" value="2" />
                                <Tab label="Computer Information" value="3" />
                                <Tab label="Email Config" value="4" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Typography variant="h5" gutterBottom>Network Stability Score:</Typography>
                            <Speedometer value={Value} />
                        </TabPanel>
                        <TabPanel value="2">
                            <Typography variant="h5" gutterBottom>Data Points:</Typography>
                            <DataPoints />
                        </TabPanel>
                        <TabPanel value="3">
                            <Typography variant="h5" gutterBottom>Computer Information:</Typography>
                            <ComputerInfo />
                        </TabPanel>
                        <TabPanel value="4">
                            <Typography variant="h5" gutterBottom>Email Config:</Typography>
                            <EmailConfig emailProps={props.emailProps}/>
                        </TabPanel>
                    </TabContext>
                </Paper>
            </Container>
        </>
    );
};

export default Hero;