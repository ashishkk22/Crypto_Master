import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import 'antd/dist/antd.css'
import store from "./app/store"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
)
