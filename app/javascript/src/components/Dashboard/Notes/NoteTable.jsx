import React from "react";
import { Checkbox, Tooltip, Button, Badge, Avatar } from "neetoui";
import dayjs from "dayjs";
import tagOptions from "constants/tagOptions";

export default function NoteTable({
  selectedNoteIds,
  setSelectedNoteIds,
  notes = []
}) {
  return (
    <div className="w-full px-4">
      <table className="nui-table nui-table--checkbox nui-table--actions">
        <thead>
          <tr>
            <th>
              <Checkbox
                checked={
                  selectedNoteIds.length === notes.map(note => note.id).length
                }
                onClick={() => {
                  const noteIds = notes.map(note => note.id);
                  if (selectedNoteIds.length === noteIds.length) {
                    setSelectedNoteIds([]);
                  } else {
                    setSelectedNoteIds(noteIds);
                  }
                }}
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
          {notes.map(note => (
            <tr
              key={note.id}
              className={"cursor-pointer bg-white hover:bg-gray-50"}
            >
              <td>
                <Checkbox
                  checked={selectedNoteIds.includes(note.id)}
                  onClick={event => {
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
                  <Badge color={tagOptions[note.tag].color}>
                    {tagOptions[note.tag].text}
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
                  <Avatar size={36} contact={{ name: note.contact }} />
                </div>
              </td>
              <td>
                <div className="flex flex-row justify-center space-x-2">
                  <Tooltip content="Edit" position="bottom">
                    <Button style="icon" icon="ri-pencil-line" />
                  </Tooltip>
                  <Tooltip content="Delete" position="bottom">
                    <Button style="icon" icon="ri-delete-bin-line" />
                  </Tooltip>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
