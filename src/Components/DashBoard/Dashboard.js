import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useParams,

// } from "react-router-dom";
// import DashboardHome from '../DashboardHome/DashboardHome';
// import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import AddDoctor from '../AddDoctor/AddDoctor';
// import AdminRoute from '../../Login/AdminRoute/AdminRoute';
// import AddReview from '../../Home/Testimonial/AddReviews/AddReviews';
// import Payment from '../Payment/Payment';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //nested

  const { admin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      <NavLink style={{ textDecoration: 'none', marginTop: '20px' }} to="/">
        <Button color="inherit">Back To Home</Button>
      </NavLink>
      <br />
      {!admin && (
        <Box>
          <NavLink
            style={{ textDecoration: 'none' }}
            to={`/dashboard/myBooking`}
          >
            <Button color="inherit">My Booking</Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: 'none' }}
            to={`/dashboard/addReview`}
          >
            <Button color="inherit">Add Review</Button>
          </NavLink>
          {/* <br />
          <NavLink
            style={{ textDecoration: 'none' }}
            to={`/dashboard/payment/:id`}
          >
            <Button color="inherit">Pay</Button>
          </NavLink>
          <br /> */}
          {/* <NavLink  to={`/dashboard/payment`} className="dashboard-links"> Pay</NavLink> */}
        </Box>
      )}

      {admin && (
        <div>
          <NavLink
            style={{ textDecoration: 'none' }}
            to={`/dashboard/makeAdmin`}
          >
            <Button color="inherit">Make Admin</Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: 'none' }}
            to={`/dashboard/manageAllBooking`}
          >
            <Button color="inherit">ManageAllBooking</Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: 'none' }}
            to={`/dashboard/addservice`}
          >
            <Button color="inherit">Add Services</Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: 'none' }}
            to={`/dashboard/manageServices`}
          >
            <Button color="inherit">Manage Services</Button>
          </NavLink>
        </div>
      )}

      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DashBoard
          </Typography>
        </Toolbar>
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
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Outlet></Outlet>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
