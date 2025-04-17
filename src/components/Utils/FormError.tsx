import { ReactNode } from 'react'
type FormErrorProps = {
  children: ReactNode
}

function FormError({ children }: FormErrorProps) {
  return (
    <p className="flex items-center gap-2 text-sm text-red-700 bg-red-100 border border-red-300 rounded-md px-3 py-1 mt-2">
 
      {children}
    </p>

  )
}

export default FormError