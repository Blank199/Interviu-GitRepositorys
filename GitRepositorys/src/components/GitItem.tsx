import { IonItem, IonLabel } from "@ionic/react";
import React, { useState } from "react";
import { Service } from "../Service/Service";
import { IDefaultGit } from "./IDefaultGit";
import { IGitItem } from "./IGitItem";



export const GitItem: React.FC<IGitItem> = (props) => {

    const[isClicked, setIsClicked] = useState<boolean>(false)
    const[peopleForked, setpeopleForked] = useState<string[]>([])

  const aux = () => {
    if(props.onItemClick)
      props.onItemClick(props.id)
  }
  
  const convertGits = (list:any) =>{

    let gitsList:string[] = []
    for (var i = list.length - 1; i >= 0; i--) {
      gitsList.push(list[i].owner.login)
      if (gitsList.length > 2){
        break
      }
    }
    console.log(gitsList)
    setpeopleForked(gitsList)
  }

  const onGiClick = () =>{
    setIsClicked(!isClicked)
    Service.getForked(props.id).then((value) => {convertGits(value)})
  }
  
  return (
    <div>
        <IonItem onClick={onGiClick}>
            <IonLabel>{"id: " + props.id}</IonLabel>
            <IonLabel>{"Decription: " + props.description}</IonLabel>
        </IonItem>
        {isClicked === true &&
        <div>
            {peopleForked.length>0?
            <div>
                <p>Last 3 people who forked:</p>
                {peopleForked.map((val) => 
                <p key={val}>{val}</p>
            )}
            </div>:
                <p>Nobody has forked this git</p>
            }
        </div>
        }
    </div>
  );
};

