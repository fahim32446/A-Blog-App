import { Stack, InputBase, Box, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const Search = () => {
    return (
        <Stack direction="row">
            <Box sx={{ backgroundColor: '#fff', padding: '3px 15px', borderRadius: '5px', border: { xs: '3px solid gray', sm: '1px solid gray' } }}>
                <InputBase placeholder='Search...' />
            </Box>
            <IconButton type="submit" sx={{
                p: '10px',
                border: { xs: '3px solid gray', sm: '1px solid gray' }
                , color: { xs: 'red', sm: 'white' }
            }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Stack>
    )
}

export default Search