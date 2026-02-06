import { Suspense } from "react";
import Featured from "./featured";

const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  
  

  const { id } = await params;
  const a = Math.random()

  if(a < 0.5) {
    throw new Error("Random error occurred");
  }

  return (
    <div>
      <h1>Showing details for user #{id}</h1>
      <br /><br />
      <Suspense fallback={<p>Loading.....</p>}>
        <Featured/>
        </Suspense>
    </div>
  );
};

export default UserDetails;
