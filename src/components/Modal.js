import React from 'react';
import imageIssue from '../assets/images/issue.png';

let target = "modalValidacion";

const OpenModal = () => {
    document.getElementById(target).classList.remove("invisible");
    document.getElementById(target).classList.add("visible");
};
const CloseModal = () => {
    document.getElementById(target).classList.remove("visible");
    document.getElementById(target).classList.add("invisible");
};

const Modal = ({ msgValidation }) => {

    return (
        <div id={target}
            className="flex items-center justify-center modal invisible absolute
                        top-0 bottom-0 left-0 right-0 bg-opacity-90">
            <div className="flex flex-col items-center justify-center rounded-lg 
                              bg-blue-light-pokemon p-10 w-2/5">

                <img src={imageIssue} alt="Exclamation icon" className="w-1/3" />

                <p className=" text-black text-opacity-700 text-3xl
                                    mt-5 font-bold leading-none">
                    Oops! There is something wrong.
                </p>

                <br />

                <p className="text-black opacity-75 text-2xl leading-none">
                    {msgValidation}
                </p>

                <div className="flex flex-col w-2/6 mx-auto mt-10 mb-12">
                    <button
                        className="flex justify-center w-auto font-bold 
                            bg-red-pokemon py-2 px-4 rounded text-white"
                        onClick={() => CloseModal()}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

export { OpenModal, Modal };
