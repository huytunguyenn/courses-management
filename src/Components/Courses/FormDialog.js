import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const FormDialog = ({title, handleOnSubmit}) => {
    const [open, setOpen] = React.useState(false);
    const [courseName, setCourseName] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        const newCourse = {
            className: courseName,
            isDeleted: false
        };

        handleOnSubmit(newCourse)
        setOpen(false);
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                {title}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Tạo và thêm mới một khóa học vào danh sách các khóa học hiện tại. Vui lòng nhập tên khóa học:
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Tên khóa học"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {setCourseName(e.target.value)}}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Thoát</Button>
                    <Button onClick={handleSubmit}>Tạo</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FormDialog;