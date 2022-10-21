import {
  Box,
  DialogContent,
  DialogTitle,
  Slide,
  Typography,
} from "@mui/material";
import ScaffoldLayout from "components/shared/layouts/ScaffoldLayout";
import Avatar from "components/ui/Avatar";
import Button from "components/ui/Button";
import Dialog from "components/ui/Dialog";
import React from "react";
import logo from "assets/images/LinkedIn_icon.png";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ShareBoxFeedEntry = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    if (open) {
      setOpen(false);
      return;
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ScaffoldLayout p={3}>
      <Box component="section" className="flex items-center">
        <Avatar
          alt="logo"
          src={logo}
          width="46"
          height="46"
          className="mr-3"
        />
        <Button
          onClick={handleClickOpen}
          textPosition="left"
          className="flex-1 text-sm font-semibold"
        >
          Start a box
        </Button>
        <Dialog
          position="center"
          open={open}
          TransitionComponent={Transition}
          onClose={handleClose}
        >
          <DialogTitle>
            <Typography  component="span">
              Create a post
            </Typography>
            <Typography
              variant="button"
              component="span"
              onClick={handleClose}
              className="absolute right-3 top-1/2 translate-y-[-50%] cursor-pointer hover:bg-black-100 text-md h-8 w-8 flex justify-center items-center rounded-lg overflow-hidden"
            >
              X
            </Typography>
          </DialogTitle>
          <DialogContent dividers={true}>Feed Entry</DialogContent>
        </Dialog>
      </Box>
    </ScaffoldLayout>
  );
};

export default ShareBoxFeedEntry;
