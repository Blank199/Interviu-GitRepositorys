import { IonItem, IonLabel } from "@ionic/react";
import React from "react";
import { IGitItem } from "./IGitItem";



export const GitItem: React.FC<IGitItem> = (props) => {

  const aux = () => {
    if(props.onItemClick)
      props.onItemClick(props.id)
  }
  
  return (
   <IonItem onClick={aux}>
       <IonLabel>{"id: " + props.id}</IonLabel>
       <IonLabel>{"Decription: " + props.description}</IonLabel>
   </IonItem>
  );
};

