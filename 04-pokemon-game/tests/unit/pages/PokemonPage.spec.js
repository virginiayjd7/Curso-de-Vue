import { shallowMount, mount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage";
import { pokemons } from "../mocks/pokemons.mock";

describe('PokemonPage component', () => {

    let wrapper
    let mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
    beforeEach(() => {
        mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        wrapper = shallowMount(PokemonPage)
    })
    test('debe de hacer math con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
    test('debe de llamar mixPokemonArray al montar', () => {
        //const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        const wrapper = shallowMount(PokemonPage)
        expect(mixPokemonArraySpy).toHaveBeenCalled()
    })
    test('debe de hacer math con el snapshot cuando cargan los pokemons', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })
    test('ebe de mostrar los componentes de pokemonPicture y pokemonOption', () => {
        //pokeompicture debe de existtir
        //pokemonOptions debe de existir
        //pokemonpicture atribute dbe ser igual pokemondId===5

        // pokemonoption atribute  pokemons tobe true 

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })
        const picture = wrapper.find('pokemon-picture-stub')
        const options = wrapper.find('pokemon-options-stub')
            //expect(wrapper.find('pokemon-picture-stub').exists()).toBeTruthy()
            //expect(wrapper.find('pokemon-options-stub').exists()).toBeTruthy()
        expect(picture.exists()).toBeTruthy()
        expect(options.exists()).toBeTruthy()

        //expect(wrapper.find('pokemon-picture-stub').attributes('pokemonid')).toBe('5')
        //expect(wrapper.find('pokemon-options-stub').attributes('pokemons')).toBeTruthy()
        expect(picture.attributes('pokemonid')).toBe('5')
        expect(options.attributes('pokemons')).toBeTruthy()
    })
    test('pruebas con checkAnswer', async() => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })
        await wrapper.vm.checkAnswer(5)
            //console.log(wrapper.vm)
        expect(wrapper.find('h2').exists()).toBeTruthy()
            //console.log(wrapper.find('h2').text())
        expect(wrapper.vm.showPokemon).toBe(true)
        expect(wrapper.find('h2').text()).toBe(`Correcto , ${pokemons[0].name}`)
        await wrapper.vm.checkAnswer(10)
        expect(wrapper.vm.message).toBe(`Oops, era ${pokemons[0].name}`)
    })
})