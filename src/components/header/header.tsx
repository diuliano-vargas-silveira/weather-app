import DarkModeButton from './components/dark-mode-button/dark-mode-button'
import Searchbar from './components/search-bar/search-bar'

export default function Header() {
  return (
    <header className="px-[6%] py-4 w-full flex align-middle">
      <h1 className="text-3xl font-extra-bold font-black text-gray-800 dark:text-gray-200 w-32">
        Weather
      </h1>
      <Searchbar />
      <DarkModeButton />
    </header>
  )
}
