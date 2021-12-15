import React from 'react'

export default function PersonInput({data}) {
  return (
    <div>
      <form>
        <label htmlFor='name'>Enter person name</label>
        <input id='name' name='name' type='text' onChange={({target: {value}}) => data.setName(value)}/>
       
        <label htmlFor='email'>Enter person email</label>
        <input id='email' name='email' type='text' onChange={({target: {value}}) => data.setEmail(value)}/>
       
        <label htmlFor='phone'>Enter person phone</label>
        <input id='phone' name='phone' type='text' onChange={({target: {value}}) => data.setPhone(value)}/>
      </form>
    </div>
  )
}
