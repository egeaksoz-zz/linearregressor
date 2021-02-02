import React from 'react';
import './App.css';
import UploadFiles from "./components/upload-files.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
            
    }
  }

  render(){
    return(
      <div className="main">
        <p className="title"> Welcome to the Linear Regressor </p>
        <div className="upload">
        </div>
      </div>
    );
  }
}

export default App;
