"use client"

import React, { useRef, useState } from 'react'
import TextField from '../../components/inputs/TextField'
import { SelectField } from '../../components/inputs/SelectField'
import { MediaField } from '../../components/inputs/MediaField'
import { submitRegistration } from './actions'
import { options } from './const'
import Image from 'next/image'
import { RingIcon } from '../../../public/assets/icons/RingIcon'
import { UpperBorder } from '../../../public/assets/icons/UpperBorder'

const RegisterPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const formRef = useRef<HTMLDivElement>(null)

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

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="bg-[#FEF6EB] min-h-screen pt-36 px-16 flex flex-col gap-12">
        <div className="flex gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-6">
              <div>
                <RingIcon/>
              </div>
              <div className="flex flex-col text-6xl font-lostaMasta">
                <p className="text-[#1C1719]">About</p>
                <p className="text-[#EF3187]">The Event</p>
              </div>
            </div>
            <div>
              <p className="text-2xl">A space for women in STEM to slow down, create with their hands, and connect with kindred spirits. We know the grind—labs, codes, deadlines. But there’s another side of us that’s just as powerful: the one that crafts, blooms, and breathes.</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#E2F1AE] rounded-3xl p-4 w-fit">
                <p className="text-2xl">🗓️ Saturday, 2 August 2025</p>
              </div>
              <div className="bg-[#E2F1AE] rounded-3xl p-4 w-fit">
                <p className="text-2xl">📍Kopi Nako Depok</p>
              </div>
            </div>
          </div>
          <div className="relative w-[1300px] h-[350px]">
            <Image
              src="/assets/images/bersama-details.png"
              alt="foto bersama"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-lostaMasta text-[32px]">What You Get</p>
          <div className="flex gap-6">
            <div className="bg-[#EF3187] rounded-[20px] p-6 text-[#FEF6EB] flex flex-col gap-1">
              <p className="text-2xl font-lostaMasta">Workshop Bunga anjay</p>
              <p>Workshop Session Workshop Session Lorem Ipsum aknsdjasajkdasbjkdabsjkdaskjdabsdjk</p>
            </div>
            <div className="bg-[#EF3187] rounded-[20px] p-6 text-[#FEF6EB] flex flex-col gap-1">
              <p className="text-2xl font-lostaMasta">Workshop Bunga anjay</p>
              <p>Workshop Session Workshop Session Lorem Ipsum aknsdjasajkdasbjkdabsjkdaskjdabsdjk</p>
            </div>
            <div className="bg-[#EF3187] rounded-[20px] p-6 text-[#FEF6EB] flex flex-col gap-1">
              <p className="text-2xl font-lostaMasta">Workshop Bunga anjay</p>
              <p>Workshop Session Workshop Session Lorem Ipsum aknsdjasajkdasbjkdabsjkdaskjdabsdjk</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div onClick={scrollToForm} className="bg-[#1C1719] text-[#FEF6EB] rounded-[10px] px-6 py-5 w-fit cursor-pointer">
            <p className="font-bold">Regist Now ↓</p>
          </div>
        </div>
      </div>
      <div ref={formRef} className="min-h-screen bg-[#A6C0FF]" style={{ backgroundImage: "url('/assets/images/bg-regist.png')" }}>
        <UpperBorder/>
        <main className="pt-36 w-1/2 pb-36 mx-auto flex flex-col items-center">
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