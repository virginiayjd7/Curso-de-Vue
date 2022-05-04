// const app = Vue.createApp({ // template: `
//     //     <h1>hola</h1>
//     //     <p>Desde app.js</p>
//     // `
//     // methods: {},
//     // watch: {},
//     // setup() {}
//     data() {
//         return {
//             //message: 'Hola mundo'
//             quote: "soy bttttatmmm",
//             author: 'ddddttttd'
//         }
//     }
//     // methods: {
//     //     changeQuota() {
//     //         console.log("hola muscscxxxx")
//     //     }
//     // },

// })
// app.mount('#myApp')

const app = Vue.createApp({

    data() {
        return {
            quote: "iam yaneth",
            author: 'yaneth aquino'

        }
    },
    methods: {
        changeQuote() {
            console.log('hola yaneth')
            this.author = 'virginia aquino'
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    },

})
app.mount('#myApp')