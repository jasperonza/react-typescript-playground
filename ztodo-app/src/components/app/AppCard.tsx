type Props = React.ComponentProps<'div'>

export default function AppCard({ children, ...props }: Props) {
  return (
    <div {...props}>
      {children}
    </div>
  )
}