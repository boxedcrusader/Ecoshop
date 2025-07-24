function Newsletter() {
  return (
    <div className="h-auto bg-gray-950 py-8 pt-20 pb-20">
      <div className="text-center mb-6">
        <h1 className="text-white text-3xl font-bold mb-4">NEWSLETTER</h1>
        <p className="text-gray-400">
          Phasellus lacinia fermentum bibendum. Interdum et malesuada fames ac ante ipsumien <br /> lacus, eu posuere odi
        </p>
      </div>
      <div className="flex justify-center">
        <form className="flex space-x-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-2 w-96 border border-gray-600 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-gray-950 text-white border hover:bg-white hover:text-black transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
