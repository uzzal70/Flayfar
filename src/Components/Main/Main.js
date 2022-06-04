import React from 'react';
import './Main.css';
import logo from './Logo.png';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import Cart from '../Body/Cart';
import Accordino from '../Accordino/Accordino';
import Profile from './Profile';
import SearchBar from 'material-ui-search-bar';
import { Grid } from '@mui/material';
const drawerWidth = 100;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '16ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Main = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="Icon-style">
      <InboxIcon className="Icon" />
      <MailIcon className="Icon" />
      <InboxIcon className="Icon" />
      <MailIcon className="Icon" />
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {/* Right side Header */}

      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          // position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Box
            component="span"
            m={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid container className="topHeader">
              <IconButton
                lg={2}
                md={2}
                sm={4}
                xs={4}
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Grid lg={2} md={2} sm={4} xs={4}>
                <Typography className="flyway" noWrap component="div">
                  <img src={logo} alt="log" width={'100%'} />
                </Typography>
              </Grid>
              {/* <Search className="search-color">
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Name/PNR/Ticket no/Booking Ref"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search> */}
              <Grid lg={2} md={2} sm={4} xs={4}>
                <SearchBar
                  onChange={() => console.log('onChange')}
                  onRequestSearch={() => console.log('onRequestSearch')}
                />
              </Grid>
              <Grid
                lg={2}
                md={2}
                sm={3}
                xs={3}
                sx={{
                  '@media (min-width: 768px)': {
                    display: 'none',
                  },
                }}
              >
                <Button>
                  <Profile />
                </Button>
              </Grid>
              <Grid pl={'2rem'} lg={3} md={2} sm={6} xs={6}>
                <Button
                  variant="outlined"
                  className="flywayButton"
                  sx={{
                    color: 'white',
                    border: '2px solid white',
                    p: '.5rem',

                    '@media (min-width: 300px) and (max-width: 480px)': {
                      fontSize: '1.5rem',
                      width: '100%',
                    },
                  }}
                >
                  <BackupTableIcon />
                  Flyway APISandbox
                </Button>
              </Grid>
              <Grid
                lg={1}
                md={1}
                sm={6}
                xs={6}
                sx={{
                  '@media (min-width: 300px) and (max-width: 7680px)': {
                    display: 'none',
                  },
                }}
              ></Grid>
              <Grid
                lg={2}
                md={2}
                sm={6}
                xs={6}
                sx={{
                  '@media (min-width: 300px) and (max-width: 768px)': {
                    display: 'none',
                  },
                }}
              >
                <Button>
                  <Profile style={{ margin: '10' }} />
                </Button>
              </Grid>
              <Grid lg={2} md={2} sm={2} xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    '@media (min-width: 300px) and (max-width: 480px)': {
                      fontSize: '2rem',
                      ml: '1rem',
                      width: '90%',
                    },
                  }}
                >
                  BDT 36,500
                </Button>
              </Grid>
            </Grid>
          </Box>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          className="RightSideheader"
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          {/* ----------------- */}
          <Cart />
          <Accordino />
        </Box>
      </Box>
    </>
  );
};

export default Main;
