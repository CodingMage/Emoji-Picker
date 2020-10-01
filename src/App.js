import React from 'react';
import './App.css';
import './CSS/style.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';



import EmojiGet from './Components/EmojiGet';

function App() {
  return (
    <div className="App">
      <div className="warper">

        <Router>


          <div className="nav">
            <Link to='/smileys-emotion'><span role='img' aria-label="smileys-emotion">🙂</span> </Link >
            <Link to='/people-body'><span role='img' aria-label="people-body">👨</span> </Link >
            <Link to='/animals-nature'><span role='img' aria-label="animals-nature">🦁</span> </Link >
            <Link to='/food-drink'><span role='img' aria-label="food-drink">🍏</span> </Link >
            <Link to='/activities'><span role='img' aria-label="activities">⚽</span> </Link >
            <Link to='/travel-places'><span role='img' aria-label="travel-places">🚗</span> </Link >
            <Link to='/objects'><span role='img' aria-label="objects">💡</span> </Link >
            <Link to='/flags'><span role='img' aria-label="flags">🏁</span> </Link >

          </div>


          <Switch>


            <Route path='/smileys-emotion'>
              <EmojiGet group='smileys-emotion' />

            </Route>
            <Route path='/people-body'>
              <EmojiGet group='people-body' />

            </Route>
            <Route path='/animals-nature'>
              <EmojiGet group='animals-nature' />

            </Route>
            <Route path='/food-drink'>
              <EmojiGet group='food-drink' />

            </Route>
            <Route path='/activities'>
              <EmojiGet group='activities' />

            </Route>
            <Route path='/travel-places'>
              <EmojiGet group='travel-places' />

            </Route>
            <Route path='/objects'>
              <EmojiGet group='objects' />

            </Route>
            <Route path='/flags'>
              <EmojiGet group='flags' />

            </Route>
          </Switch>

        </Router>



      </div>

    </div>
  );
}

export default App;
