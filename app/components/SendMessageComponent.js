import React from "react";
import { Notifications } from "expo";
import { AppField, AppForm, AppSubmitButton } from "../components/forms";

import messagesApi from "../api/messages";

const SendMessageComponent = ({ listingId }) => {
  const handleSubmit = async ({ message }, { resetForm }) => {
    if (message === "") return alert("Message cannot be empty");

    const result = await messagesApi.send(message, listingId);

    if (result.ok) {
      resetForm();
      Notifications.presentLocalNotificationAsync({
        title: "Message Sent",
        body: "The user will be notified",
      });
    } else alert("Something went wrong");
  };
  return (
    <AppForm
      initialValues={{
        message: "",
      }}
      onSubmit={handleSubmit}
    >
      <AppField placeholder="Send a message" name={"message"} />
      <AppSubmitButton name="Send" />
    </AppForm>
  );
};

export default SendMessageComponent;
