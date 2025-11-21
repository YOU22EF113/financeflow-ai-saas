export default function SignupPage() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Create an Account</h1>

      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
        />

        <button className="bg-black text-white py-2 rounded hover:bg-gray-800">
          Sign Up
        </button>
      </form>
    </div>
  );
}
