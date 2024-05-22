import { childCatagoty, menCatagoty, womenCatagory} from "../constants";
import { arrowDown } from "../assets/icons";
const PopularBtn = ({label, changeCatagory}) => {
    const handleClick = () => {
        if (label == "child's") {
            changeCatagory(childCatagoty);
          }
        else if (label == "men's") {
            changeCatagory(menCatagoty)
        }
        else {
            changeCatagory(womenCatagory)
        }
    }
    return (
        <button 
        onClick={handleClick}
        className="flex justify-center items-center gap-2 w-[100px] h-[35px] text-center font-montserrat text-sm font-semibold rounded-lg shadow-lg
        cursor-pointer focus:ring-offset-1 ring-[0.5px] border-[0.3px] border-sky-300 hover:bg-sky-300 hover:text-sky-50 bg-sky-50 ">
            {label}
            <img src={arrowDown} width={13} height={13} className="animate-bounce w-3 h-3" />
        </button>
    )
}
export default PopularBtn;