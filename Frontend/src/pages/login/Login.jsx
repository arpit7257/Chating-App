// import { useState } from "react";
// import { Link } from "react-router-dom";
// import useLogin from "../../hooks/useLogin";

// const Login = () => {
// 	const [username, setUsername] = useState("");
// 	const [password, setPassword] = useState("");

// 	const { loading, login } = useLogin();

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		await login(username, password);
// 	};

// 	return (
// 		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-10">
// 			<div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
// 				<h1 className="text-2xl font-semibold text-center text-gray-700 mb-4">
// 					Login to <span className="text-blue-500">ChatApp</span>
// 				</h1>

// 				<form onSubmit={handleSubmit}>
// 					<div className="mb-4">
// 						<label className="block text-gray-600 mb-2">Username</label>
// 						<input
// 							type="text"
// 							placeholder="Enter username"
// 							className="w-full p-2 border border-gray-300 rounded"
// 							value={username}
// 							onChange={(e) => setUsername(e.target.value)}
// 						/>
// 					</div>

// 					<div className="mb-4">
// 						<label className="block text-gray-600 mb-2">Password</label>
// 						<input
// 							type="password"
// 							placeholder="Enter Password"
// 							className="w-full p-2 border border-gray-300 rounded"
// 							value={password}
// 							onChange={(e) => setPassword(e.target.value)}
// 						/>
// 					</div>

// 					<Link to="/signup" className="text-sm text-blue-500 hover:underline mb-4 inline-block">
// 						Don't have an account?
// 					</Link>

// 					<div className="mb-4">  {/* Added a container with margin-bottom */}
// 						<button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600" disabled={loading}>
// 							{loading ? <span className="loader"></span> : "Login"}
// 						</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default Login;

import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
				<h1 className="text-2xl font-semibold text-center text-gray-700 mb-4">
					Login to <span className="text-blue-500">ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-gray-600 mb-2">Username</label>
						<input
							type="text"
							placeholder="Enter username"
							className="w-full p-2 border border-gray-300 rounded bg-blue-100 text-gray-700"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div className="mb-4">
						<label className="block text-gray-600 mb-2">Password</label>
						<input
							type="password"
							placeholder="Enter Password"
							className="w-full p-2 border border-gray-300 rounded bg-blue-100 text-gray-700"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<Link to="/signup" className="text-sm text-blue-500 hover:underline mb-4 inline-block">
						Don't have an account?
					</Link>

					<div className="mb-4">
						<button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600" disabled={loading}>
							{loading ? <span className="loader"></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
