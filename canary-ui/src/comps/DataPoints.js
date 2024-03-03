import React, { useState, useEffect } from 'react';
import { Button, Paper, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
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
    }, []);

    return (
        <>
            <Button size="large" variant='outlined' sx={{marginBottom: 2}} onClick={handleRefresh}>Load Data<DownloadIcon /></Button>
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
                        <Typography variant="h6" gutterBottom fontWeight="bold">Approximate Mapping:</Typography>
                        <Typography variant="body2" gutterBottom fontFamily="'Courier New', monospace">({dataPoints.longitude}, {dataPoints.latitude})</Typography>
                        <iframe
                            title="Google Maps"
                            width="600"
                            height="450"
                            loading="lazy"
                            allowFullScreen
                            style={{ margin: 'auto', display: 'block', borderRadius: 16}}
                            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3056.521071164178!2d${dataPoints.longitude}!3d${dataPoints.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1709467764059!5m2!1sen!2sus`}
                        ></iframe>
                    </>
                )}
            </Paper>
        </>
    );
};

export default DataPoints;