import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";



export default function Search({ width, cumstomclassName, onClickf, Desktop }) {
    const [desktop, setdesktop] = useState(Desktop)
    const [inputvalue, setvalue] = useState('')
    const [showinput, setshowinput] = useState(false)
    const [showModule, setshowModule] = useState(false)
    const [showMenu, setshowMenu] = useState(false)
    const searchComponent = useRef()
    const SearchContainer = useRef()
    const SearchMenu = useRef()
    const inputElem = useRef()


    function showinputF() {
        searchComponent.current.className = 'SEARCH w-96 transition-all   h-full  text-white z-20  flex rounded-4xl    justify-start items-center'
        inputElem.current.className = ' search__input text-black  w-full   outline-0  text-right border-0 p-4  z-20 transition-all'
        SearchContainer.current.className = 'search__container border-0 rounded-[10px]  w-full bg-white h-12  flex justify-start flex-row-reverse items-center relative transition-all'
        setshowModule(true)
        setshowMenu(true)


        setTimeout(() => {
            SearchMenu.current.className = 'Search-history absolute -bottom-23 border-b-2 border-r-2 border-l-2 border-gray-200 right-0 left-0 text-center  bg-white w-full transition-all  z-20 animate-searchopenup'


        }, 2);
    }
    function hideinputF() {



        searchComponent.current.className = 'SEARCH w-96 transition-all   h-full  text-white z-20  flex rounded-4xl    justify-start items-center'
        // inputElem.current.className = ' search__input text-black  w-full   outline-0  text-right border-0  max-md:hidden p-4 z-20 z-20  transition-all '
        SearchContainer.current.className = 'search__container border-0 rounded-[10px]  w-full bg-white h-12  flex justify-start flex-row-reverse items-center relative transition-all'


        SearchMenu.current.className = 'Search-history absolute -bottom-23 border-b-2 border-r-2 border-l-2 border-gray-200 right-0 left-0 text-center  bg-white w-full transition-all  z-20 animate-searchcloseup'

        setTimeout(() => {

            setshowMenu(false)

            setshowModule(false)
        }, 50);

    }
    return (<div ref={searchComponent}
        className={`SEARCH w-96 transition-all   h-full  text-white z-20  flex rounded-4xl    justify-start items-center  ${cumstomclassName}`}

    >

        {showModule && <div onClick={() => { hideinputF(); }} className="Modul    fixed z-10 w-full h-full top-0 left-0    "></div>}

        <div
            ref={SearchContainer}
            className="search__container border-0 rounded-3xl  w-full bg-white h-12  flex justify-start flex-row-reverse items-center relative transition-all">

            <CiSearch
                onClick={() => { showinputF() }}
                className="search__icon text-black w-12 h-10  cursor-pointer  text-4xl p-1 z-20" />

            <input ref={inputElem}
                onChange={(event) => { setvalue(event.target.value) }}
                type="text"
                placeholder="  سرچ کنید ... "
                className="search__input    text-black  w-full   outline-0  text-right border-0  p-2 z-20"
                onClick={() => { showinputF() }}
            />
            {showMenu &&
                <div ref={SearchMenu} className="Search-history absolute -bottom-23 border-b-2 border-r-2 border-l-2 border-gray-200 right-0 left-0 text-center max-md:w-12    bg-white w-full transition-all  hidden  z-20 ">

                </div>}
        </div>

    </div>)
}