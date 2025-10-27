function ResumeModal({ isOpen, onClose, resumeUrl }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-red-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative w-11/12 h-5/6 max-w-4xl bg-white rounded-lg shadow-xl">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 bg-gray-800 text-white rounded-full p-2"
                >
                    ✕
                </button>
                <iframe
                    src={resumeUrl}
                    className="w-full h-full rounded-lg"
                    title="Resume"
                />
            </div>
        </div>
    );
}

export default ResumeModal;