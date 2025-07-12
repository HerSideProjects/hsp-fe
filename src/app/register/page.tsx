"use client"

import React from 'react'
import TextField from '../components/inputs/TextField'
import { SelectField } from '../components/inputs/SelectField'
import { SelectCloseIcon } from '../../../public/assets/icons/SelectCloseIcon'



const RegisterPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string[]>([]);

  const handleOnChangeInterest = (value: string[]) => {
    setSelectedCategory(value);
  };

  return (
    <div className="min-h-screen bg-[#A6C0FF]">
      <main className="pt-24 px-4 flex flex-col items-center">
        <div className="bg-[#FEF6EB] flex flex-col items-center w-fit rounded-2xl px-20 py-12 gap-6 max-w-4xl">
            <div className="flex flex-col items-center">
                <h1 className="font-lostaMasta text-3xl">Registration Form</h1>
                <p>Fill it the information below, we will contacting you by WhatsApp for further information</p>
            </div>
            <div className="flex w-full gap-6">
              <div className="w-full flex flex-col gap-6">
                <TextField label="Name" placeholder='Fill Name, ex: Anisha'/>
                <TextField label="WA/ID Line" placeholder='ex: 0812345678/anishaptr' />
              </div>
              <div className="w-full flex flex-col gap-6">
                <TextField label="Email" placeholder='Fill Email, ex: anisha@gmail.com'/>
                <TextField label="Major" placeholder='ex: Information Systems'/>
              </div>
            </div>
            <TextField label="Reason you want to join" placeholder='Please fill with the reason why u interest to join our first event :)'/>
            <div className="w-full">
                <p className="font-lostaMasta">Interest</p>
                <SelectField
                  options={[
                    { label: "Reading", value: "reading" },
                    { label: "Coding", value: "coding" },
                    { label: "Traveling", value: "traveling" },
                    { label: "Cooking", value: "cooking" },
                    { label: "Gaming", value: "gaming" },
                    { label: "Designing", value: "designing" },
                    { label: "Photography", value: "photography" },
                    { label: "Writing", value: "writing" },
                    { label: "Art", value: "art" },
                    { label: "Music", value: "music" },
                    { label: "Sports", value: "sports" },
                    { label: "Crafting", value: "crafting" },
                    { label: "Fashion", value: "fashion" },
                    { label: "Fitness", value: "fitness" },
                    { label: "Gardening", value: "gardening" },
                    { label: "Other", value: "other" },
                  ]}
                  onChange={handleOnChangeInterest}
                />
            </div>
            <TextField label="Spill your MBTI" placeholder='ex: INFJ'/>
            <div className="w-full">
                <p className="font-lostaMasta">Payment Evidence</p>
                <input className="bg-[#FFF0DC] border rounded w-full" type="text" />
            </div>
            <div className="w-full">
              <button className="bg-[#EF3187] w-full text-white text-xl font-bold py-4 rounded-2xl">Submit</button>
            </div>
        </div>
      </main>
    </div>
  )
}

export default RegisterPage