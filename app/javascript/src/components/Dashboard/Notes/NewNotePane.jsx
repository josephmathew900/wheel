import React from "react";
import { Pane } from "neetoui";
import NewNoteForm from "./NewNoteForm";

const NewNotePane = ({ fetchNotes, showPane, setShowPane }) => {
  const onClose = () => setShowPane(false);
  return (
    <Pane title="Add Note" isOpen={showPane} onClose={onClose}>
      <div className="px-6">
        <NewNoteForm onClose={onClose} refetch={fetchNotes} />
      </div>
    </Pane>
  );
};

export default NewNotePane;
