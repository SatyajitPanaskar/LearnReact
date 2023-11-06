import React,{useSyncExternalStore} from 'react'

function ReactuseSyncExternalStoreHook() {
    // Example 1 
    const width = useSyncExternalStore((listener) => {
        window.addEventListener("resize", listener);
        return () => {
            window.removeEventListener("resize", listener);
        }
    }, () => window.innerWidth);
  return (
      <>
          <h2>52.ReactuseSyncExternalStoreHook</h2>
          <h3>Window Size : { width}</h3>
      </>
  )
}

export default ReactuseSyncExternalStoreHook