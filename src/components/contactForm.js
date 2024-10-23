import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Box } from '@mui/material';
import { addContact, editContact } from '../redux/contactAction';
import Btn from './btn';

const ContactForm = ({ editMode, currentContact, onEditModeChange }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [errors, setErrors] = useState({}); // form errors


  useEffect(() => {
    if (editMode && currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setMobile(currentContact.mobile);
    } else {
      setName(''); // Reset fields when not in edit mode
      setEmail('');
      setMobile('');
    }
  }, [editMode, currentContact]);

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!mobile) newErrors.mobile = 'Mobile is required';
    return newErrors;
  };

  const handleAddContact = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    if (editMode) {
      dispatch(editContact({ id: currentContact.id, name, email, mobile }));
      onEditModeChange(false); // Reset edit mode
    } else {
      dispatch(addContact({ id: Math.random(), name, email, mobile }));
    }

    // Reset form fields
    setName('');
    setEmail('');
    setMobile('');
    setErrors({}); // Reset errors on successful submission
  };

  return (
    <div style={{width:'50%', margin:'0 auto'}}>
        <Box>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          if (e.target.value) setErrors((prev) => ({ ...prev, name: '' })); // Clear error on input
        }}
        fullWidth
        margin="normal"
        required
        error={Boolean(errors.name)} // Set error state
        helperText={errors.name} // Show error message
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (e.target.value) setErrors((prev) => ({ ...prev, email: '' })); // Clear error on input
        }}
        fullWidth
        margin="normal"
        required
        error={Boolean(errors.email)} // Set error state
        helperText={errors.email} // Show error message
      />
      <TextField
        label="Mobile"
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
          if (e.target.value) setErrors((prev) => ({ ...prev, mobile: '' })); // Clear error on input
        }}
        fullWidth
        margin="normal"
        required
        error={Boolean(errors.mobile)} // Set error state
        helperText={errors.mobile} // Show error message
      />
      <Btn label={editMode ? 'Update Contact' : 'Add Contact'} onClick={handleAddContact} />
    </Box>
    </div>
  );
};

export default ContactForm;
