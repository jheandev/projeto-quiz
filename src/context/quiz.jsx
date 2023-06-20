import { createContext} from "react"


export const QuizContext = createContext()  //invocar a função 

export const QuizProvaider = ({children}) => {     //prover(provaide) o contexto da aplicação 
    const value = {};

return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>



};                            