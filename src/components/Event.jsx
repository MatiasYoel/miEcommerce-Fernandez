import React from 'react'

const Event = () => {
    function noVocals(e) {
        if (
            e.key === "a"||
            e.key === "e"||
            e.key === "i"||
            e.key === "o"||
            e.key === "u"
    ) {
        e.preventDefault()
        }else{
           e.key
        }
    }
  return (
    <div>
      <input type="text" onKeyDown={noVocals}/>
    </div>
  )
}

export default Event
