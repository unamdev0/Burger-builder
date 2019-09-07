import Axios from 'axios'

const orderInstance = Axios.create({
    baseURL:'https://react-app-3608f.firebaseio.com/',
    
});

export default orderInstance;