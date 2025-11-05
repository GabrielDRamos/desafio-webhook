import { Link } from '@tanstack/react-router'

export function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
      <h1 className="text-4xl font-bold text-zinc-200">404 - Not Found</h1>
      <p className="text-lg text-zinc-400">
        The page you are looking for was not found.
      </p>
      <Link to="/" className="mt-4 text-sky-400 hover:text-sky-300">
        &larr; Go back to the beginning
      </Link>
    </div>
  )
}
