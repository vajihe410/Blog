import React from 'react'
//spinner 
import  {TailSpin} from "react-loader-spinner"

function Loader() {
  return (
    <div style={{width: "100%",height:"1000px", display:"flex" , justifyContent:"center", paddingTop:"20px"}}>
        <TailSpin
            visible={true}
            height="100"
            width="100"
            color="grey"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
        />
    </div>
  )
}

export default Loader