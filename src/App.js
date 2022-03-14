
import './pages/homepage1/homePage.styles.scss';
import React from 'react';
import HomepageComponent from './pages/homepage1/HomepageComponent';
import { Route, Switch, Link } from 'react-router-dom';


const HomePage = (props) => {

  console.log(props)
  return(
  
  <div>
     <Link to='/topicList-hats'>Topic-List</Link> < br />
     <Link to='/topicDetails/10'>Topic-Details</Link>
    <h2> HomePage HOME PAGE</h2>
  </div>
);
}


const TopicsListPage = () => (
  <div>
   
    <h2>TOPICS LIST PAGE</h2>
  </div>
);


const HatsPage = (props) => {

  return(
  <div>
    <h2>This is HATS PAGE </h2>
  </div>
);
  }

  const JacketsPage = (props) => {

    return(
    <div>
      <h2>This is Jackets PAGE </h2>
    </div>
  );
    }

    const SneakersPage = (props) => {

      return(
      <div>
        <h2>This is Sneakers PAGE </h2>
      </div>
    );
      }

      const WomensPage = (props) => {

        return(
        <div>
          <h2>This is Womens PAGE </h2>
        </div>
      );
        }

        const MensPage = (props) => {

          return(
          <div>
            <h2>This is Mens PAGE </h2>
          </div>
        );
          }


const TopicsDetailsPage = (props) => {

  console.log(props);

  return(
  <div>
    <h2>TOPICS DETAILS PAGE {props.match.params.topicId}</h2>
  </div>
);
  }
function App() {
  return (
    <div>
  
  <Switch>
<Route exact path='/' component={HomepageComponent} />
<Route path='/hats' component={HatsPage} />
<Route path='/jackets' component={JacketsPage} />
<Route path='/sneakers' component={SneakersPage} />
<Route path='/womens' component={WomensPage} />
<Route path='/mens' component={MensPage} />

<Route exact path='/topicList-hats' component={TopicsListPage} />
<Route path='/topicDetails/:topicId' component={TopicsDetailsPage} />
</Switch>


   
    </div>
  );
}

export default App;
