import devStore from './configure-store.dev';
import prodStore from './configure-store.prod';


const store = process.env.NODE_ENV === 'production' ? prodStore : devStore;


export default store;
