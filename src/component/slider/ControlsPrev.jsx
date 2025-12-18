export default function ControlsPrev({ onPrev }) {
  return (
    

      <button
        onClick={onPrev}
        className="w-[50px] h-[150px] p-2 bg-gray-950 rounded-lg rotate-180 hover:bg-gray-900"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6" width="10px" height="10px">
          <path d="M8 21c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l7.29-7.29-7.29-7.29A.996.996 0 1 1 8.7 3.31l8 8c.39.39.39 1.02 0 1.41l-8 8c-.2.2-.45.29-.71.29Z" fill="#FFFFFF"></path>
        </svg>
      </button>

    
  );
}
