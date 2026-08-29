import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default function MaterialUI() {
  return (
    <>
    <div >
        <h1>Buttons</h1>
      <Button variant="text">Text</Button>&nbsp;
      <Button variant="contained">Contained</Button>&nbsp;
      <Button variant="outlined">Outlined</Button>&nbsp;
    </div>
    <br />
    <div>
        <Button color="secondary">Secondary</Button>
       <Button variant="contained" color="success">
         Success
       </Button>
       <Button variant="outlined" color="error">
         Error
       </Button>
    </div>
    <br />
    <div>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
    </div>
    </>
  );
}
