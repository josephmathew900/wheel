import React from "react";
import { Checkbox, Tooltip, Button, Avatar } from "neetoui";

import DeleteAlert from "./DeleteAlert";

const ContactTable = ({
  selectedContactIds,
  setSelectedContactIds,
  contacts,
  setContacts,
  showDeleteAlert,
  setShowDeleteAlert
}) => {
  const allContactsSelected =
    selectedContactIds.length === contacts.map(contact => contact.id).length;

  const handleHeaderCheckbox = () => {
    const contactIds = contacts.map(contact => contact.id);
    if (selectedContactIds.length === contactIds.length) {
      setSelectedContactIds([]);
    } else {
      setSelectedContactIds(contactIds);
    }
  };

  const handleBodyCheckbox = (contact, event) => {
    event.stopPropagation();
    const index = selectedContactIds.indexOf(contact.id);
    if (index > -1) {
      setSelectedContactIds([
        ...selectedContactIds.slice(0, index),
        ...selectedContactIds.slice(index + 1)
      ]);
    } else {
      setSelectedContactIds([...selectedContactIds, contact.id]);
    }
  };

  const handleDelete = contactId => {
    setShowDeleteAlert(true);
    setSelectedContactIds([contactId]);
  };

  return (
    <div className="w-full px-12 pt-12">
      <table className="nui-table nui-table--checkbox nui-table--actions nui-table--hover">
        <thead>
          <tr>
            <th>
              <Checkbox
                checked={allContactsSelected}
                onClick={handleHeaderCheckbox}
              />
            </th>
            <th className="text-left">Name</th>
            <th className="text-left">Email</th>
            <th className="text-center">Department</th>
            <th className="text-center">Contact Number</th>
            <th className="text-center">Add To Basecamp</th>
            <th className="text-center"></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => {
            const isChecked = selectedContactIds.includes(contact.id);
            return (
              <tr key={contact.id}>
                <td>
                  <Checkbox
                    checked={isChecked}
                    onClick={event => handleBodyCheckbox(contact, event)}
                  />
                </td>
                <td>
                  <div className="flex flex-row items-center justify-start space-x-2">
                    <Avatar size={32} contact={{ name: contact.name }} />
                    <span>{contact.name}</span>
                  </div>
                </td>
                <td>
                  <div className="flex flex-row justify-start">
                    {contact.email}
                  </div>
                </td>
                <td>
                  <div className="flex flex-row justify-center">
                    {contact.department}
                  </div>
                </td>
                <td>
                  <div className="flex flex-row justify-center">
                    {contact.contactNumber}
                  </div>
                </td>
                <td>
                  <div className="flex flex-row justify-center">
                    <Checkbox
                      name="checkbox_name"
                      checked={contact.addToBaseCamp}
                    />
                  </div>
                </td>
                <td>
                  <div className="flex flex-row justify-center space-x-2">
                    <Tooltip content="Edit" position="bottom">
                      <Button style="icon" icon="ri-pencil-line" />
                    </Tooltip>
                    <Tooltip content="Delete" position="bottom">
                      <Button
                        style="icon"
                        icon="ri-delete-bin-line"
                        onClick={() => handleDelete(contact.id)}
                      />
                    </Tooltip>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showDeleteAlert && (
        <DeleteAlert
          selectedContactIds={selectedContactIds}
          setSelectedContactIds={setSelectedContactIds}
          contacts={contacts}
          setContacts={setContacts}
          onClose={() => setShowDeleteAlert(false)}
        />
      )}
    </div>
  );
};

export default ContactTable;
