import React from "react";
import { Alert, Toastr } from "neetoui";

export default function DeleteAlert({
  selectedNoteIds,
  setSelectedNoteIds,
  notes,
  setNotes,
  onClose
}) {
  const handleSubmit = () => {
    const newNotes = notes.filter(note => !selectedNoteIds.includes(note.id));
    setNotes(newNotes);
    setSelectedNoteIds([]);
    onClose();
    Toastr.success("Note deleted successfully");
  };
  return (
    <Alert
      isOpen
      title="Delete Note"
      message="Are you sure you want to delete the note? All of your data will be permanently removed from our database forever. This action cannot be undone."
      onClose={onClose}
      submitButtonProps={{ label: "Delete", onClick: () => handleSubmit() }}
    />
  );
}
