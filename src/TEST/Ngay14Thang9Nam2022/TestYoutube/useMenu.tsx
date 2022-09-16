import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode
} from 'react'

type UseMenuProps = {
  openMenu: boolean
  clickMenu: () => void
}
type MenuProviderProps = {
  children?: ReactNode
}

const MenuContext = createContext<UseMenuProps>({} as UseMenuProps)

function MenuProvider({ children }: MenuProviderProps) {
  const [openMenu, setOpenMenu] = useState(false)

  const clickMenu = useCallback(() => {
    setOpenMenu(oldState => !oldState)
  }, [])
  return (
    <MenuContext.Provider value={{ openMenu, clickMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

function useMenu(): UseMenuProps {
  return useContext(MenuContext)
}

export { MenuProvider, useMenu }
