import { useEffect } from "react"


export default function Header() {

  useEffect(() => {
    console.log('Chạy 1 lần duy nhất sau khi render Component Header')

    return () => {
      console.log('Trước khi remove Component Header khỏi cấu trúc DOM')
    }
  }, [])

  return (
    <header><h1>Header</h1></header>
  )
}


// const callback = () => {
//   return function unMount() {
    
//   };
// }

// React 

// const unMount = callback(); // Trong lần render đầu tiên

// Trước React remove component khỏi cấu trúc DOM 
// unMount();
