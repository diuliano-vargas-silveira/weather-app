import { DarkModeButton, Searchbar } from './components'

export function Header() {
  return (
    <header className="px-[6%] py-4 w-full flex justify-between align-middle">
      <h1 className="text-3xl font-cursive font-black text-gray-800">
        Weather
      </h1>
      <Searchbar />
      <DarkModeButton />
    </header>
  )
}
