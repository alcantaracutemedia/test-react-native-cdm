import { FC, useMemo, useState} from 'react'
import { createContext } from 'react'

interface IDataContext {
    dark: boolean;
    toggleDark?: () => void;
  }
  
const defaultState = {
    dark: false,
  };

export const DataContext = createContext<IDataContext>(defaultState);

const DataProvider: FC = ({ children }) => {
    const [ dark, setDark ] = useState(defaultState.dark);
  
    const toggleDark = () => {
      setDark(!dark);
    };

    const value = useMemo(
      ()=>({
        dark,
        toggleDark
      }),
      [dark]
    );
  
    return (
      <DataContext.Provider  value={value}>
        {children}
      </DataContext.Provider>
    );
  };

  export default DataProvider