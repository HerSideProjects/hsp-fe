"use client"

import React, { useState } from 'react'
import TextField from '../../components/inputs/TextField'
import { SelectField } from '../../components/inputs/SelectField'
import { MediaField } from '../../components/inputs/MediaField'
import { submitRegistration } from './actions'
import { options } from './const'

const RegisterPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);

  const handleOnChangeInterest = (value: string[]) => {
    setSelectedCategory(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    if (file) {
      formData.append("file", file);
    }

    await submitRegistration(null, formData);
  };

  return (
    <div>
    <div>

    </div>
    <div className="min-h-screen bg-[#A6C0FF]">
      <main className="pt-36 px-10 flex flex-col items-center">
        <form className="bg-[#FEF6EB] flex flex-col items-center rounded-2xl px-12 py-12 gap-6 w-full border border-[#1C1719]" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
                <h1 className="font-lostaMasta text-3xl">Registration Form</h1>
                <p>Fill it the information below, we will contacting you by WhatsApp for further information</p>
            </div>
            <div className="flex w-full gap-6">
              <div className="w-full flex flex-col gap-6">
                <TextField label="Name" placeholder='Fill Name, ex: Anisha' name="nama"/>
                <TextField label="WA/ID Line" placeholder='ex: 0812345678/anishaptr' name="phone_number"/>
              </div>
              <div className="w-full flex flex-col gap-6">
                <TextField label="Email" placeholder='Fill Email, ex: anisha@gmail.com' name="email"/>
                <TextField label="Major" placeholder='ex: Information Systems' name="major"/>
              </div>
            </div>
            <TextField label="Reason you want to join" placeholder='Please fill with the reason why u interest to join our first event :)' name="reason"/>
            <div className="w-full">
                <p className="font-lostaMasta">Interest</p>
                <SelectField
                  options={options}
                  onChange={handleOnChangeInterest}
                />
            </div>
            <TextField label="Spill your MBTI" placeholder='ex: INFJ' name="mbti"/>
            <MediaField placeholder='Upload a screenshot that clearly displays the transaction details' onFileSelect={(f) => setFile(f)}/>
            <div className="w-full">
              <button className="bg-[#EF3187] w-full text-white text-xl font-bold py-4 rounded-2xl">Submit</button>
            </div>
            <input type="hidden" name="interest" value={selectedCategory.join(",")} />
        </form>
      </main>
    </div>
    </div>
  )
}

export default RegisterPage