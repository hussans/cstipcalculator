import React from 'react'

const InputField = ({ label, icon, value, onChange, error }) => {

  return (
    <div className="mb-8">
      <label className="text-[hsl(186,14%,43%)] mb-2 block font-bold"> {label} </label>
      <div className="relative">
        <img src={icon} alt="" className="absolute top-4 left-3 w-3" />
        <input type="number" className={`w-full p-2 pl-8 text-right text-2xl rounded-lg bg-[hsl(189,41%,97%)] focus:outline-[hsl(172,67%,45%)] font-bold text-[hsl(183,100%,15%)] ${ error ? 'border-2 border-red-500' : '' }`} value={value} onChange={onChange} placeholder="0"
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1"> {error} </p>}
    </div>
  )
}

export default InputField