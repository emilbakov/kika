// Single source of truth for business data — used by the UI and by the SEO / JSON-LD.

export const SITE = {
    name: 'Rhodope Clean',
    slogan: 'Where Clean Meets the Peak',
    phone: '+359896011439',
    phoneDisplay: '+359 89 601 1439',
    // keep title ≤ ~60 chars and description ≤ ~155 chars so Google doesn't truncate them
    title: 'Почистване в Пампорово, Чепеларе и Смолян | Rhodope Clean',
    description:
        'Професионално почистване на апартаменти, къщи за гости и вили в Пампорово, Чепеларе и Смолян. ' +
        'Био препарати. Цени от 30 €. Тел. +359 89 601 1439',
    areas: ['Пампорово', 'Чепеларе', 'Смолян'],
    region: 'Смолян',
    country: 'BG',
} as const

export type PriceItem = { name: string, detail?: string, price?: number, from?: boolean }
export type PriceGroup = { title: string, roman: string, items: PriceItem[] }

// price omitted → "по запитване"
export const PRICING: PriceGroup[] = [
    {
        title: 'Студия',
        roman: 'I',
        items: [
            { name: 'Студио', price: 30 },
            { name: 'Гарсониера', price: 40 },
        ],
    },
    {
        title: 'Апартаменти',
        roman: 'II',
        items: [
            { name: 'Едностаен', detail: 'с едно спално помещение', price: 50 },
            { name: 'Двустаен', detail: 'с две спални помещения', price: 65 },
            { name: 'Тристаен', detail: 'с три спални помещения', price: 85 },
            { name: 'Многостаен и мезонет' },
        ],
    },
    {
        title: 'Къщи и вили',
        roman: 'III',
        items: [
            { name: 'До 120 м²', detail: 'едноетажни и двуетажни', price: 200, from: true },
            { name: 'До 210 м²', detail: 'едноетажни и двуетажни', price: 275, from: true },
            { name: 'Над 210 м²' },
        ],
    },
]
