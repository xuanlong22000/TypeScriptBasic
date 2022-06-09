export interface Currency {
    unit: 'EUR' | 'GBP' | 'JPY' | 'USD'
    value: number
}

export function from(value: number, unit: 'USD'): Currency {
    return { unit, value }
}
