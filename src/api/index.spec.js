import { expect } from '@jest/globals'
import Api from '.'

describe('Api', () => {

    describe('users', () => {

        describe('oompa loompa list', () => {
            it('should retrieve full list per page', async () => {
                try {
                    const res = await Api.getOompaLoompaList()
                    expect(res).toBeDefined()
                    expect(res).toHaveProperty('current')

                } catch (error) {
                    throw Error(error)
                }
            })

            it('should retrieve first page if not valid page number provided', async () => {
                try {
                    const res = await Api.getOompaLoompaList()
                    expect(res).toBeDefined()
                    expect(res).toHaveProperty('current')
                    expect(res.current).toEqual(1)

                } catch (error) {
                    throw Error(error)
                }
            })
        })

        describe('oompa loompa details', () => {
            it('should retrieve item details', async () => {
                try {
                    const res = await Api.getOompaLoompaDetails(1)
                    expect(res).toBeDefined()
                    expect(res).toHaveProperty('first_name')
                } catch (error) {
                    throw Error(error)
                }
            })

            it('should fail if provided ID is not a number', async () => {
                try {
                    await Api.getOompaLoompaDetails('notANumber')
                    throw Error('should not reach here')
                } catch (error) {
                    expect(error).toBeDefined()
                    expect(error.message).toEqual('Given id is not valid')
                }
            })
        })
    })
})