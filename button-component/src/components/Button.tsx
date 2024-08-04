// ***Using INTERFACE as alias ***
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
}

// ***Using TYPE as alias***
// type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
//   label: string,
// };

export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button {...props}>{label || "asd"}</button>
  )
}
