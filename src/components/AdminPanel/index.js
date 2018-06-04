import React, { Component } from 'react';
import style from './style.css';
import axios from 'axios';
import ResourceListItem from './ResourceListItem';
import NavbarButton from './NavbarButton';
import ParakeatLogo from '../ParakeatLogo';
import AdminMessagingForm from './AdminMessagingForm';
import PieChart from './PieChart';
import AdminMap from '../AdminMap';
import AdminMapMarker from '../AdminMapMarker';
import { Link } from 'react-router';

class AdminPanel extends Component {
  state = {
    leftPanelState: 'messaging',
    time: 0,
    restaurants: [

    ]
  }

  renderLeftPanel = () => {
    const { leftPanelState, restaurants } = this.state;


    switch (leftPanelState) {
      case 'restaurants':
        return this.renderResources();
        break
      case 'messaging':
        return this.renderMessageForm();
        break
    }
  }

  renderMessageForm = () => {
    return <AdminMessagingForm />
  }

  renderTimer = () => {
    const time = Date().toLocaleString();
    return time;
  }

  renderLeftPanelTitle = () => {
    const { leftPanelState } = this.state;

    switch (leftPanelState) {
      case 'restaurants':
        return 'Restaurants'
        break;
    }
  }

  renderResources = () => {
    return (
      <table>
        <thead>

        </thead>
        <tbody>
          {this.state.restaurants.map((res, i) => <ResourceListItem key={i} dataObject={res} />)}
        </tbody>
      </table>
    )
  }

  getResources = (resources) => {

    const resourceList = resources.map((res) => {

      return (

          res

      )
    })

    this.setState({ restaurants: resourceList })
  }

  renderMapMarkers = () => {
    const { restaurants } = this.state;
    return restaurants.map((restaurant) => {
      const { loc: [lng, lat], id} =restaurant

      return <AdminMapMarker lng={lng} lat={lat} key={id}/>
    })
  }

  handleClick = () => {

  }

  componentDidMount() {
    const clockTimer = setInterval(() => this.setState({time: new Date().toLocaleString()}), 1000);
    const { token } = localStorage;

    axios.get('http://localhost:5000/restaurants', {headers: {authorization: token}})

      .then((objs) => {

          this.getResources(objs.data);

        }).catch(err => console.log(err))
    // axios.get('localhost:5000/restaurants', (err, obj) => {console.log(err, obj)})

  }

  render() {


    return (
      <div className="admin-panel-container">

        <div className="admin-nav admin-panel">
          <div className="admin-nav-right">
            <div >
              <ParakeatLogo color='white' small/>
            </div>
          </div>
          <div className="admin-nav-left">
            <NavbarButton onClick={() => this.setState({leftPanelState: 'restaurants'})} label='Resources'/>
            <NavbarButton onClick={() => this.setState({leftPanelState: 'messaging'})} label='Messaging'/>
            <NavbarButton onClick={() => this.setState({leftPanelState: 'content'})} label='Content'/>
            <Link to="/signout">Sign Out</Link>

          </div>
        </div>
        <div className="admin-panel admin-panel-left">
          <div className='resource-top-interface'>
            <h3>{this.renderLeftPanelTitle()}</h3>
            <form>
            <label>Search Resources:</label>
            <input className='resource-search-input'></input>
            </form>
          </div>

            {this.renderLeftPanel()}

        </div>

        <div className="admin-panel admin-panel-right">
          <div className='timer-container'>

            <h2 className='timer' >{this.state.time}</h2>
          </div>
          <table className='global-summary-table'>
            <thead>
              <tr>
                <th>Resource</th>
                <th>Count</th>
                <th>Week Increase</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>User</td><td>0</td><td>0</td>
              </tr>
              <tr>
                <td>Restaurant</td><td>0</td><td>0</td>
              </tr>
            </tbody>
          </table>
          <PieChart />
          <p>Relevant message log...</p>

        </div>
        <div className="admin-panel admin-panel-right-lower">

            <AdminMap zoom={15} center={{lat: 55.95, lng: -3.2}}>
              {this.renderMapMarkers()}
            </AdminMap>

        </div>
      </div>
      )
  }
};

export default AdminPanel;
