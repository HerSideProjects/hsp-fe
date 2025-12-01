import React from 'react'

export const RegisterSkeleton = () => {
  return (
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
  )
}
