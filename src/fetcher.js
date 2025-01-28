import axios from "axios";

const fetcher = (url) => axios.get(url).then(({data})=> data);

export default fetcher;