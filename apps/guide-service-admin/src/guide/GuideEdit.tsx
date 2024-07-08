import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const GuideEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="audioUrl" source="audioUrl" />
        <TextInput label="content" multiline source="content" />
      </SimpleForm>
    </Edit>
  );
};
