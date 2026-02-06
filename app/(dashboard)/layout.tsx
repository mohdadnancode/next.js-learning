const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        Dashboard Navbar!
        <br /><br />
        {children}
        <br /><br />
        Dashboard Footer!
    </div>
  )
}

export default layout