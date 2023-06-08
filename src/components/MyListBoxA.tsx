// https://headlessui.com/react/listbox#selecting-multiple-values
// Selecting multiple
// Closes when selected

import { Listbox } from '@headlessui/react'
import { useState } from 'react'

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function MyListBoxA() {
  const [selectedPeople, setSelectedPeople] = useState([people[0], people[1]])

  return (
    <Listbox value={selectedPeople} onChange={setSelectedPeople} multiple>
      <div className='relative mt-1 w-80'>
        <Listbox.Button className='relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left '>
          {selectedPeople.map((person) => person.name).join(', ')}
        </Listbox.Button>
      </div>
      <Listbox.Options className='absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 text-base'>
        {people.map((person) => (
          <Listbox.Option key={person.id} value={person}>
            {person.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
