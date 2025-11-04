
import { useEffect } from 'react';
function MobileHamburgerMenuModal({ isOpen, toggleMenu, scrollToProjects, openResume }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-[#CADAFF] z-50 flex flex-col animate-slide-in">
            <button
                className="absolute my-4 mx-4 right-0 animate-rotate"
                onClick={toggleMenu}
            >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h16" />
                </svg>
            </button>

            <div className="flex flex-col items-start justify-start gap-12 text-left mt-12 pl-12 border-t-2 border-[#FF007B] pt-8">
                <button
                    className="text-4xl font-extralight custom-static-underline"
                    onClick={() => {
                        scrollToProjects();
                        toggleMenu();
                    }}
                >
                    PROJECTS
                </button>

                <button
                    className="text-4xl font-extralight custom-static-underline"
                    onClick={() => {
                        openResume();
                        toggleMenu();
                    }}
                >
                    RESUME
                </button>
            </div>
        </div>
    );
}

export default MobileHamburgerMenuModal;