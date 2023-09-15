import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => {
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

        const dataList = [
          {
            name: 'Content',
            id: 'CONTENT',
            func: onToggleShowContent,
            val: showContent,
          },
          {
            name: 'Left Navbar',
            id: 'LEFT',
            func: onToggleShowLeftNavbar,
            val: showLeftNavbar,
          },
          {
            name: 'Right Navbar',
            id: 'RIGHT',
            func: onToggleShowRightNavbar,
            val: showRightNavbar,
          },
        ]

        console.log(dataList)

        return (
          <div className="top">
            <h1>Layout</h1>
            <div>
              {dataList.map(each => (
                <>
                  <input
                    type="checkbox"
                    checked={each.val}
                    id={each.id}
                    name={each.name}
                    key={each.id}
                    value={each.val}
                    onChange={event => each.func(event.target.value)}
                  />
                  <label htmlFor={each.id}>{each.name}</label>
                  <br />
                </>
              ))}
            </div>
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default ConfigurationController
