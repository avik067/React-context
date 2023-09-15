import {Component} from 'react'

import ConfigurationContext from './context/ConfigurationContext'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  toggleShowContent = val => {
    console.log(val)
    this.setState({
      showContent: !val,
    })
  }

  toggleShowLeftNavbar = val => {
    console.log(val)
    this.setState({
      showLeftNavbar: !val,
    })
  }

  toggleShowRightNavbar = val => {
    console.log(val)
    this.setState({
      showRightNavbar: !val,
    })
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <div className="main">
        <ConfigurationContext.Provider
          value={{
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent: this.toggleShowContent,
            onToggleShowLeftNavbar: this.toggleShowLeftNavbar,
            onToggleShowRightNavbar: this.toggleShowRightNavbar,
          }}
        >
          <ConfigurationController />
          <Layout />
        </ConfigurationContext.Provider>
      </div>
    )
  }
}

export default App
