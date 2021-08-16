import React, { useEffect, useState } from "react";
import { isEmpty } from "ramda";
import { Formik, Form } from "formik";
import { Button, Toastr, Switch, DateInput, Collapse } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";

import {
  TAG_OPTIONS,
  CONTACT_OPTIONS,
  FORM_INITIAL_VALUES,
  FORM_VALIDATION_SCHEMA
} from "./constants";

const NewNoteForm = ({ onClose, refetch, selectedNoteIds, notes }) => {
  const [showDueDate, setShowDueDate] = useState(false);
  const [dueDate, setDueDate] = useState(new Date());

  const formikInitialValues = isEmpty(selectedNoteIds)
    ? FORM_INITIAL_VALUES
    : notes.find(contact => selectedNoteIds.includes(contact.id));

  useEffect(() => {
    if (!isEmpty(selectedNoteIds)) {
      const { dueDate } = formikInitialValues;
      if (dueDate) {
        setDueDate(new Date(dueDate));
        setShowDueDate(true);
      }
    }
  }, []);

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
      initialValues={formikInitialValues}
      onSubmit={handleSubmit}
      validationSchema={FORM_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="nui-pane__body nui-pane__body--has-footer pb-6 space-y-3.5">
            <Input label="Note Title" name="title" placeholder="Title" />
            <Select
              label="Tag"
              placeholder="Select a Tag"
              name="tag"
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
            <Collapse open={showDueDate}>
              <DateInput
                value={dueDate}
                label="Due Date"
                onChange={newDate => setDueDate(newDate)}
              />
            </Collapse>
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
};

export default NewNoteForm;
