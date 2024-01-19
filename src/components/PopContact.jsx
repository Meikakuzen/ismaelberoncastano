

import { Button, Popover, Card } from 'keep-react'
import {InstagramLogo} from 'phosphor-react'

export const PopoverComponent = () => {
  return (
    <Popover>
      <Popover.Title>Informació de contacte</Popover.Title>
      <Popover.Description>
      Pots escriure'm a <span>ismaelberoncastano@gmail.com</span>
      <Card.Link
            className="flex items-center justify-center px-3 py-1"
            icon={<InstagramLogo size={24} color="red" weight="fill" />}
            href="https://www.instagram.com/ismaelberoncastano?igsh=dDdkZ3lzZHIxajRz"
          />
      </Popover.Description>
      <Popover.Action>
        <Button size="xs" className='bg-orange-600 text-white font-bold hover:bg-orange-700'>Contacte</Button>
      </Popover.Action>
    </Popover>
  )
}
