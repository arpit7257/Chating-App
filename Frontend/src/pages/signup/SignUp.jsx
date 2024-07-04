import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
				<h1 className="text-2xl font-semibold text-center text-gray-700 mb-3">
					Sign Up for <span className="text-blue-500">ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div className="mb-2">
						<label className="block text-gray-600 mb-2">Full Name</label>
						<input
							type="text"
							placeholder="ABC XYZ"
							className="w-full p-2 border border-gray-300 rounded bg-blue-100 text-gray-700"
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div className="mb-2">
						<label className="block text-gray-600 mb-2">Username</label>
						<input
							type="text"
							placeholder="XYZ_7257"
							className="w-full p-2 border border-gray-300 rounded bg-blue-100 text-gray-700"
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div className="mb-2">
						<label className="block text-gray-600 mb-2">Password</label>
						<input
							type="password"
							placeholder="Enter Password"
							className="w-full p-2 border border-gray-300 rounded bg-blue-100 text-gray-700"
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div className="mb-2">
						<label className="block text-gray-600 mb-2">Confirm Password</label>
						<input
							type="password"
							placeholder="Confirm Password"
							className="w-full p-2 border border-gray-300 rounded bg-blue-100 text-gray-700"
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

					<Link to="/login" className="text-sm text-blue-500 hover:underline mb-3 inline-block">
						Already have an account?
					</Link>

					<div className="mb-3">
						<button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600" disabled={loading}>
							{loading ? <span className="loader"></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;


