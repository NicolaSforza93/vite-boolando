import { reactive } from 'vue';
import clothing from '../db.json';


export const store = reactive({
    clothing: clothing.products
});