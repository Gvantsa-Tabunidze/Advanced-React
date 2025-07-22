import { fireEvent, render, screen } from "@testing-library/react"
import SomeFunction from "./SomeFunction"

describe('SomeFunction', ()=> {
    it('renders correctly', ()=>{
        render(<SomeFunction count={0}/>)
        const element = screen.getByText(/Count Function/i)
        expect(element).toBeInTheDocument()

    })
    it('handles actions', ()=>{
        const incHandler=jest.fn()
        const decHandler=jest.fn()

        render(<SomeFunction
             count={0}
             handleDecrement={decHandler} 
             handleIncrement={incHandler} 
             />)

             const incBtn = screen.getByRole('button', {name:'Increment'})
             const decBtn = screen.getByRole('button', {name:'Decrement'})

                
        fireEvent.click(incBtn);
        expect(incHandler).toHaveBeenCalled();

        fireEvent.click(decBtn);
        expect(decHandler).toHaveBeenCalled();
    })
})