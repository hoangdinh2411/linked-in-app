import { Box, Typography, Popover, Badge } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import Avatar from "components/ui/Avatar";
import avatarImage from "assets/images/avatar.jpg";
import { menuItems } from "utils/constants";
import theme from "styles/theme";
const Menu = () => {
  const location = useLocation();
  console.log(location);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    <>
      <ul className="menu">
        {menuItems.map((item, itemIndex) => (
          <li
            className={`${location.pathname === item.key ? "active" : ""}`}
            key={itemIndex}
          >
            <Link to={item.url}>
              <Badge
                invisible={item.title !== "Notifications"}
                badgeContent={4}
                sx={{
                  "& .MuiBadge-badge": {
                    minWidth: "16px !important",
                    padding:0,
                    height: "16px !important",
                    textAlign: "center",
                    backgroundColor: theme.unread_notification,
                    color: theme.white,
                    top: 6,
                    right: 3,
                    fontWeight: 500,
                  },
                }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <Icon
                  icon={
                    location.pathname === item.key ? item.activeIcon : item.icon
                  }
                />
              </Badge>

              <Typography component="span">{item.title}</Typography>
            </Link>
          </li>
        ))}
      </ul>
      <Box
        component="aside"
        className={`me ${open ? "active" : ""}`}
        onClick={handleClick}
        aria-describedby="dropdown-menu"
      >
        <Avatar alt="Me" src={avatarImage} />
        <Typography component="span">
          Me <Icon icon="bxs:down-arrow" />
        </Typography>
      </Box>
      <Popover
        id="dropdown-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box className="dropdown-menu ">Submenu</Box>
      </Popover>
    </>
  );
};

export default Menu;
