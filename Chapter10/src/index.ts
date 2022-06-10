import { fromDD } from "./modules"
import { Currency } from "./modules"
let amountDue: Currency = {
    unit: 'JPY',
    value: 83733.10
}


console.log(fromDD(amountDue.value, amountDue.unit))
