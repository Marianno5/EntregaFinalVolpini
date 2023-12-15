const products = [
    {
        id: '1',
        name: 'Herboristería',
        price: 300,
        category: 'Skills',
        stock: '1'

    },
    {
        id: '2',
        name: 'Mimesis de Bestias',
        price: 300,
        category: 'Skills',
        stock: '1'

    },
    {
        id: '3',
        name: 'Acróbata',
        price: 300,
        category: 'Skills',
        stock: '1'

    },
    {
        id: '4',
        name: 'Búsqueda de Tesoros',
        price: 300,
        category: 'Skills',
        stock: '1'

    },
    {
        id: '5',
        name: 'Domador de Bestias',
        price: 300,
        category: 'Skills',
        stock: '1'

    },
    {
        id: '6',
        name: 'Evasión',
        price: 300,
        category: 'Skills',
        stock: '1'

    },
    {
        id: '7',
        name: 'Sigilo',
        price: 300,
        category: 'Skills',
        stock: '1'

    },
    {
        id: '8',
        name: 'Ingeniería de Trampas',
        price: 300,
        category: 'Skills',
        stock: '1'

    },
    {
        id: '9',
        name: 'Alquimia',
        price: 300,
        category: 'Skills',
        stock: '1'

    },
    {
        id: '10',
        name: 'Artista Marcial',
        price: 300,
        category: 'Skills',
        stock: '1'

    },
    {
        id: '11',
        name: 'Inmunidad Psíquica',
        price: 300,
        category: 'Skills',
        stock: '1'

    },
    {
        id: '12',
        name: 'Lengua de las Bestias',
        price: 300,
        category: 'Skills',
        stock: '1'

    },
    {
        id: '13',
        name: 'Encantamiento de Objetos',
        price: 300,
        category: 'Skills',
        stock: '1'

    },
    {
        id: '14',
        name: 'Rastreo',
        price: 300,
        category: 'Skills',
        stock: '1'

    },
    {
        id: '15',
        name: 'Fire Ball',
        price: 1000,
        category: 'Spells',
        stock: '1'

    },
    {
        id: '16',
        name: 'Infernal Flame',
        price: 1200,
        category: 'Spells',
        stock: '1'

    },
    {
        id: '17',
        name: 'Explosion',
        price: 1500,
        category: 'Spells',
        stock: '1'

    },
    {
        id: '18',
        name: 'Water Gun',
        price: 1000,
        category: 'Spells',
        stock: '1'

    },
    {
        id: '19',
        name: 'Revitalize',
        price: 1200,
        category: 'Spells',
        stock: '1'

    },
    {
        id: '20',
        name: 'Tsunami',
        price: 1500,
        category: 'Spells',
        stock: '1'

    },
    {
        id: '21',
        name: 'Aerial Veil',
        price: 1000,
        category: 'Spells',
        stock: '1'

    },
    {
        id: '22',
        name: 'Wind Blade',
        price: 1200,
        category: 'Spells',
        stock: '1'

    },
    {
        id: '23',
        name: 'Tornado',
        price: 1500,
        category: 'Spells',
        stock: '1'

    },
    {
        id: '24',
        name: 'Stone Wall',
        price: 1000,
        category: 'Spells',
        stock: '1'

    },
    {
        id: '25',
        name: 'Seismic Landslide',
        price: 1200,
        category: 'Spells',
        stock: '1'

    },
    {
        id: '26',
        name: 'Earthquake',
        price: 1000,
        category: 'Spells',
        stock: '1'

    },
    {
        id: '27',
        name: 'Lightning Strike',
        price: 1500,
        category: 'Spells',
        stock: '1'

    },
    {
        id: '28',
        name: 'Gravity Control',
        price: 1500,
        category: 'Spells',
        stock: '1'

    },
    {
        id: '29',
        name: 'Holly Light',
        price: 1500,
        category: 'Spells',
        stock: '1'

    },
    {
        id: '30',
        name: 'Shadow String',
        price: 1500,
        category: 'Spells',
        stock: '1'

    },
    {
        id: '31',
        name: 'Refuerzo Físico',
        price: 700,
        category: 'Enhancements',
        stock: '1'

    },
    {
        id: '32',
        name: 'Resistencia Elemental',
        price: 700,
        category: 'Enhancements',
        stock: '1'

    },
    {
        id: '33',
        name: 'Visión Nocturna',
        price: 700,
        category: 'Enhancements',
        stock: '1'

    },
    {
        id: '34',
        name: 'Concentración',
        price: 700,
        category: 'Enhancements',
        stock: '1'

    },
    {
        id: '35',
        name: 'Forma Etérea',
        price: 700,
        category: 'Enhancements',
        stock: '1'

    },
    {
        id: '36',
        name: 'Apoteosis Arcana',
        price: 700,
        category: 'Enhancements',
        stock: '1'

    },
    {
        id: '37',
        name: 'Bendición Ancestral',
        price: 700,
        category: 'Enhancements',
        stock: '1'

    },
    {
        id: '38',
        name: 'Regeneración Rápida',
        price: 700,
        category: 'Enhancements',
        stock: '1'

    },
    {
        id: '39',
        name: 'Sentidos Agudizados',
        price: 700,
        category: 'Enhancements',
        stock: '1'

    },
    {
        id: '40',
        name: 'Velocidad de Ataque Mejorada',
        price: 700,
        category: 'Enhancements',
        stock: '1'

    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

