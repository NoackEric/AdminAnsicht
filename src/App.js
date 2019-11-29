import React from 'react';

import Anrede from './Components/Anrede/Anrede';
import Kategorie from './Components/Kategorie/Kategorie';
import Unternehmen from './Components/UnternehmenInfo/UnternehmenInfo';
import Gewerbe from './Components/GewerbeInfos/GewerbeInfos';
import Inhalt from './Components/Inhalt/Inhalt';
import Vorgaben from './Components/Vorgaben/Vorgaben';
import Sonstiges from './Components/Sonstiges/Sonstiges';




function App() {
  return (
    <div className="App">
    <Sonstiges />
    <Inhalt />
    </div>
  );
}

export default App;
