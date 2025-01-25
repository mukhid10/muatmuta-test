import axios from "axios"

export const useGetData = ()=>{
    const getData = async ()=>{
        try {
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
            return res
        } catch (error) {
            console.log(error);
        }
    }

    return {getData}
}