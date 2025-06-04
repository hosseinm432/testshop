import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import baseurl from "../../Utility/baseurl"

export default function Articlepage() {

    const [article, setarticle] = useState()
    useEffect(() => {
        getarticle()
    }, [])
    const param = useParams()
    console.log(param);

    async function getarticle() {
        const feth = await fetch(`${baseurl}/articles/${param.id}`)

        const res = await feth.json()
        if (res) {
            setarticle(res)
        }
        console.log(res);
    }


    return (<div>
        {article && <img src={article.picture} alt="" />}
        {article &&  <h2>{article.title}</h2>}
        {article &&  <p>{article.description}</p>}
    </div>)
}