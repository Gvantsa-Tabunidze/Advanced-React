import { render, renderHook } from "@testing-library/react"
import useFetch from "./useFetch"

describe('useFetch', ()=> {
      it('fetches data and returns response correctly', async () => {
    const { result, rerender } = renderHook(() =>
      useFetch({ url: '', method: 'GET' })
    )})

    it('accepts props correctly', () => {
    const url = '';
    const method = 'GET';

    const { result, rerender } = renderHook(
      ({ url, method }) => useFetch({ url, method }),
      {
        initialProps: { url, method }
      }
    )
    })
})

