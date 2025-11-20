"use client"

import React, { useEffect, useRef, useState } from 'react'
import TextField from '../../components/inputs/TextField'
import { MediaField } from '../../components/inputs/MediaField'
import { UpperBorder } from '../../../public/assets/icons/UpperBorder'
import { toast } from 'react-hot-toast'
import { SelectField } from '@/components/inputs/SelectField'
import { Modal } from '@/components/modals/Modal'
import { RegisterSuccess } from '../../../public/assets/icons/RegisterSuccess'
import { MattSelector } from '../../components/inputs/MattSelector'
import DetailEventSection from '@/modules/register-module/detail-event-section'
import { ROLE_OPTIONS } from '@/app/register/const'
import { submitRegistration } from '@/app/register/actions'

export const RegisterModule = () => {
  type RoleStatusType = {
    [role: string]: {
      quota: number;
      filled: number;
      available: boolean;
    };
  };

  const [selectedValue, setSelectedValue] = useState<string>("");
  const [roleStatus, setRoleStatus] = useState<RoleStatusType>({});
  const [filePaymentProof, setFilePaymentProof] = useState<File | null>(null);
  const formRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(false);
  const [isLoadingRoles, setIsLoadingRoles] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedMattValue, setSelectedMattValue] = useState<"no" | "yes">("no");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.loading('Submitting registration...', {
      id: "register",
      duration: Infinity,
    });
    setLoading(true);
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    if (filePaymentProof) {
      formData.append("file", filePaymentProof);
    }

    const response = await submitRegistration(null, formData);
    if (response.success) {
      setLoading(false);
      toast.success(response.message, {id : "register", duration: 5000});
      setShowModal(true);
      form.reset(); 
      setFilePaymentProof(null);
      setSelectedValue("");
      setSelectedMattValue("no");
      await fetchRoles();
    } else {
      setLoading(false);
      toast.remove("register"); 
      if (Array.isArray(response.message)) {
        response.message.forEach((msg: string) => {
          toast.error(msg, { duration: 5000 }); 
        });
      } else {
        toast.error(response.message || "Failed to register", { id: "register", duration: 5000 });
      }
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchRoles = async () => {
    setIsLoadingRoles(true);
    try {
      const res = await fetch("https://hsp-be.vercel.app/api/user/roles/status");
      if (!res.ok) {
        console.error("Failed to fetch roles:", res.status);
        return;
      }
      const data = await res.json();
      setRoleStatus(data);
    } catch (error) {
      console.error("Error fetching roles:", error);
    } finally {
      setIsLoadingRoles(false);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);
     
  return (
    <div>
      <DetailEventSection scrollToForm={scrollToForm} />
      {/* open form */}
      <div ref={formRef} className="min-h-screen bg-[#EF3187]" style={{ backgroundImage: "url('/assets/images/bg-regist.png')" }}>
        <UpperBorder/>
        <main className="py-28 md:w-4/5 mx-auto flex flex-col items-center md:px-0 px-3">
          {isLoadingRoles ? (
            <div className="bg-[#FEF6EB] flex flex-col items-center rounded-2xl md:px-12 px-6 py-12 gap-6 w-full border border-[#1C1719]">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="h-9 w-64 bg-[#F5E6D3] rounded animate-pulse"></div>
                <div className="h-5 w-96 max-w-full bg-[#F5E6D3] rounded animate-pulse"></div>
              </div>
              <div className="flex md:flex-row flex-col w-full gap-6">
                <div className="w-full flex flex-col gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <div className="h-5 w-20 bg-[#F5E6D3] rounded animate-pulse"></div>
                      <div className="h-12 w-full bg-[#F5E6D3] rounded-lg animate-pulse"></div>
                    </div>
                  ))}
                </div>
                <div className="w-full flex flex-col gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <div className="h-5 w-20 bg-[#F5E6D3] rounded animate-pulse"></div>
                      <div className="h-12 w-full bg-[#F5E6D3] rounded-lg animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <div className="h-5 w-16 bg-[#F5E6D3] rounded animate-pulse"></div>
                <div className="h-4 w-full bg-[#F5E6D3] rounded animate-pulse"></div>
                <div className="h-12 w-full bg-[#F5E6D3] rounded-lg animate-pulse"></div>
              </div>
              <div className="flex md:flex-row flex-col w-full gap-6">
                <div className="w-full h-40 bg-[#F5E6D3] rounded-lg animate-pulse"></div>
                <div className="w-full flex flex-col gap-6">
                  <div className="h-32 w-full bg-[#F8A4C4] rounded-[20px] animate-pulse"></div>
                  <div className="h-4 w-full bg-[#F5E6D3] rounded animate-pulse"></div>
                  <div className="h-24 w-full bg-[#F5E6D3] rounded-lg animate-pulse"></div>
                </div>
              </div>
              <div className="h-14 w-full bg-[#F8A4C4] rounded-2xl animate-pulse"></div>
            </div>
          ) : (
          <form className="bg-[#FEF6EB] flex flex-col items-center rounded-2xl md:px-12 px-6 py-12 gap-6 w-full border border-[#1C1719]" onSubmit={handleSubmit}>
              <div className="flex flex-col items-center text-center gap-3">
                  <h1 className="font-lostaMasta text-3xl">Registration Form</h1>
                  <p>Everyone&rsquo;s welcome! Open for everyone curious about building a tech career</p>
              </div>
              <div className="flex md:flex-row flex-col w-full gap-6">
                <div className="w-full flex flex-col gap-6">
                  <TextField label="Name" placeholder='ex: Bunga' name="nama"/>
                  <TextField label="WA/ID Line" placeholder='ex: 0812345678/bungaptr' name="phone_number"/>
                  <TextField label="University" placeholder='ex: Universitas Indonesia' name="university"/>
                </div>
                <div className="w-full flex flex-col gap-6">
                  <TextField label="Email" placeholder='ex: bunga@gmail.com' name="email"/>
                  <TextField label="Domicile" placeholder='ex: Jakarta' name="domicile"/>
                  <TextField label="Major" placeholder='ex: Information System' name="major"/>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="font-lostaMasta">Role</p>
                <div>
                  <p><b>Note:</b> If the role you&rsquo;re interested in is full, just WhatsApp us to join the waiting list!</p>
                </div>
                <SelectField
                  options={ROLE_OPTIONS.map((opt) => {
                    const isFull = roleStatus[opt.value]?.available === false;
                    return {
                      label: isFull ? `${opt.label} (Full)` : opt.label,
                      value: opt.value,
                      disabled: isFull,
                    };
                  })}
                  value={selectedValue}
                  onChange={(val) => {
                    if (roleStatus[val]?.available === false) return;
                    setSelectedValue(val);
                  }}
                  placeholder="Select Role"
                />
              </div>
              <div className="flex md:flex-row flex-col w-full gap-6">
                <div className="w-full flex flex-col gap-6">
                  <MattSelector
                    value={selectedMattValue}
                    onChange={(v) => setSelectedMattValue(v)} />

                </div>
                <div className="w-full flex flex-col gap-6">
                  <div className="bg-[#EF3187] rounded-[20px] p-6 text-[#FEF6EB] flex flex-col gap-1">
                    <p>BANK JAGO</p>
                    <p className="text-2xl"><b>506270040328</b></p>
                    <p>a.n. KAISA DIAN FERDINAND</p>
                  </div>
                  <p className="text-[#646464]">Upload a screenshot that clearly displays the transaction details</p>
                  <MediaField placeholder='Upload payment evidence' onFileSelect={(f) => setFilePaymentProof(f)} file={filePaymentProof}/>
                </div>
              </div>


              <div className="w-full">
                <button
                  className={`
                    w-full text-white text-xl font-bold py-4 rounded-2xl
                    transition-all duration-300 ease-in-out

                    ${loading
                      ? "bg-[#E7609D] cursor-not-allowed"
                      : "bg-[#EF3187] hover:scale-101 hover:shadow-sm hover:shadow-[#EF3187]/50 cursor-pointer"
                    }

                  `}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
              <input type="hidden" name="role" value={selectedValue} />
              <input type="hidden" name="matt" value={selectedMattValue} />
          </form>
          )}
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
