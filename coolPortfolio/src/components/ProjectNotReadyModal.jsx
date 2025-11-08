function ProjectNotReadyModal({ isOpen, onClose, project }) {
    if (!isOpen) return null;

    return (
        <div className="modal modal-open">
            <div className="modal-box relative bg-[#FCF9FE] border-1 border-gray-500 rounded-xl shadow-md">
                <div className="flex justify-center items-center">

                    <h3 className="font-bold text-xl text-black m-4">{project?.title}</h3>
                </div>
                <p className="font-light text-center text-base mb-4 text-black ">
                    I'm sorry the projects aren't ready to be viewed yet, but feel free to contact me. I would be more than happy to share more information with you!
                    Until then, I will keep developing to make them ready for viewing here.
                </p>
                <div className="modal-action justify-center">
                    <button
                        className="px-4 py-2 bg-[#ff007b] text-white rounded-lg font-medium hover:bg-[#e6006c] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer active:scale-95"
                        onClick={onClose}
                    >
                        Got it!
                    </button>
                </div>
            </div>

            {/* Click outside to close */}
            <div className="modal-backdrop" onClick={onClose}></div>
        </div>
    );
}

export default ProjectNotReadyModal;