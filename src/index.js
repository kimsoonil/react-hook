import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import UsestateApp from "./UseState";
import * as serviceWorker from "./serviceWorker";
import UseInputApp from "./UseInput";
import UseTabsApp from "./UseTabs";
import UseEffectApp from "./UseEffect";
import UseTitleApp from "./UseTitle";
import UseClickApp from "./UseClick";
import UseConfirmApp from "./UseConfirm";
import UsePreventLeaveApp from "./UsePreventLeave";
import UseBeforeLeaveApp from "./UseBeforeLeave";
import UseFadeInApp from "./UseFadeIn";
import UseNetworkApp from "./UseNetwork";
import UseScrollApp from "./UseScroll";
import UseFullscreenApp from "./UseFullscreen";
import UseNotificationApp from "./UseNotification";
import UseAxiosApp from "./UseAxios";

ReactDOM.render(
  <React.StrictMode>
    <UsestateApp />
    <UseInputApp />
    <UseTabsApp />
    <UseEffectApp />
    <UseTitleApp />
    <UseClickApp />
    <UseConfirmApp />
    <UsePreventLeaveApp />
    <UseBeforeLeaveApp />
    <UseFadeInApp />
    <UseNetworkApp />
    <UseScrollApp />
    <UseFullscreenApp />
    <UseNotificationApp />
    <UseAxiosApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
