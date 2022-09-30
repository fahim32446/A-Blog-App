import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Toolbar, Tabs, Tab, useMediaQuery, useTheme } from '@mui/material';
import Search from './Search';
import DrawerComp from './DrawerComp';
import { Link } from 'react-router-dom';
import axios from 'axios';




const Navbar = () => {
  const [value, setValue] = useState(0);
  const array = []
  const Categories = []
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [items, setItems] = useState([]);


  useEffect(() => {

    const getPost = async () => {
      const res = await axios.get('http://localhost:5000/api/post')
      setItems(res.data)
    }
    getPost();


  }, []);

  // Add Categories ............

  items?.map((item, index) =>
    array.push(item.category)
  )

  array.forEach((element) => {
    if (!Categories.includes(element)) {
      Categories.push(element);
    }

  });



  console.log(Categories);


  return (
    <>
      <AppBar
        position="static"
      >

        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

          <Typography variant="h6">Blog App</Typography>

          {isMatch ? (<DrawerComp />) : (
            <>
              <Tabs
                textColor='inherit'
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor='secondary'
              >

                {Categories.map((item, index) => (
                  <Tab label={item} key={index} to={item} component={Link} />
                ))}

                {/*  */}

              </Tabs>

              <Search />

            </>
          )}

        </Toolbar>


      </AppBar>
    </>
  )
}

export default Navbar