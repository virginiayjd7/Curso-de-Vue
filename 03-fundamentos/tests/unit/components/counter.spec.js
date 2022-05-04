import { shallowMount } from '@vue/test-utils'
import Counter from '@/Components/Counter'
//import { expect, jest, test } from '@jest/globals';
describe('Counter Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })

    /*test('debe de hacer math con el snapshot', () => {
        const wrapper = shallowMount(Counter)
        expect(wrapper.html).toMatchSnapshot()

    })*/
    test('h2 debe de tener el valos por deecto  ', () => {
        //const wrapper = shallowMount(Counter)
        //expect(wrapper.find('h10').exists()).toBe(true)
        expect(wrapper.find('h2').exists()).toBeTruthy()
        const h2 = wrapper.find('h2')
            //console.log(h2.text())

        expect(h2.text()).toBe('Counter')
    })

    test('el valor por defecto de ser 100 en el p', async() => {
        //wrapper
        //const wrapper = shallowMount(Counter)
        //ptaps
        //const pTags = wrapper.findAll('p')
        // espect p===100
        //console.log(pTags)
        const value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('100')


    })

    test('sdebe de incrementar en 1 el valor del contador', async() => {

        //const wrapper = shallowMount(Counter)

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')

        //const value = wrapper.find('[data-testid="counter"]').text()
        //let value = wrapper.find('[data-testid="counter"]').text()
        //expect(value).toBe('101')
        //await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('101')
    })
    test('should debe de establecer el valor por defecto', () => {
        const { start } = wrapper.props()
            //const start = wrapper.props(' start')
            //console.log(typeof start)
        const value = wrapper.find('[data-testid="counter"]').text()
        expect(Number(value)).toBe(start)
    })
    test('DEBE DE MOSTRAR LA POP TITLE', () => {
        const title = 'Hola Mundo!!!!1'
        const wrapper = shallowMount(Counter, {
                props: {
                    title, //: //'Hola Mundo'
                    start: '5'
                }
            })
            //console.log(wrapper.html())
        const { start } = wrapper.props()
        console.log(typeof start)
        expect(wrapper.find('h2').text()).toBe(title)
    })
})