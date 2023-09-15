import ConfigurationContext from '../../context/ConfigurationContext'

import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

import './index.css'

const content = ['Content', 'Left Navbar', 'Right Navbar']

const Layout = () => {
  console.log('This selection component')

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent,
          onToggleShowLeftNavbar,
          onToggleShowRightNavbar,
        } = value

        return (
          <div className="layout">
            <div className="lower col align-center ">
              <Header />
              <Body />
              <Footer />
            </div>
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Layout
