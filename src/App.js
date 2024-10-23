import { useState } from 'react';
import { Box } from '@mui/material';
import ContactForm from './components/contactForm';
import ContactList from './components/contactList';

const App = () => {
  const [editMode, setEditMode] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  const handleEditContact = (contact) => {
    setCurrentContact(contact);
    setEditMode(true);
  };

  return (
    <Box>
      <ContactForm editMode={editMode} currentContact={currentContact} onEditModeChange={setEditMode} />
      <ContactList onEditContact={handleEditContact} /> 
    </Box>
  );
};

export default App;
