import Link from "next/link"

const page = () => {
  return (
    <div>
      <h1 className="text-4xl">Welcome to Home Page</h1>
      <p>Hello</p>
      <br />
      <br />
      <Link href="/article/breaking-news-123?lang=en">Read in English!</Link>
      <br />
      <Link href="/article/breaking-news-1232?lang=fr">Read in French!</Link>
    </div>
  )
}

export default page