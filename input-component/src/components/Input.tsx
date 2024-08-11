// *** Using INTERFACE as alias ***
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

// ***Using other method/s with INTERFACE alias***
// Method 1
// interface InputProps extends React.ComponentProps<"input"> { }

// *** Using TYPE as alias ***
// type InputProps = React.InputHTMLAttributes<HTMLInputElement>

// *** Using other method/s with TYPE alias ***
// Method 1
// type InputProps = React.ComponentProps<"input">

// Method 2
// type InputProps = React.JSX.IntrinsicElements["input"]

export const Input = (props: InputProps) => {
  return (
    <input {...props} />
  )
}