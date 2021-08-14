import React from "react";
import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({
  selectedContactIds,
  setSelectedContactIds,
  contacts,
  setContacts,
  onClose
}) => {
  const handleSubmit = () => {
    const newContacts = contacts.filter(
      contact => !selectedContactIds.includes(contact.id)
    );
    setContacts(newContacts);
    setSelectedContactIds([]);
    onClose();
    Toastr.success("Contact deleted successfully");
  };
  return (
    <Alert
      isOpen
      title="Delete Contact"
      message="Are you sure you want to delete the contact? All of your data will be permanently removed from our database forever. This action cannot be undone."
      onClose={onClose}
      submitButtonProps={{ label: "Delete", onClick: () => handleSubmit() }}
    />
  );
};

export default DeleteAlert;
