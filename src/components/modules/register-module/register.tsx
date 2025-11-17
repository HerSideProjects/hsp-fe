"use client"

import React, { useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { SelectField } from '@/components/inputs/SelectField'
import DetailEventSection from '@/components/modules/register-module/detailEventSection'
import { Modal } from '@/components/modals/Modal'
import { submitRegistration } from '@/app/register/actions'
import { UpperBorder } from '../../../../public/assets/icons/UpperBorder'
import TextField from '@/components/inputs/TextField'
import { MediaField } from '@/components/inputs/MediaField'
import { RegisterSuccess } from '../../../../public/assets/icons/RegisterSuccess'
import { MultipleSelectField } from '@/components/inputs/MultipleSelectField'
import { options } from '@/app/register/const'

export const RegisterModule = () => {
    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
    const [selectedValue, setSelectedValue] = useState<string>("");
    const [fileStudentProof, setFileStudentProof] = useState<File | null>(null);
    const [filePaymentProof, setFilePaymentProof] = useState<File | null>(null);
    const formRef = useRef<HTMLDivElement>(null)
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleOnChangeInterest = (value: string[]) => {
        setSelectedCategory(value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        toast.loading('Submitting registration...', {
        id: "register",
        duration: Infinity,
        });
        setLoading(true);
        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        if (fileStudentProof) {
        formData.append("student_file", fileStudentProof);
        }
        if (filePaymentProof) {
        formData.append("file", filePaymentProof);
        }

        const response = await submitRegistration(null, formData);
        if (response.success) {
        setLoading(false);
        toast.success(response.message, {id : "register"});
        setShowModal(true);
        form.reset(); 
        setSelectedCategory([]);
        setFileStudentProof(null);
        setFilePaymentProof(null);
        } else {
        setLoading(false);
        toast.remove("register"); 
        if (Array.isArray(response.message)) {
            response.message.forEach((msg: string) => {
            toast.error(msg); 
            });
        } else {
            toast.error(response.message || "Failed to register", { id: "register" });
        }
        }
    };

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <div>
      <DetailEventSection scrollToForm={scrollToForm} />
      <div ref={formRef} className="hidden md:hidden min-h-screen bg-[#A6C0FF]" style={{ backgroundImage: "url('/assets/images/bg-regist.png')" }}>
        <UpperBorder/>
        <main className="py-28 md:w-1/2 mx-auto flex flex-col items-center md:px-0 px-3">
          <form className="bg-[#FEF6EB] flex flex-col items-center rounded-2xl md:px-12 px-6 py-12 gap-6 w-full border border-[#1C1719]" onSubmit={handleSubmit}>
              <div className="flex flex-col items-center text-center gap-3">
                  <h1 className="font-lostaMasta text-3xl">Registration Form</h1>
                  <p><b>Note:</b>  Registration for GetInside #1 is limited to <b>female Computer Science students 2025 at Universitas Indonesia.</b> Stay tuned for updates on our upcoming events &ndash; we&rsquo;ll have more opportunities open to everyone!</p>
              </div>
              <div className="flex md:flex-row flex-col w-full gap-6">
                <div className="w-full flex flex-col gap-6">
                  <TextField label="Name" placeholder='Fill Name, ex: Anisha' name="nama"/>
                  <TextField label="WA/ID Line" placeholder='ex: 0812345678/anishaptr' name="phone_number"/>
                </div>
                <div className="w-full flex flex-col gap-6">
                  <TextField label="Email" placeholder='Fill Email, ex: anisha@gmail.com' name="email"/>
                  <div className="w-full flex flex-col gap-2">
                    <p className="font-lostaMasta">Major</p>
                    <SelectField
                      options={[
                        { label: "Computer Science", value: "Computer Science" },
                        { label: "Information System", value: "Information System" },
                      ]}
                      value={selectedValue}
                      onChange={(val) => setSelectedValue(val)}
                      placeholder="ex: Information System"
                    />
                  </div>
                </div>
              </div>
              <TextField label="Reason you want to join" placeholder='Please fill with the reason why u interest to join our first event :)' name="reason"/>
              <div className="w-full">
                  <p className="font-lostaMasta">Interest</p>
                  <MultipleSelectField
                    options={options}
                    onChange={handleOnChangeInterest}
                    values={selectedCategory}
                  />
              </div>
              <TextField label="Spill your MBTI" placeholder='ex: INFJ' name="mbti"/>
              <div className="flex flex-col gap-2 w-full">
                <p className="font-lostaMasta">Student Proof</p>
                <p>Upload a screenshot of your SIAK NG to verify that you&apos;re a current UI student</p>
                <MediaField placeholder='Upload a clear screenshot of your SIAK NG showing your student information' onFileSelect={(f) => setFileStudentProof(f)} file={fileStudentProof}/>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p className="font-lostaMasta">Payment Evidence</p>
                <div>
                  <p>Join us for just <span className="font-bold">IDR 85,000</span>, including all your materials for the flower pipe cleaner craft! </p>
                  <p>Complete your registration by transferring the payment to:</p>
                </div>
                <p className="mt-3">BANK JAGO: 506270040328 ( KAISA DIAN FERDINAND )</p>
                <MediaField placeholder='Upload a screenshot that clearly displays the transaction details' onFileSelect={(f) => setFilePaymentProof(f)} file={filePaymentProof}/>
              </div>
              <div className="w-full">
                <button className={`bg-[#EF3187] w-full text-white text-xl font-bold py-4 rounded-2xl ${loading ? "bg-[#e7609d]" : ""}`} disabled={loading} >{loading ? 'Submitting...' : 'Submit'}</button>
              </div>
              <input type="hidden" name="interest" value={selectedCategory.join(",")} />
              <input type="hidden" name="major" value={selectedValue} />
          </form>
        </main>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <div className="flex flex-col items-center md:gap-10 gap-5 md:py-4 py-2">
              <RegisterSuccess/>
              <div className="flex flex-col items-center gap-2 text-center">
                <p className="font-lostaMasta md:text-3xl text-xl">Registration Successful</p>
                <p className="text-sm">We will contact you via WhatsApp for further information.</p>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  )
}
