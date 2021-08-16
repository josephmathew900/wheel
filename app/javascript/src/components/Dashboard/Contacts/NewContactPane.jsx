import React from "react";
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
  return (
    <Pane title="Add Contact" isOpen={showPane} onClose={onClose}>
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
