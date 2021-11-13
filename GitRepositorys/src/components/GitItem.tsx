import { IonItem, IonLabel, IonLoading } from "@ionic/react";
import React, { useState } from "react";
import { Service } from "../Service/Service";
import { IGitItem } from "./IGitItem";



export const GitItem: React.FC<IGitItem> = (props) => {

    const[isClicked, setIsClicked] = useState<boolean>(false)
    const[peopleForked, setpeopleForked] = useState<string[]>([])
    const[isLoading, setIsLoading] = useState<boolean>(false)
  
  const convertGits = (list:any) =>{

    let gitsList:string[] = []
    for (var i = list.length - 1; i >= 0; i--) {
      gitsList.push(list[i].owner.login)
      if (gitsList.length > 2){
        break
      }
    }
    setpeopleForked(gitsList)
  }

  const onGitClick = () =>{
    setIsLoading(true)
    setIsClicked(!isClicked)
    Service.getForked(props.id).then((value) => {convertGits(value); setIsLoading(false)})
  }
  
  return (
    <div>
        <IonItem onClick={onGitClick}>
            <IonLabel>{"id: " + props.id}</IonLabel>
            <IonLabel>{"Decription: " + props.description}</IonLabel>
        </IonItem>
        {isClicked === true &&
        <div className='itemInformation'>
            {peopleForked.length>0?
            <div>
                <IonLoading isOpen={isLoading} />
                <p>Last 3 people who forked are:</p>
                {peopleForked.map((val) => 
                <p key={val}>{val}</p>
            )}
            </div>:
                <p>Nobody forked this git</p>
            }
            <p>Number of comments is: {props.comments}</p>
            <p>The file type is: {props.file}</p>
        </div>
        }
    </div>
  );
};

