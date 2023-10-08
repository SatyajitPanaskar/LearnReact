
import logo from './logo.svg';
import './App.css';
import { React } from 'react';
import Users from './Components/FunctionalComp';
import ClassComp from './Components/ClassComp';
import ClickEvenetFunction from './Components/9.ClickEvenet&function';
import StateFunction from './Components/10.StateFunctionComponents';
import PropsWithFunctionalComponent from './Components/12.PropsWithFunctionalComponent';
import ReactPropsWithClassComponent from './12.ReactPropsWithClassComponent/13.ReactPropsWithClassComponent';
import ReactGetInputBoxValues from './14.ReactGetInputBoxValues/14.ReactGetInputBoxValues';
import ReactHideShowToggle from './15.ReactHideShowToggle/15.ReactHideShowToggle';
import ReactFormHandling from './16.ReactFormHandling/16.ReactFormHandling';
import ReactConditionalRendering from './17.ReactConditionalRendering/17.ReactConditionalRendering';
import ReactFormValidation from './18.ReactFormValidation/18.ReactFormValidation';
import ReactPassFunctionAsProps from './19.ReactPassFunctionAsProps/19.ReactPassFunctionAsProps';
import ReactConstructorLifecycleMethods from './20.ReactLifeCycleMethod/21.ReactConstructorLifecycleMethods/21ReactConstructorLifecycleMethods';
import ReactComponentDidMountLifecycleMethods from './20.ReactLifeCycleMethod/23.ReactComponentDidMountLifecycleMethods/23.ReactComponentDidMountLifecycleMethods';
import ReactComponentDidUpdateLifecycleMethod from './20.ReactLifeCycleMethod/24.ReactComponentDidUpdateLifecycleMethod/24.ReactComponentDidUpdateLifecycleMethod';
import ReactShouldComponentUpdateLifecycleMethod from './20.ReactLifeCycleMethod/25.ReactShouldComponentUpdateLifecycleMethod/25.ReactShouldComponentUpdateLifecycleMethod';
import ReactComponentWillUnmountLifecycleMethod from './20.ReactLifeCycleMethod/26.ReactComponentWillUnmountLifecycleMethod/26.ReactComponentWillUnmountLifecycleMethod';
import ReactuseEffectHook from './20.ReactLifeCycleMethod/28.ReactuseEffectHook/28.ReactuseEffectHook';
import StyleForReactComponents from './30.StyleForReactComponents/30.StyleForReactComponents';
import BootstrapInstallInReact from './31.BootstrapInstallInReact/31.BootstrapInstallInReact';
import ReactArrayMapMethod from './32.ReactArrayMapMethod/32.ReactArrayMapMethod';
import ReactNestedMapFunction from './32.ReactArrayMapMethod/34.ReactNestedMapFunction';


function App() {
  // const userData = [
  //   { name: "John Doe", age: 28, email: "john@example.com" },
  //   { name: "Jane Smith", age: 30, email: "jane@example.com" },
  //   { name: "Bob Jony", age: 32, email: "Bob@example.com" },
  //   { name: "Jamini Karme", age: 34, email: "jamini@example.com" }
//];
  return (
    <div className="App">
      <h2>
        React Learn
      </h2>
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
      <ReactFormHandling/>
      <ReactConditionalRendering/>
      <ReactFormValidation/>
      <ReactPassFunctionAsProps/>
      <ReactConstructorLifecycleMethods/>
      <ReactComponentDidMountLifecycleMethods/>
      <ReactComponentDidUpdateLifecycleMethod/>
      <ReactShouldComponentUpdateLifecycleMethod/>
      <ReactComponentWillUnmountLifecycleMethod/>
      <ReactuseEffectHook/>
      <StyleForReactComponents/>
     
    <ReactArrayMapMethod />
       <BootstrapInstallInReact/>*/}
      <ReactNestedMapFunction/>
    </div>
  );
}

export default App;
