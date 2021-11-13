import { IonContent, IonFabButton, IonHeader, IonIcon, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { search } from 'ionicons/icons';
import { useState } from 'react';
import { GitsList } from '../components/GitsList';
import { IDefaultGit } from '../components/IDefaultGit';
import { IFile } from '../components/IFile';
import { IGitItem } from '../components/IGitItem';
import { Service } from '../Service/Service';

import './Home.css';

const Home: React.FC = () => {

  const [user, setUser] = useState<string>('')
  const [gits, setGits] = useState<IGitItem[]>([])

  
  const convertGits = (list:any) =>{
    
    let gitsList:IGitItem[] = []
    list.forEach((element: IDefaultGit) => {
      let auxList = element.url.split('/')
      let id = auxList[auxList.length-1]
      const fileObject = Object.values(element.files)[0] as IFile
      let aux={description:element.description, id:id, comments:element.comments, file:fileObject.language}
      gitsList.push(aux)
    });
    setGits(gitsList)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gir Repositoryes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <IonInput id='usernameInput' placeholder='username' onIonChange={e => {setUser(e.detail.value!)}} value={user}></IonInput>
        </IonItem>
          <IonFabButton onClick={() => Service.getUser(user).then((value) => convertGits(value)
          )}>
            <IonIcon icon={search} />
          </IonFabButton>
          <GitsList gitItems = {gits}></GitsList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
