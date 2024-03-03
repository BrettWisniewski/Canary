import React, { useState, useEffect } from 'react';
import { Button, Paper, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

const ProjectLog = () => {
    const [data, setData] = useState(null);

    const handleLoad = () => {
        fetch(`https://api.github.com/repos/BrettWisniewski/Canary/commits`)
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
            <Button size="large" variant='outlined' sx={{marginBottom: 2}} onClick={handleLoad}>Load Data<RefreshIcon /></Button>
            <Paper elevation={3}
                sx={{
                    borderRadius: 8,
                    backgroundColor: "black",
                    padding: 3,
                    fontFamily: "monospace",
                    fontSize: 20
                }}
            >
                <Typography variant="h6" gutterBottom fontWeight="bold">Github Data:</Typography>
                {data && (
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                    {data.map((commit, index) => (
                      <li key={commit.sha} style={{ marginBottom: '10px' }}>
                        <strong>{commit.commit.author.name}</strong> committed on{' '}
                        {new Date(commit.commit.author.date).toLocaleString()}:
                        <br />
                        <a href={commit.html_url} target='_blank' rel="noopener noreferrer">{commit.commit.message}</a>
                      </li>
                    ))}
                  </ul>
                )}
            </Paper>
        </>
    );
};

export default ProjectLog;