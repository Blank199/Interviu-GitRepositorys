import {  IonList } from "@ionic/react";
import React from "react";
import { GitItem } from "./GitItem";
import { IGitItem } from "./IGitItem";


interface IGitList{
    gitItems: IGitItem[];
    onItemClick?:(id: number) => void;
}

export const GitsList: React.FC<IGitList> = (props) => {
  
  return (
        <IonList>
            {props.gitItems
            .map(({id, description, comments}) => 
            <GitItem id={id} key={id} description = {description} comments={comments} ></GitItem>
            )}
        </IonList> 

  );
};

