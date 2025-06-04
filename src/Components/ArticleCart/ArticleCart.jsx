import { useNavigate } from "react-router-dom"


export default function ArticleCart({ title, picture, description, id, date, author }) {
    const navigation = useNavigate()
    return (<div className="article-card w-72   bg-gray-100  rounded-2xl overflow-hidden  h-[370px] text-wrap  flex   gap-4   flex-col select-none   group">

        <div className="img w-full cursor-pointer   h-56 overflow-hidden rounded-2xl">
            <img onClick={() => { navigation(`/article/${id}`) }} className=" w-full h-full  group-hover:scale-120  object-cover transition-all" src={picture} alt="" />

        </div>
        <h2 className="cursor-pointer transition-all overflow-hidden  text-ellipsis line-clamp-2 px-1  font-bold  h-13 text-[16px] group-hover:text-redP font-shabnam-L " onClick={() => { navigation(`/article/${id}`) }} >{title}</h2>
        <h2 className="overflow-hidden  text-[13px]  h-15    text-ellipsis line-clamp-3  pb-7 px-1">{description}</h2>
        <div className="date flex justify-between items-center p-1">
        {date.slice(1,9)}
        <h2>{author}</h2>
        </div>
     
    </div>)
}