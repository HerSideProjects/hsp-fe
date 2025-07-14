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
import { toast } from 'react-hot-toast'

const RegisterPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const formRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(false);

  const handleOnChangeInterest = (value: string[]) => {
    setSelectedCategory(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.loading('Submitting registration...', {id : "register"});
    setLoading(true);
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    if (file) {
      formData.append("file", file);
    }

    const response = await submitRegistration(null, formData);
    setLoading(false);
    if (response.success) {
      toast.success(response.message, {id : "register"});
      form.reset(); 
      setSelectedCategory([]);
      setFile(null);
    } else {
      toast.error(response.message || 'Failed to register', {id : "register"});
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="bg-[#FEF6EB] min-h-screen md:pt-36 pt-32 md:px-16 px-8 flex flex-col gap-12 pb-40 md:pb-0 scroll-hidden">
        <div className="flex md:flex-row flex-col md:gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex md:flex-row flex-col md:items-center md:gap-6">
              <div>
                <RingIcon/>
              </div>
              <div className="flex flex-col text-[56px] md:text-6xl font-lostaMasta">
                <p className="text-[#1C1719]">About</p>
                <p className="text-[#EF3187] md:-mt-0 -mt-3 -mb-3 md:-mb-0">The Event</p>
              </div>
            </div>
            <div>
              <p className="md:text-2xl text-xl">A space for women in STEM to slow down, create with their hands, and connect with kindred spirits. We know the grind—labs, codes, deadlines. But there’s another side of us that’s just as powerful: the one that crafts, blooms, and breathes.</p>
            </div>
            <div className="flex md:flex-row flex-col gap-4">
              <div className="bg-[#E2F1AE] rounded-3xl p-4 w-fit">
                <p className="text-2xl">🗓️ Saturday, 2 August 2025</p>
              </div>
              <div className="bg-[#E2F1AE] rounded-3xl p-4 w-fit">
                <p className="text-2xl">📍Kopi Nako Depok</p>
              </div>
            </div>
          </div>
          <div className="relative md:w-[1300px] h-[350px]">
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
          <div className="flex md:flex-row flex-col gap-6">
            <div className="bg-[#EF3187] rounded-[20px] p-6 text-[#FEF6EB] flex flex-col gap-1">
              <p className="text-2xl font-lostaMasta">Hands-On Creative Escape</p>
              <p>Refresh your mind as our dedicated mentor guides you through crafting charming flower pipe cleaners.</p>
            </div>
            <div className="bg-[#EF3187] rounded-[20px] p-6 text-[#FEF6EB] flex flex-col gap-1">
              <p className="text-2xl font-lostaMasta">Connect with STEM Stars</p>
              <p>Open conversations with inspiring mentors from diverse STEM fields. Ask your questions, share your journey, and gain insights</p>
            </div>
            <div className="bg-[#EF3187] rounded-[20px] p-6 text-[#FEF6EB] flex flex-col gap-1">
              <p className="text-2xl font-lostaMasta">Build Your Supportive Circle</p>
              <p>Expand your network, share experiences, and find encouragement in a friendly, low-pressure environment.</p>
            </div>
          </div>
        </div>
        <div className="flex md:justify-end justify-center">
          <div onClick={scrollToForm} className="bg-[#1C1719] text-[#FEF6EB] rounded-[10px] px-6 py-5 w-fit cursor-pointer">
            <p className="font-bold">Regist Now ↓</p>
          </div>
        </div>
      </div>
      <div ref={formRef} className="min-h-screen bg-[#A6C0FF]" style={{ backgroundImage: "url('/assets/images/bg-regist.png')" }}>
        <UpperBorder/>
        <main className="py-28 md:w-1/2 mx-auto flex flex-col items-center md:px-0 px-3">
          <form className="bg-[#FEF6EB] flex flex-col items-center rounded-2xl md:px-12 px-6 py-12 gap-6 w-full border border-[#1C1719]" onSubmit={handleSubmit}>
              <div className="flex flex-col items-center">
                  <h1 className="font-lostaMasta text-3xl">Registration Form</h1>
                  <p>Fill it the information below, we will contacting you by WhatsApp for further information</p>
              </div>
              <div className="flex md:flex-row flex-col w-full gap-6">
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
                    values={selectedCategory}
                  />
              </div>
              <TextField label="Spill your MBTI" placeholder='ex: INFJ' name="mbti"/>
              <MediaField placeholder='Upload a screenshot that clearly displays the transaction details' onFileSelect={(f) => setFile(f)} file={file}/>
              <div className="w-full">
                <button className={`bg-[#EF3187] w-full text-white text-xl font-bold py-4 rounded-2xl ${loading ? "bg-[#e7609d]" : ""}`} disabled={loading} >{loading ? 'Submitting...' : 'Submit'}</button>
              </div>
              <input type="hidden" name="interest" value={selectedCategory.join(",")} />
          </form>
        </main>
      </div>
    </div>
  )
}

export default RegisterPage