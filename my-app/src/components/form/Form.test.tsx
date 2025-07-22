import { render, screen } from '@testing-library/react'
import InputForm  from './Form'



describe('Form', ()=>{
    it('renders correctly', ()=> {
        render(<InputForm/>)
        const header = screen.getByText(/User form/i)
        expect(header).toBeInTheDocument()
    })

    it('name input exists', ()=>{
        render(<InputForm/>)
        const nameInput = screen.getByRole('textbox')
        expect(nameInput).toBeInTheDocument()
    })
    it('surname input exists', ()=> {
        render(<InputForm/>)
        const surnameInput = screen.getByRole('surname')
        expect(surnameInput).toBeInTheDocument()
        
    })
    it('checkbox input exists', ()=> {
        render(<InputForm/>)
        const check = screen.getByRole('checkbox')
        expect(check).toBeInTheDocument()
    })
    it('button exists', ()=> {
        render(<InputForm/>)
        const btn = screen.getByRole('button')
        expect(btn).toBeInTheDocument()
    })
})