import React from 'react'

export default function PersonEdit({data}) {
  return (
    <div>
      <form>
        <label htmlFor='oldName'>Old name</label>
        <input type='text' id='oldName' name='oldName' onChange={({target: {value}}) => data.setOldName(value)}/>

        <label htmlFor='name'>Enter person name</label>
        <input id='name' name='name' type='text' onChange={({target: {value}}) => data.setNameEdit(value)}/>
       
        <label htmlFor='email'>Enter person email</label>
        <input id='email' name='email' type='text' onChange={({target: {value}}) => data.setEmailEdit(value)}/>
       
        <label htmlFor='phone'>Enter person phone</label>
        <input id='phone' name='phone' type='text' onChange={({target: {value}}) => data.setPhoneEdit(value)}/>
      </form>
    </div>
  )
}
