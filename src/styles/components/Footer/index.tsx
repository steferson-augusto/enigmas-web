import { useRouter } from 'next/router'

import { Container, Input, Button } from './styles'

export interface FooterProps {
  destiny: string
}

const Footer: React.FC<FooterProps> = ({ destiny }) => {
  const [value, setValue] = React.useState('')
  const router = useRouter()

  function handleChange(event) {
    setValue(event.target.value)
  }

  function handleClick() {
    console.log(value)
    console.log(destiny)
    setValue('')
    router.push(`/enigma/${destiny}`)
  }

  return (
    <Container>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Responda aqui"
        required
      />
      <Button onClick={handleClick}>
        <span>Responder </span>
      </Button>
    </Container>
  )
}

export default Footer
