import React, { useState, useEffect } from 'react';
import { Button, Paper, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import axios from "axios";
import UserAgent from './NetworkInfo/UserAgent';

const DataPoints = () => {
    const [dataPoints, setDataPoints] = useState(null);
    const [ip, setIP] = useState("");

    const getData = async () => {
        const res = await axios.get("https://api.ipify.org/?format=json");
        setIP(res.data.ip);
    };

    const handleRefresh = () => {
        fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=b5c4ed14297a4882a23033d182d540a4&ip_address=${ip}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setDataPoints(data)
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }

    useEffect(() => {
        getData();
        fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=b5c4ed14297a4882a23033d182d540a4&ip_address=${ip}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setDataPoints(data)
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }, []);

    return (
        <>
            <Button size="large" variant='outlined' sx={{marginBottom: 2}} onClick={handleRefresh}>Refresh<RefreshIcon /></Button>
            <Paper elevation={3}
                sx={{
                    borderRadius: 8,
                    backgroundColor: "black",
                    padding: 3,
                    fontFamily: "monospace",
                    fontSize: 20
                }}
            >
                <Typography variant="h6" gutterBottom fontWeight="bold">Networking Info</Typography>
                <Typography variant="body2" gutterBottom fontFamily="'Courier New', monospace">IP Address: {ip}</Typography>
                <Typography variant="body2" gutterBottom fontFamily="'Courier New', monospace">User Agent: <UserAgent /></Typography>
                {dataPoints && (
                    <>
                        <Typography variant="body2" gutterBottom fontFamily="'Courier New', monospace">City: {dataPoints.city}</Typography>
                        <Typography variant="body2" gutterBottom fontFamily="'Courier New', monospace">Region: {dataPoints.region}</Typography>
                        <Typography variant="body2" gutterBottom fontFamily="'Courier New', monospace">Country: {dataPoints.country}</Typography>
                        <Typography variant="body2" gutterBottom fontFamily="'Courier New', monospace">Continent: {dataPoints.continent}</Typography>
                    </>
                )}
            </Paper>
        </>
    );
};

export default DataPoints;