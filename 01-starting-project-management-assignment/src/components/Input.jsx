import { forwardRef } from "react";

const Input = forwardRef(function Input({label,textarea,...props},ref) {

    return <p className="flex flex-col my-4">
          <label className="text-sm font-bold uppercase text-stone-500" htmlFor="title">{label}</label>
          {textarea ? 
            <textarea ref={ref} className="w-full p-1 rounded-sm border-b-2 border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" {...props} /> : 
            <input ref={ref} className="w-full p-1 rounded-sm border-b-2 border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" {...props} /> }
    </p>
})

export default Input;