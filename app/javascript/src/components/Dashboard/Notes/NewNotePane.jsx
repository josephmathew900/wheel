import React from "react";
import { isEmpty } from "ramda";
import { Pane } from "neetoui";

import NewNoteForm from "./NewNoteForm";

const NewNotePane = ({
  fetchNotes,
  showPane,
  setShowPane,
  selectedNoteIds,
  notes
}) => {
  const onClose = () => setShowPane(false);
  const title = isEmpty(selectedNoteIds) ? "Add Note" : "Edit Note";
  return (
    <Pane title={title} isOpen={showPane} onClose={onClose}>
      <div className="px-6">
        <NewNoteForm
          onClose={onClose}
          refetch={fetchNotes}
          selectedNoteIds={selectedNoteIds}
          notes={notes}
        />
      </div>
    </Pane>
  );
};

export default NewNotePane;
