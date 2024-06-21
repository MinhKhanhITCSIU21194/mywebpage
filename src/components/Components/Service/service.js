import { PRODUCTS } from "../../../data/Data"
import filteredProductsLater from "../../Pages/ProdBody"

const service = {
    getData: ({from, to}) => {
        return new Promise((resolve, reject) => {

            const data = PRODUCTS.slice(from , to);

            resolve({
                count: PRODUCTS.length,
                data: data
            })
        })
    }

}
export default service;