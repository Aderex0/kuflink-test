import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Homepage from '../components/homepage/Homepage'
import { renderHook } from '@testing-library/react-hooks'
import fetchMock from 'fetch-mock'
import { act } from 'react-test-renderer'

afterAll(cleanup)

describe('<Homepage />', () => {
  it('renders the homepage component', () => {
    const { queryByTestId } = render(<Homepage />)
    expect(queryByTestId).toBeTruthy()
  })

  beforeAll(() => {
    global.fetch = fetch
  })

  afterAll(() => {
    fetchMock.restore()
  })

  it("should return data with a successful request", async () => {
    const { result } = renderHook(() => useDataApi());
})
