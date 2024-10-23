import { useDispatch, useSelector } from 'react-redux';
import {
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import Btn from './btn';
import { deleteContact } from '../redux/contactAction';

const ContactList = ({ onEditContact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  return (
   <div style={{width:'50%', margin:'0 auto'}}>
     <List>
      {contacts.map((contact) => (
        <ListItem key={contact.id}>
          <ListItemText primary={contact.name} secondary={`${contact.email} | ${contact.mobile}`} />
          <Box >
            <div style={{display:'flex',gap:'10px'}}>
            <Btn
              label="Edit"
              onClick={() => onEditContact(contact)} 
              color="primary"
              
            />
            <Btn
              label="Delete"
              onClick={() => dispatch(deleteContact(contact.id))}
              color="warning"
              
            />
            </div>
          </Box>
        </ListItem>
      ))}
    </List>
   </div>
  );
};

export default ContactList;
