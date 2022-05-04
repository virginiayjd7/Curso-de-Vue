import { shallowMount } from '@vue/test-utils'
import Indecision from '@/Components/Indecision.vue'

describe('Indecision Component', () => {
    let wrapper
    let clgSpy

    global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({
                answer: 'yes',
                forced: false,
                image: 'https://yesno.wtf/assets/yes/2.gif'
            })
        }))
        //let getAnswerSpy
    beforeEach(() => {
        wrapper = shallowMount(Indecision)
        clgSpy = jest.spyOn(console, 'log')
            //getAnswerSpy = jest.spyOn(console, 'log')
        jest.clearAllMocks()
    })

    test('debe de hacer math con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
    test('escribir en el input no debe de disparar nada (console.log)', async() => {
        //console.log(wrapper) //es un obejto wrapper
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('Hola Mundo')

        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).not.toHaveBeenCalled()

        //console.log(wrapper.vm)
    })
    test('escribir el simbolo de "?" debe de disparar el getAnswer', async() => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('Hola Mundo?')

        expect(clgSpy).toHaveBeenCalledTimes(2)
        expect(getAnswerSpy).toHaveBeenCalled()


    })

    test('pruebas de getAnswer', async() => {
        await wrapper.vm.getAnswer()
            //console.log(wrapper.vm.img)
            //console.log(wrapper.vm.answer)
        const img = wrapper.find('img')

        expect(img.exists()).toBeTruthy()
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect(wrapper.vm.answer).toBe('No!')
    })
    test('pruebas en getAnswer - fallo en el API', async() => {

        //todo fallo en el API
        fetch.mockImplementationOnce(() => Promise.reject('API is down'))

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect(img.exists()).toBeFalsy() //nodebe exixtir
        expect(wrapper.vm.answer).toBe('No se pudo cargar del API')
    })

})