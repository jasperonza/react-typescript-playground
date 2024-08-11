// ***Using INTERFACE as alias ***
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
}

// ***Using other method/s with INTERFACE alias***
// Method 1
// interface ButtonProps extends React.ComponentProps<"button"> {
//   label?: string
// }

// ***Using TYPE as alias***
// type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
//   label: string,
// };

// ***Using other method/s with TYPE alias***
// Method 1
// type ButtonProps = React.ComponentProps<"button"> & {
//   label?: string
// }

// Method 2
// type ButtonProps = React.JSX.IntrinsicElements["button"] & {
//   label?: string
// }

export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button {...props}>{label || "asd"}</button>
  )
}
