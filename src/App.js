import React from 'react';
import './App.css';

function App(){
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://imprexismedia.com/wp-content/uploads/2020/03/php-1-logo-png-transparent.png" width='115px'/>
      </header>

      <nav className="nav">
        <div><a href="#">Profile</a></div>
        <div><a href="#">Messages</a></div>
        <div><a href="#">News</a></div>
        <div><a href="#"></a></div>
        <div><a href="#">Settings</a></div>
      </nav>

      <div className="content">
        <div>
          <img src="https://avatars.mds.yandex.net/get-zen_doc/3901320/pub_5fb625596bd43436fc0bc045_5fb62781541585566c4a1217/scale_1200"/>          
        </div>
        <div>
          ava + desc
        </div>
        <div>
          My posts
          <div>
            new posts
          </div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
