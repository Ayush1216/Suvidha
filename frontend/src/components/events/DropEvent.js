import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './DropEvent.css'
import { state_arr } from '../Modals/stateandcity';
export default function FadeMenu({handlebylocation}) {
    const [loc, setLoc] = React.useState('Location')
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        if (e.target.getAttribute('name')) {
            setLoc(e.target.getAttribute('name'))
        }
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                variant='outlined'
                style={{ width: '250px', justifyContent: 'left' }}
            >
                <LocationOnIcon style={{ fontSize: '14px' }}></LocationOnIcon> {loc}
                <ArrowDropDownIcon style={{ marginLeft: 'auto' }} />
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={() => handlebylocation("All")}>All</MenuItem>
                { state_arr.map(sa=>(

                    <MenuItem onClick={() => handlebylocation(sa)} name='sa'>{sa}</MenuItem>
                ))}
            </Menu>
        </div>
    );
}