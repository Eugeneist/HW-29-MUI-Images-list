import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const Modal = ({ onClose, params, open }) => {
  return (
    <>
      <Dialog open={open} onClose={onClose} params={params}>
        <DialogTitle>This image information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p>{`Author: ${params.author}`}</p>
            <p>{`Original width: ${params.width}px`}</p>
            <p>{`Original height: ${params.height}px`}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

Modal.propTypes = {
  params: PropTypes.shape({
    author: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;
