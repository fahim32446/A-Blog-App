import React, { useState } from 'react'
import { Drawer, Tab, Tabs, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Search from './Search';


const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);

  const Categories = ['Home', 'News', 'Story', 'Sports']

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="right"
      >
          
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={(e, value) => setValue(value)}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider', marginTop: 'auto', marginBottom: 'auto' }}
        >
            <Search/>
          {Categories.map((item, index) => (
            <Tab sx={{ padding: '10px 60px' }} key={index} label={item} />
          ))}
         
        </Tabs>
      </Drawer>
      <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>

    </>
  )
}

export default DrawerComp;