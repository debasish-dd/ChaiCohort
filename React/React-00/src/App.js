import React from 'https://esm.sh/react@19.1.0'
import ReactDOM from 'https://esm.sh/react-dom@19.1.0/client'

const Chai = props => {
  return React.createElement('h1', {}, [
    React.createElement('div', {}, [
      React.createElement('p', {}, props.name),
      React.createElement('p', {}, props.price)
    ])
  ])
}

const App = () => {
  return React.createElement(
    'div',
    {},
    [React.createElement('h1', { class: 'test' }, [
      'chai list',
    ]),
    React.createElement(Chai, { name:'masala chai, price:500' }),
    React.createElement(Chai, { name:'ginger chai', price:400 }),
    React.createElement(Chai, { name: 'olong chai', price:700 })]
  )
}

const anotherApp = () => {
  return React.createElement('h2', {}, 'This is heading 2')
}
const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))
// root.render(React.createElement(anotherApp))
