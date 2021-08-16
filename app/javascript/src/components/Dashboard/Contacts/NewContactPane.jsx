import React from "react";
import { isEmpty } from "ramda";
import { Pane } from "neetoui";

import NewContactForm from "./NewContactForm";

const NewContactPane = ({
  fetchContacts,
  showPane,
  setShowPane,
  selectedContactIds,
  contacts
}) => {
  const onClose = () => setShowPane(false);
  const title = isEmpty(selectedContactIds) ? "Add Contact" : "Edit Contact";
  return (
    <Pane title={title} isOpen={showPane} onClose={onClose}>
      <div className="px-6">
        <NewContactForm
          onClose={onClose}
          refetch={fetchContacts}
          selectedContactIds={selectedContactIds}
          contacts={contacts}
        />
      </div>
    </Pane>
  );
};

export default NewContactPane;
