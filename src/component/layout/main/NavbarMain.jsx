import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    Button,
    Box
} from "@mui/material";
import logotujuhsembilan from "../../../assets/image/logotujuhsembilan.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import SearchBar from "component/ui/Searchbar";
import { useIsMobile } from "../../../utils/functions";


const NavbarMain = () => {
    const isMobile = useIsMobile();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    const renderMobileMenu = () => (
        <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose} PaperProps={{ sx: { width: '60%', bgcolor: '#2C8AD3' } }}>
            <Box sx={{ display: "flex", flexDirection: 'column', overflow: 'hidden' }}>
                <Box sx={{ display: "flex", justifyContent: "flex-end", px: '20px', py: '10px' }}>
                    <IconButton edge="end" color="inherit" aria-label="close" onClick={handleDrawerClose} >
                        <CloseIcon />
                    </IconButton>
                </Box>

                <List>
                    <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 'auto' }}>
                        <Button
                            color="inherit"
                            onClick={() => {
                                handleDrawerClose();
                            }}
                            sx={{ borderRadius: '25px', px: '20px', py: '7px', fontSize: '14px', textTransform: 'capitalize', fontFamily: 'Inter, sans-serif', color: 'white' }}>
                            Register
                        </Button>
                    </ListItem>

                    <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 'auto' }}>
                        <Button
                            color="inherit"
                            onClick={() => {
                                handleDrawerClose();
                            }}
                            sx={{ borderRadius: '25px', border: '1px solid white', px: '20px', py: '7px', fontSize: '14px', textTransform: 'capitalize', fontFamily: 'Inter, sans-serif', color: 'white' }}>
                            Sign In
                        </Button>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );

    return (
        <>
            <Box sx={{ position: 'fixed', width: '100%', zIndex: 99 }}>
                <AppBar position="static" sx={{ bgcolor: '#081E43', boxShadow: 'none', py: '2px', px: '20px' }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img src={logotujuhsembilan} alt="Logo" style={{ width: '50px' }} />
                            <Typography variant="h6" sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: '700', ml: '10px' }}>
                                Talent Center 79
                            </Typography>
                        </Box>

                        <SearchBar width={600} height={'35px'} borderRadius={'5px'} />

                        {isMobile && (
                            <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
                                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        )}

                        {isMobile ? renderMobileMenu() :
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Box sx={{ display: 'flex', gap: '20px', alignItems: "center" }}>
                                    <IconButton edge="end" color="inherit" aria-label="close"  >
                                        <BookmarkIcon />
                                    </IconButton>

                                    <IconButton edge="end" color="inherit" aria-label="close" sx={{ mr: '2px' }}>
                                        <NotificationsIcon />
                                    </IconButton>

                                    <Box sx={{ display: 'flex', gap: '5px', alignItems: "center", borderLeft: '2px solid #DBDBDB', height: '20px', px: '20px' }}>
                                        <IconButton edge="end" color="inherit" aria-label="close" >
                                            <PersonIcon />
                                        </IconButton>

                                        <Typography variant="h6" sx={{ fontFamily: 'inter, sans-serif', fontSize: '14px', fontWeight: '400', ml: '10px' }}>
                                            User 79
                                        </Typography>

                                        <IconButton edge="end" color="inherit" aria-label="close" >
                                            <ArrowDropDownIcon />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Box>}
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default NavbarMain;
