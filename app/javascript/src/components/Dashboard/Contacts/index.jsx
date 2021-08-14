import React, { useEffect, useState } from "react";
import { Button, PageLoader } from "neetoui";
import { Header, SubHeader } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";
import EmptyNotesListImage from "images/EmptyNotesList";

import ContactTable from "./ContactTable";
import DeleteAlert from "./DeleteAlert";
import { CONTACT_LIST, SORT_OPTIONS } from "./constants";

const Contacts = () => {
  const [loading, setLoading] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const [contacts, setContacts] = useState(CONTACT_LIST);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <Header
        title="Contacts"
        actionBlock={
          <Button onClick={() => {}} label="New Contact" icon="ri-add-line" />
        }
      />
      {contacts.length ? (
        <>
          <SubHeader
            searchProps={{
              value: searchTerm,
              onChange: e => setSearchTerm(e.target.value),
              clear: () => setSearchTerm("")
            }}
            deleteButtonProps={{
              onClick: () => setShowDeleteAlert(true),
              disabled: !selectedContactIds.length
            }}
            sortProps={{
              options: SORT_OPTIONS,
              onClick: () => {}
            }}
            paginationProps={{
              count: 241,
              pageNo: 1,
              pageSize: 50
            }}
            toggleFilter={() => {}}
          />
          <ContactTable
            selectedContactIds={selectedContactIds}
            setSelectedContactIds={setSelectedContactIds}
            contacts={contacts}
            setContacts={setContacts}
            showDeleteAlert={showDeleteAlert}
            setShowDeleteAlert={setShowDeleteAlert}
          />
        </>
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          title="Your Contacts list is empty"
          primaryAction={() => {}}
          primaryActionLabel="Add New Contact"
        />
      )}
      {showDeleteAlert && (
        <DeleteAlert
          selectedContactIds={selectedContactIds}
          setSelectedContactIds={setSelectedContactIds}
          contacts={contacts}
          setContacts={setContacts}
          onClose={() => setShowDeleteAlert(false)}
        />
      )}
    </>
  );
};

export default Contacts;
