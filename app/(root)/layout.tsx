const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        Navbar!
        <br /><br />
        {children}
        <br /><br />
        Footer!
    </div>
  )
}

export default layout