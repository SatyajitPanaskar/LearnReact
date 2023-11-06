import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { React } from "react";
import Users from "./Components/FunctionalComp";
import ClassComp from "./Components/ClassComp";
import ClickEvenetFunction from "./Components/9.ClickEvenet&function";
import StateFunction from "./Components/10.StateFunctionComponents";
import PropsWithFunctionalComponent from "./Components/12.PropsWithFunctionalComponent";
import ReactPropsWithClassComponent from "./12.ReactPropsWithClassComponent/13.ReactPropsWithClassComponent";
import ReactGetInputBoxValues from "./14.ReactGetInputBoxValues/14.ReactGetInputBoxValues";
import ReactHideShowToggle from "./15.ReactHideShowToggle/15.ReactHideShowToggle";
import ReactFormHandling from "./16.ReactFormHandling/16.ReactFormHandling";
import ReactConditionalRendering from "./17.ReactConditionalRendering/17.ReactConditionalRendering";
import ReactFormValidation from "./18.ReactFormValidation/18.ReactFormValidation";
import ReactPassFunctionAsProps from "./19.ReactPassFunctionAsProps/19.ReactPassFunctionAsProps";
import ReactConstructorLifecycleMethods from "./20.ReactLifeCycleMethod/21.ReactConstructorLifecycleMethods/21ReactConstructorLifecycleMethods";
import ReactComponentDidMountLifecycleMethods from "./20.ReactLifeCycleMethod/23.ReactComponentDidMountLifecycleMethods/23.ReactComponentDidMountLifecycleMethods";
import ReactComponentDidUpdateLifecycleMethod from "./20.ReactLifeCycleMethod/24.ReactComponentDidUpdateLifecycleMethod/24.ReactComponentDidUpdateLifecycleMethod";
import ReactShouldComponentUpdateLifecycleMethod from "./20.ReactLifeCycleMethod/25.ReactShouldComponentUpdateLifecycleMethod/25.ReactShouldComponentUpdateLifecycleMethod";
import ReactComponentWillUnmountLifecycleMethod from "./20.ReactLifeCycleMethod/26.ReactComponentWillUnmountLifecycleMethod/26.ReactComponentWillUnmountLifecycleMethod";
import ReactuseEffectHook from "./20.ReactLifeCycleMethod/28.ReactuseEffectHook/28.ReactuseEffectHook";
import StyleForReactComponents from "./30.StyleForReactComponents/30.StyleForReactComponents";
import BootstrapInstallInReact from "./31.BootstrapInstallInReact/31.BootstrapInstallInReact";
import ReactArrayMapMethod from "./32.ReactArrayMapMethod/32.ReactArrayMapMethod";
import ReactNestedMapFunction from "./32.ReactArrayMapMethod/34.ReactNestedMapFunction";
import ReactFragment from "./36.ReactFragment/36.ReactFragment";
import ReactLiftingStateUp from "./37.ReactLiftingStateUp/37.ReactLiftingStateUp";
import ReactPureComponent from "./38.ReactPureComponent/38.ReactPureComponent";
import ReactMemo from "./39.ReactMemo/39.ReactMemo";
import ReactuseMemoHook from "./40.ReactuseMemoHook/40.ReactuseMemoHook";
import ReactRef from "./41.ReactRef/41.ReactRef";
import ReactuseRefHook from "./41.ReactRef/42.ReactuseRefHook";
import ReactforwardRefHook from "./41.ReactRef/43.ReactforwardRefHook";
import ReactControlledComponent from "./44.ReactControlledComponent/44.ReactControlledComponent";
import ReactUncontrolledComponent from "./44.ReactControlledComponent/45.ReactUncontrolledComponent";
import ReactHigherOrderComponent from "./46.ReactHigherOrderComponent/46.ReactHigherOrderComponent";
import ReactuseCallbackHook from "./47.ReactuseCallbackHook/47.ReactuseCallbackHook";
import ReactuseReducerHook from "./48.ReactuseReducerHook/48.ReactuseReducerHook";
import ReactuseContextHook from "./49.ReactuseContextHook/49.ReactuseContextHook";
import ReactContextAPI from "./50.ReactContextAPI/50.ReactContextAPI";
import ReactuseLayoutEffectHook from "./51.ReactuseLayoutEffectHook/51.ReactuseLayoutEffectHook";

import "bootstrap/dist/css/bootstrap.min.css";
import ReactuseSyncExternalStoreHook from "./52.ReactuseSyncExternalStoreHook/52.ReactuseSyncExternalStoreHook";
import ReactuseTransitionHook from "./53.ReactuseTransitionHook/53.ReactuseTransitionHook";
import ReactuseDeferredValueHook from "./54.ReactuseDeferredValueHook/54.ReactuseDeferredValueHook";
import ReactuseIdHook from "./55.ReactuseIdHook/55.ReactuseIdHook";
import ReactCustomHook from "./56.ReactCustomHook/56.ReactCustomHook";
import CounterComponent from "./56.ReactCustomHook/56.CounterComponent";
import ReactFetchAPIGetMethod from "./57.ReactFetchAPIGetMethod/57.ReactFetchAPIGetMethod";
import Assignment from "./57.ReactFetchAPIGetMethod/57.Assignment";
import ReactFetchAPIPostMethod from "./57.ReactFetchAPIGetMethod/58.ReactFetchAPIPostMethod";
import ReactFetchAPIPutMethod from "./57.ReactFetchAPIGetMethod/59.ReactFetchAPIPutMethod";
import ReactFetchDeleteMethod from "./57.ReactFetchAPIGetMethod/60.ReactFetchDeleteMethod";
import ReactRouter from "./1.ComponentsRouter/1.ReactRouter";
import AxiosInReact from "./57.ReactFetchAPIGetMethod/61.AxiosInReact";
import GetDataAPI from "./57.ReactFetchAPIGetMethod/61.GetDataAPI";
import AxiosMethod from "./57.ReactFetchAPIGetMethod/61.AxiosMethod";
import ProfileBackground from "./57.ReactFetchAPIGetMethod/62.ProfileBackground";
import ReactuseContext from "./49.ReactuseContextHook/49.ReactuseContext";
import CRUDApps from "./58.CRUDOperation/58.CRUDApps";
import PropsFunction from "./12.ReactPropsWithClassComponent/12.PropsFunction";
import ReactuseEffectPractice from "./20.ReactLifeCycleMethod/28.ReactuseEffectHook/28.useEffectPractice";
import ReactPureComponentParent from "./38.ReactPureComponent/38.ReactPureComponentParent";
import MemoParent from "./39.ReactMemo/39.MemoParent";
import ReactuseMemoPractice from "./40.ReactuseMemoHook/40.ReactuseMemoPractice";

function App() {
  // const userData = [
  //   { name: "John Doe", age: 28, email: "john@example.com" },
  //   { name: "Jane Smith", age: 30, email: "jane@example.com" },
  //   { name: "Bob Jony", age: 32, email: "Bob@example.com" },
  //   { name: "Jamini Karme", age: 34, email: "jamini@example.com" }
  //];
  return (
    <div className="App">
      {/* <h2>
        React Learn
      </h2> */}
      {/* <Users />
      <ClassComp />
    <ClickEvenetFunction/>
     <StateFunction/>       
      <PropsWithFunctionalComponent name="Rushi Panaskar"/> 
      {
        userData.map((user, index) => (
          <PropsWithFunctionalComponent
            key={index}
            name={user.name}
            age={user.age}
            email={user.email}
          />
        ))
      }
      <PropsWithFunctionalComponent name="Rushi Panaskar" /> 
      <button>Update Value</button>
      <ReactPropsWithClassComponent/>
      <ReactGetInputBoxValues/>
      <ReactHideShowToggle/>
      
      <ReactConditionalRendering/>
      
      <ReactPassFunctionAsProps/>
      <ReactConstructorLifecycleMethods/>
      <ReactComponentDidMountLifecycleMethods/>
      <ReactComponentDidUpdateLifecycleMethod/>
      <ReactShouldComponentUpdateLifecycleMethod/>
      <ReactComponentWillUnmountLifecycleMethod/>
      <ReactuseEffectHook/>
      <StyleForReactComponents/>
     
       <ReactArrayMapMethod />
       <BootstrapInstallInReact/>
      <ReactNestedMapFunction />
      <ReactFragment />
      <ReactLiftingStateUp/>
       <ReactPureComponent/>
      <ReactMemo/>
      <ReactuseMemoHook/>
      <ReactRef/>
      <ReactuseRefHook />
      <ReactforwardRefHook />
      <ReactControlledComponent />
      <ReactUncontrolledComponent/>
      <ReactHigherOrderComponent />
      <ReactuseCallbackHook/>
      <ReactuseReducerHook/>
      <ReactuseContextHook/>
      <ReactContextAPI/>
       <ReactuseLayoutEffectHook/>
       <ReactuseSyncExternalStoreHook/>
      <ReactuseTransitionHook />  
      <ReactuseDeferredValueHook />
      <ReactuseIdHook />
    <CounterComponent/>*/}
      {/* <ReactFetchAPIGetMethod/> */}
      {/* <Assignment/> 
      <ReactFetchAPIPostMethod />
      <ReactFetchAPIPutMethod />
      <ReactFetchDeleteMethod/>*/}
      {/* <ReactRouter/> */}
      {/* <ReactFormValidation /> */}
      {/* <ReactFormHandling /> */}
      {/* <AxiosInReact /> */}
      {/* <GetDataAPI /> */}
      {/* <AxiosMethod /> */}
      {/* <ProfileBackground /> */}
      {/* <ReactuseContext /> */}
      {/* <CRUDApps /> */}
      {/* <PropsFunction /> */}
      {/* <ReactuseEffectPractice /> */}
      {/* <ReactPureComponentParent /> */}
      <ReactuseMemoPractice />
    </div>
  );
}

export default App;
