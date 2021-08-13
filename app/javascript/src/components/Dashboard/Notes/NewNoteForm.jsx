import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Button, Toastr, Switch, DateInput } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";
import formInitialValues from "constants/formInitialValues";
import formValidationSchemas from "constants/formValidationSchemas";
import { TAG_OPTIONS, CONTACT_OPTIONS } from "./Constants";

export default function NewNoteForm({ onClose, refetch }) {
  const [showDueDate, setShowDueDate] = useState(false);
  const [dueDate, setDueDate] = useState(new Date());

  const handleSubmit = async () => {
    try {
      refetch();
      onClose();
      Toastr.success("New note added successfully");
    } catch (err) {
      logger.error(err);
    }
  };
  return (
    <Formik
      initialValues={formInitialValues.newNoteForm}
      onSubmit={handleSubmit}
      validationSchema={formValidationSchemas.newNoteForm}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="nui-pane__body nui-pane__body--has-footer pb-6 space-y-3.5">
            <Input label="Note Title" name="title" placeholder="Title" />
            <Select
              label="Tags"
              placeholder="Select a Tag"
              name="tags"
              options={TAG_OPTIONS}
            />
            <Textarea label="Note Description" name="description" rows={8} />
            <Select
              label="Assigned Contact"
              placeholder="Select a Contact"
              name="assignedContact"
              options={CONTACT_OPTIONS}
            />
            <div className="flex justify-between">
              <label htmlFor="dueDate">Add Due Date to Note</label>
              <Switch
                id="dueDate"
                checked={showDueDate}
                onChange={e => setShowDueDate(e.target.checked)}
              />
            </div>
            {showDueDate && (
              <DateInput
                value={dueDate}
                label="Due Date"
                onChange={newDate => setDueDate(newDate)}
              />
            )}
          </div>
          <div className="nui-pane__footer nui-pane__footer--absolute">
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="secondary"
            />

            <Button
              type="submit"
              label="Submit"
              size="large"
              style="primary"
              className="ml-2"
              disabled={isSubmitting}
              loading={isSubmitting}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
