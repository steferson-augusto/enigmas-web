import React, { useState, useCallback, useRef, FormEvent } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import { Container, Input, Button } from './styles'

export interface FooterProps {
  id: string
  destiny: string
}

const Footer: React.FC<FooterProps> = ({ id, destiny }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault()
    const resposta = inputRef.current?.value
    const { data } = await axios.post('/api/answer', { id, resposta })
    inputRef.current.value = ''
    if (data.correct) {
      setError(false)
      router.push(`/enigma/${destiny}`)
    } else {
      setError(true)
      console.log('errrrrrrou')
    }
  }, [])

  return (
    <Container as="form" onSubmit={handleSubmit}>
      <Input
        ref={inputRef}
        type="text"
        placeholder="Responda aqui"
        error={error}
        required
      />
      <Button type="submit">
        <span>Responder </span>
      </Button>
    </Container>
  )
}

export default Footer
