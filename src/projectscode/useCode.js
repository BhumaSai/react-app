import { useState } from "react";

function useCode() {
    const [copy,setcopy] = useState(false)

    const copied = () => {
       setcopy(true)
       setTimeout(() => {
         setcopy(false)
    }, 1000);
    }

    return [copy,copied];
}

export default useCode