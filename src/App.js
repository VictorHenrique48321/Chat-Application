import {ChatEngine} from "react-chat-engine"

import ChatFeed from "./components/ChatFeed"
import LoginForm from "./components/LoginForm"

import "./App.css"

const App = () => {
  if(!localStorage.getItem("username")) return <LoginForm/>

  return (
    <ChatEngine
      height="100vh"
      projectID="12d805cf-5b4f-476b-b32f-a15a32d86c73"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatFeedProps) => <ChatFeed {...chatFeedProps}/>}
    />
  )
}

export default App