export const calcTaxPrice = (payMethod: string) => {
  switch (payMethod) {
    case 'efectivo':
      return 0.9

    case 'mercadoPago':
      return 1.1

    default:
      return null
  }
}
