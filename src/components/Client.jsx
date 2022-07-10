import React from 'react'

const Client = ({client}) => {

    const { name, company, phone, email, notes} = client;

  return (
    <>
        <h>
            {name}
        </h>
    </>
  )
}

export default Client