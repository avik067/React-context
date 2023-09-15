import ConfigurationContext from '../../context/ConfigurationContext'

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

        return <div>hi</div>
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Layout
