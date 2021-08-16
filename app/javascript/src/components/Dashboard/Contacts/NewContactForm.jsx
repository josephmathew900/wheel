import React from "react";
import { Formik, Form } from "formik";
import { isEmpty } from "ramda";
import { Button, Toastr } from "neetoui";
import { Input, Select, Switch } from "neetoui/formik";

import {
  DEPARTMENT_OPTIONS,
  FORM_INITIAL_VALUES,
  FORM_VALIDATION_SCHEMA
} from "./constants";

const NewContactForm = ({ onClose, refetch, selectedContactIds, contacts }) => {
  const formikInitialValues = isEmpty(selectedContactIds)
    ? FORM_INITIAL_VALUES
    : contacts.find(contact => selectedContactIds.includes(contact.id));

  const handleSubmit = async () => {
    try {
      refetch();
      onClose();
      Toastr.success("New contact added successfully");
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
            <Input label="Name" name="name" placeholder="Name" />
            <Input label="Email" name="email" placeholder="Email" />
            <Input
              label="Contact Number"
              name="contactNumber"
              placeholder="Contact Number"
            />
            <Select
              label="Department"
              placeholder="Select a Department"
              name="department"
              options={DEPARTMENT_OPTIONS}
              defaultValue={{ label: "Engineering", value: "eng" }}
            />

            <div className="flex justify-between">
              <label htmlFor="basecamp">Add to Basecamp</label>
              <Switch id="basecamp" name="addToBaseCamp" />
            </div>
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
              label="Save Changes"
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

export default NewContactForm;
