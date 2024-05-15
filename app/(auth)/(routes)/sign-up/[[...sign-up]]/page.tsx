import { SignUp } from "@clerk/nextjs"

function page() {
  return (
    <div className="w-full min-h-screen grid place-items-center">
      <SignUp path="/sign-up" />
    </div>
  )
}

export default page