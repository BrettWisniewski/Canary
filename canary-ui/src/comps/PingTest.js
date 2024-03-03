import React, { useEffect, useState } from 'react';
import { Button, Paper, Typography, TextField } from '@mui/material';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

const PingTest = () => {
    const [data, setData] = useState(null);

    const handleLoad = () => {
        fetch(`https://geonet.shodan.io/api/geoping/8.8.8.8`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data)
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }
  return (
      <>
       <Button size="large" variant='outlined' sx={{marginBottom: 2}} onClick={handleLoad}>Run Test<DirectionsRunIcon /></Button>
       <Paper elevation={3}
                sx={{
                    borderRadius: 8,
                    backgroundColor: "black",
                    padding: 3,
                    fontFamily: "monospace",
                    fontSize: 20
                }}
            >
                <Typography variant="h6" gutterBottom fontWeight="bold">Ping Data:</Typography>
                {data && (
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                    {data.map((entry, index) => {
                    var latitude = entry.from_loc.latlon.split(",")[0]
                    var longitude = entry.from_loc.latlon.split(",")[1]
                    return (
                      <div key={index}>
                        <Typography variant='body1' fontFamily="'Courier New', monospace">
                            {entry.packets_sent} packets sent {entry.packets_received} received {entry.packet_loss}% loss from {' '}
                            <a href={`https://www.google.com/maps/@${latitude},${longitude},14z?entry=ttu`} target='_blank'>
                                {entry.from_loc.city} {entry.from_loc.country}
                            </a>{' '}avg. {entry.avg_rtt}ms
                        </Typography>
                      </div>
                    )})}
                  </ul>
                )}
            </Paper>
       </>
  );
};

export default PingTest;
