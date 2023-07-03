import React, {useContext} from 'react'
import { MyContext } from '../../App'


const UsingUseContext = () => {

    const exContext = useContext(MyContext)
  return (
    <div><p>using useContext hook: {exContext}</p></div>
  )
}

export default UsingUseContext