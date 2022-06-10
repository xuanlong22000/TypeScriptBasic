export interface Currency {
    unit: 'EUR' | 'GBP' | 'JPY' | 'USD'
    value: number
}

export function fromDD(value: number, unit: 'EUR' | 'GBP' | 'JPY' | 'USD'): Currency {
    return { unit, value }
}
