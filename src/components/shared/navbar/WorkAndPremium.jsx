import { Icon } from "@iconify/react";
import {
  Box,
  DialogContent,
  Slide,
  Typography,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { APP_ROUTER } from "../../../utils/constants";
import { Link } from "react-router-dom";
import Dialog from "../../ui/Dialog";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const WorkAndPremium = () => {
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
    <Box component="div" className="work-and-premium">
      <span onClick={handleClickOpen} className="work">
        <Icon icon="fontisto:nav-icon-grid" />
        <Typography component="span">
          Work <Icon icon="bxs:down-arrow" />
        </Typography>
      </span>
      <Link to={APP_ROUTER.PREMIUM} className="premium">
        Try Premium for free
      </Link>
      <Dialog
        open={open}
        maxHeight
        position="right"
        TransitionComponent={Transition}
        onClose={handleClose}
      >
        <DialogTitle>
          <Typography
            className="flex items-center justify-between text-[28px]"
          >
            Work{" "}
            <Icon
              icon="ci:close-smrall"
              className="curso-pointer "
              onClick={handleClose}
            />
          </Typography>
        </DialogTitle>
        <DialogContent dividers={true}>Menu</DialogContent>
      </Dialog>
    </Box>
  );
};

export default WorkAndPremium;
