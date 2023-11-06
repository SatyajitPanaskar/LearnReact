
import { useMemo, useDeferredValue, useEffect } from "react";
function ListuseDeferredValueHook({ input }) { 
    const DataSize = 5000;
  const deferredInput = useDeferredValue(input);

  const list = useMemo(() => {
    const a = [];
    for (let i = 0; i < DataSize; i++) {
      a.push(<div key={i}>{deferredInput}</div>);
    }
    return a;
  }, [deferredInput]);

  useEffect(() => {
    console.log(`Input: ${input} \nDeferred: ${deferredInput}`);
  });

  return list;
}

export default ListuseDeferredValueHook