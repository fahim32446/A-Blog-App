import React from 'react'
import { Stack, Button, Box, Paper, Grid, Typography, InputBase, List, ListItem, ListItemButton, ListItemText } from '@mui/material';


const Sidebar = () => {
  const Categories = ['Home', 'News', 'Story', 'Sports']

  return (
    
    <>
      <Box>
        <Stack direction="row">
          <Box sx={{ backgroundColor: '#fff', padding: '3px 15px', borderRadius: '5px', border: '1px solid gray', marginRight: '5px' }}>
            <InputBase placeholder='Search...' />
          </Box>
          <Button size="small" variant="outlined">Search</Button>
        </Stack>
      </Box>

      <Paper>
        <Typography sx={{ backgroundColor: 'lightblue', color: 'white', padding: '5px 10px 5px 10px', marginTop: '20px' }} variant="h6" color="initial">Categories</Typography>
        <List>

          {Categories.map((item, index) => (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}

        </List>
      </Paper>
    </>
  )
}

export default Sidebar