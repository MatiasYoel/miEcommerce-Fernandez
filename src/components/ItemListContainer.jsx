import ItemList from "./ItemList"
import Loading from "./Loading";
import {collection,getDocs,getFirestore,query,where} from "firebase/firestore";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


const ItemListContainer = () => {
    const [loading,setLoading] = useState(true)
    const [data, setData] = useState([]);
    const {category} = useParams();
    useEffect(() => {
        const db = getFirestore();
        const dbCollection = collection(db,'indumentaria');
        if (category) {
            const categoryFilter =query(dbCollection,where('category','==',category))
            getDocs(categoryFilter)
                .then(result => setData(result.docs.map(product => ({id: product.id, ...product.data()}))));
        } else{
            getDocs(dbCollection)
                .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))));
        }
        setLoading(false)
        
}, [category]);
if (loading) {
    return <Loading/>
}

return (
    <div >
        <ItemList data={data}/>
    </div>
)
}

export default ItemListContainer;