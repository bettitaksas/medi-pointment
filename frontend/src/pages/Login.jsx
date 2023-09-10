import { useState } from "react";
import { Link } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setLoading(true);


  };

  return (
    <section className="px-5 md:px-0">
      <div className=" w-full max-w-[570px] mx-auto rounded-lg shadow-lg md:p-10 p-[20px]">
        <div>
          <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          It&apos;s good to see <span className="text-primaryColor">You</span> again! 👨‍⚕️
          </h3>
          <form onSubmit={handleSubmit} className="py-4 md:py-0">
            <div className="mb-5">
              <input
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                name="email"
                placeholder="Enter Your Email"
                className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-[#0067FF] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
                required
              />
            </div>

            <div className="mb-5">
              <input
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                name="password"
                placeholder="Password"
                className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-[#0067FF] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
                required
              />
            </div>

            <div className="mt-7">
              <button
                type="submit"
                disabled={loading && true}
                className="w-full bg-primaryColor text-white py-3 px-4 rounded-lg text-[18px] leading-[30px]"
              >
                {loading ? <HashLoader size={25} color="#fff" /> : "Login"}
              </button>
            </div>

            <p className="mt-5 text-textColor text-center">
              Don&apos;t have an account? <br></br>
              <Link to="/register" className="text-primaryColor font-medium ml-1">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;