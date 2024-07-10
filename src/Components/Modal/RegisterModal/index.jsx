
const RegisterModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-4 rounded shadow-lg">
          <h2 className="text-xl mb-4">Registrasi Berhasil</h2>
          <p className="mb-4">Akun Anda telah berhasil dibuat.</p>
          <button
            className="bg-primary-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            OK
          </button>
        </div>
      </div>
    );
  };

export default RegisterModal