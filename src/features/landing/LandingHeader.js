import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, InputBase, Drawer, List, ListItem, ListItemText, Hidden, Button, Grid } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 20,
    width: '50%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const ResponsiveHeader = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} style={{ width: 250 }}>
            <List>
                {['Students', 'Faculty', 'Staff', 'Alumni'].map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                {['ADMISSIONS', 'ACADEMICS', 'RESEARCH', 'GLOBAL', 'ARTS', 'SCHOOLS & INSTITUTES'].map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
            <AppBar position="static" style={{ backgroundColor: 'white', boxShadow: 'none', paddingTop: '30px' }}>
                <Toolbar>
                    <Hidden mdUp>
                        <Grid container alignItems="center">
                            <Grid item>
                                <IconButton
                                    color="silver"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                >
                                    {/*<MenuIcon />*/}
                                </IconButton>
                            </Grid>
                            <Grid item xs>
                                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', color: 'black' }}>
                                    <Typography variant="h6" style={{ fontSize: '1.5rem', letterSpacing: '0.4rem', fontFamily: 'Web Serveroff, sans-serif'}}>
                                        EDUBRIDGE
                                    </Typography>
                                    <Typography variant="subtitle1" style={{ fontSize: '1.1 rem', letterSpacing: '0.25rem', fontFamily: 'Web Serveroff, sans-serif', marginBottom: '30px' }}>
                                        ПЛАТФОРМА
                                    </Typography>
                                </div>
                            </Grid>
                            {/*<Grid item>*/}
                            {/*    /!*<Typography variant="h6" style={{ marginLeft: 10 }}>*!/*/}
                            {/*    /!*    EDUBRIDGE*!/*/}
                            {/*    /!*</Typography>*!/*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs>*/}
                            {/*    /!*<Search>*!/*/}
                            {/*    /!*    <SearchIconWrapper>*!/*/}
                            {/*    /!*        <SearchIcon />*!/*/}
                            {/*    /!*    </SearchIconWrapper>*!/*/}
                            {/*    /!*    <StyledInputBase*!/*/}
                            {/*    /!*        placeholder="Search…"*!/*/}
                            {/*    /!*        inputProps={{ 'aria-label': 'search' }}*!/*/}
                            {/*    /!*    />*!/*/}
                            {/*    /!*</Search>*!/*/}
                            {/*</Grid>*/}
                        </Grid>
                        <Drawer
                            variant="temporary"
                            open={drawerOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden mdDown>
                        <Button color="inherit">Университеты</Button>
                        <Button color="inherit">Поступление</Button>
                        <Button color="inherit">Staff</Button>
                        <Button color="inherit">Alumni</Button>
                    </Hidden>
                </Toolbar>
            </AppBar>
    );
};

export default ResponsiveHeader;