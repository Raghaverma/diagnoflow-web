function Login() {
  return (
    <div className="max-w-sm mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
        <button className="bg-blue-600 text-white px-4 py-2 w-full rounded">Login</button>
      </form>
    </div>
  );
}
export default Login;
