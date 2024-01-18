

import { Button, Popover } from 'keep-react'

export const PopoverComponent = () => {
  return (
    <Popover>
      <Popover.Title>Informació de contacte</Popover.Title>
      <Popover.Description>
      Pots escriure'm a <span>ismaelberoncastano@gmail.com</span>
      </Popover.Description>
      <Popover.Action>
        <Button size="xs" className='bg-orange-600 text-white font-bold hover:bg-orange-700'>Contacte</Button>
      </Popover.Action>
    </Popover>
  )
}
