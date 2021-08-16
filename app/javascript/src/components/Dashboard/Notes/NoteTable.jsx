import React from "react";
import { Checkbox, Tooltip, Button, Badge, Avatar } from "neetoui";
import dayjs from "dayjs";
import { BADGE_OPTIONS, CONTACT_OPTIONS } from "./constants";

const NoteTable = ({
  selectedNoteIds,
  setSelectedNoteIds,
  notes,
  setShowDeleteAlert,
  setShowPane
}) => {
  const allNotesSelected =
    selectedNoteIds.length === notes.map(note => note.id).length;

  const handleHeaderCheckbox = () => {
    const noteIds = notes.map(note => note.id);
    if (selectedNoteIds.length === noteIds.length) {
      setSelectedNoteIds([]);
    } else {
      setSelectedNoteIds(noteIds);
    }
  };

  const handleBodyCheckbox = (note, event) => {
    event.stopPropagation();
    const index = selectedNoteIds.indexOf(note.id);
    if (index > -1) {
      setSelectedNoteIds([
        ...selectedNoteIds.slice(0, index),
        ...selectedNoteIds.slice(index + 1)
      ]);
    } else {
      setSelectedNoteIds([...selectedNoteIds, note.id]);
    }
  };

  const handleDelete = noteId => {
    setShowDeleteAlert(true);
    setSelectedNoteIds([noteId]);
  };

  const handleEdit = noteId => {
    setShowPane(true);
    setSelectedNoteIds([noteId]);
  };

  return (
    <div className="w-full px-12 pt-12">
      <table className="nui-table nui-table--checkbox nui-table--actions nui-table--hover">
        <thead>
          <tr>
            <th>
              <Checkbox
                checked={allNotesSelected}
                onClick={handleHeaderCheckbox}
              />
            </th>
            <th className="text-left">Title</th>
            <th className="text-left">Description</th>
            <th className="text-center">Tag</th>
            <th className="text-center">Created Date</th>
            <th className="text-center">Due Date</th>
            <th className="text-center">Contact</th>
            <th className="text-center"></th>
          </tr>
        </thead>
        <tbody>
          {notes.map(note => {
            const isChecked = selectedNoteIds.includes(note.id);
            const contactName = CONTACT_OPTIONS.find(
              option => note.assignedContact == option.value
            )?.label;
            return (
              <tr key={note.id}>
                <td>
                  <Checkbox
                    checked={isChecked}
                    onClick={event => {
                      handleBodyCheckbox(note, event);
                    }}
                  />
                </td>
                <td>
                  <div className="text-gray-900">
                    <Button
                      label={note.title}
                      style="link"
                      href="https://www.bigbinary.com"
                    />
                  </div>
                </td>
                <td>
                  <div className="text-gray-900 max-w-xs truncate">
                    {note.description}
                  </div>
                </td>
                <td>
                  <div className="flex flex-row justify-center text-gray-900">
                    <Badge color={BADGE_OPTIONS[note.tag].color}>
                      {BADGE_OPTIONS[note.tag].text}
                    </Badge>
                  </div>
                </td>
                <td>
                  <div className="flex flex-row justify-center text-gray-900">
                    {note.createdDate
                      ? dayjs(note.createdDate).format("MMM D, YYYY")
                      : "--"}
                  </div>
                </td>
                <td>
                  <div className="flex flex-row justify-center text-gray-900">
                    {note.dueDate
                      ? dayjs(note.dueDate).format("MMM D, YYYY")
                      : "--"}
                  </div>
                </td>
                <td>
                  <div className="flex flex-row justify-center text-gray-900">
                    <Avatar size={36} contact={{ name: contactName }} />
                  </div>
                </td>
                <td>
                  <div className="flex flex-row justify-center space-x-2">
                    <Tooltip content="Edit" position="bottom">
                      <Button
                        style="icon"
                        icon="ri-pencil-line"
                        onClick={() => handleEdit(note.id)}
                      />
                    </Tooltip>
                    <Tooltip content="Delete" position="bottom">
                      <Button
                        style="icon"
                        icon="ri-delete-bin-line"
                        onClick={() => handleDelete(note.id)}
                      />
                    </Tooltip>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default NoteTable;
