import { IonContent, IonFabButton, IonHeader, IonIcon, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { search } from 'ionicons/icons';
import { useState } from 'react';
import { Service } from '../Service/Service';

import './Home.css';

const Home: React.FC = () => {

  const [user, setUser] = useState<string>('')


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
          <IonFabButton onClick={() => Service.getUser(user).then((value) => console.log(value))}>
            <IonIcon icon={search} />
          </IonFabButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
