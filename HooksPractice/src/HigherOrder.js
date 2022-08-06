import React from 'react'

export default function HigherOrder(OriginalComp) {
    const NewComp = function NewCompoenent(){
        return (
            <div style={{display:'flex',justifyContent:'center'}}>
                <h1>Modified</h1>
                <OriginalComp/>
            </div>
        )
    }
    return NewComp;
}
