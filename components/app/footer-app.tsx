export function FooterApp() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id='main-footer' className="h-12 flex items-center justify-end p-2 border-t border-gray-800">
      <p>&copy; { currentYear.toString() } Brother&apos;s Tech</p>
    </footer>
  )
}
