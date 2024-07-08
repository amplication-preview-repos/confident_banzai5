import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const GuideCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="audioUrl" source="audioUrl" />
        <TextInput label="content" multiline source="content" />
      </SimpleForm>
    </Create>
  );
};
