import { Skeleton } from '../ui/skeleton'
import { FaSpinner } from "react-icons/fa6";

const FillLoading = () => {
  return <Skeleton className='absolute w-full h-full inset-0 flex justify-center items-center opacity-20 z-50'>
    <FaSpinner className='animate-spin w-6 h-6' />
  </Skeleton>
}
export default FillLoading