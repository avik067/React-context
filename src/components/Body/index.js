import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => {
  console.log()

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
          <div className="row middle align-center">
            {showLeftNavbar && (
              <nav className="nav-left">
                <h1 className="small-heading">Left navbar Menu</h1>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>item 4</li>
                </ul>
              </nav>
            )}
            {showContent && (
              <div className="content">
                <h1 className="small-heading">Content</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  Ut enim ad minim veniam.
                </p>
              </div>
            )}
            {showRightNavbar && (
              <nav className="nav-right">
                <h1 className="small-heading">Right Navbar</h1>
                <div className="col  align-center">
                  <div className="box row center align-item">Ad1</div>
                  <div className="box row center align-center">Ad2</div>
                </div>
              </nav>
            )}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
