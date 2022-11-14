const Register = () => {
  return (
    <div className="container mx-auto p-8 flex">
        <div className="max-w-md w-full mx-auto">
            <h1 className="text-4xl text-center mb-12
            font-poppins">
                API Tunnel
            </h1>
            <div className="bg-black-gradient rounded-lg
            overflow-hidden shadow-2x1">
                <div className="p-8">
                    <form
                        method="POST"
                        action="#"
                    >
                        <div className="mb-5">
                            <label
                                for="username"
                                className="block mb-2
                                text-sm font-medium
                                text-gray-600"
                            >
                                Username
                            </label>
                            <input type="text" name="username" className="rounded-2xl block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Register;