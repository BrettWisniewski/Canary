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
import DataPoints from './DataPoints';
import Chart from './items/Chart'

const Hero = (props) => {
    const [someValue, setValue] = useState(0);
    const zerosArray = Array.from({ length: 40 }, () => 0);
    const [dataArray, setDataArray] = useState(zerosArray)
    const [jitterValue, setJitterValue] = useState(someValue)

    const makeJitterValue = (some) => {
        const direction = Math.random() > 0.5 ? 1 : -1;
        const jitter = Math.random() * 4 * direction;
        let newValue = some + jitter;
        newValue = Math.max(0, Math.min(newValue, 100));
        newValue = Math.round(newValue);
        return newValue;
    };
      

    useEffect(() => {
        const intervalId = setInterval(() => {
            fetch("http://localhost:5000/mainvalue")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setValue(data.mainvalue)
                setJitterValue(data.mainvalue)
                setDataArray((prevArray) => {
                    const newArray = [data.mainvalue, ...prevArray.slice(0, -1)];
                    return newArray;
                });
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
            const newJitterValue = makeJitterValue(someValue)
            setJitterValue(newJitterValue)
            setDataArray((prevArray) => {
                const newArray = [newJitterValue, ...prevArray.slice(0, -1)];
                return newArray;
              });
        }, 500);
        return () => clearInterval(intervalId);
    }, []);

    const calculateBorderColor = (value) => {
        const hue = 120 - (value / 100) * 120;
        return `hsl(${hue}, 100%, 50%)`;
    };

    const calculateBackgroundColor = (value) => {
        const normalizedValue = value - 70;        
        return `hsl(0, 100%, ${normalizedValue}%)`;
      };
      
    const containerStyle = {
        padding: 30,
        marginTop: 16,
        borderRadius: 15,
        border: `2px solid ${calculateBorderColor(someValue)}`,
    }

    const [tabValue, setTabValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    if (someValue > 70) {
        document.body.style.backgroundColor = calculateBackgroundColor(someValue);
    } else {
        document.body.style.backgroundColor = "#121212";
    }

    return (
        <>
            <Container sx={{marginBottom: 4}}>
                <Paper elevation={3} style={containerStyle}>
                    <Typography variant="h2" gutterBottom fontWeight="bold">Canary</Typography>
                    <Typography variant="h6" gutterBottom><Calculations /></Typography>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Network Stability" value="1" />
                                <Tab label="Data Points" value="2" />
                                <Tab label="Email Config" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Typography variant="h5" gutterBottom>Network Stability Score:</Typography>
                            <Speedometer value={jitterValue} />
                            <Chart some={dataArray}/>
                        </TabPanel>
                        <TabPanel value="2">
                            <Typography variant="h5" gutterBottom>Data Points:</Typography>
                            <DataPoints />
                        </TabPanel>
                        <TabPanel value="3">
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