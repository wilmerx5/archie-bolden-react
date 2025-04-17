import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useMemo } from 'react';
import { useJobsStore } from '../../stores/store';
import FormJob from '../Jobs/FormJob';

export default function Modal() {
    const { selectedJob, closeModal, setUpdating, updating } = useJobsStore()

    const showModal = useMemo(() => !Object.values(selectedJob).includes(''), [selectedJob])
    return (
        <>
            <Transition appear show={showModal} as={Fragment}>
                <Dialog as="div" className="relative z-50 " onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100 scale-100 "
                        leaveTo="opacity-0  scale-99"
                    >
                        <div className="fixed inset-0 bg-black opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex items-center justify-center overflow-y-auto p-4 sm:p-6 ">
                        <div className="w-full max-w-3xl mx-auto">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-500"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                   leaveFrom="opacity-10 scale-100"
                        leaveTo="opacity-0 scale-95"
                               
                            >
                                <Dialog.Panel className="relative w-full bg-white rounded-xl shadow-2xl transform transition-all sm:max-w-2xl">
                                    {updating ? (
                                        <div className="p-6 mt-50 ">
                                             <button
                                                    className="bg-red-400 w-20 float-end mt-2 mr-2 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                                                    onClick={closeModal}
                                                >
                                                    Close
                                                </button>
                                            <FormJob  />
                                           
                                        </div>
                                    ) : (
                                        <>
                                            {/* Header */}
                                            <Dialog.Title className="text-2xl font-bold text-center text-gray-900 py-4 sm:py-6">
                                                {selectedJob.title}
                                            </Dialog.Title>

                                            {/* Job Info */}
                                            <div className="px-6 pb-4 border-b border-gray-200">
                                                <h4 className="text-lg font-semibold text-gray-800">
                                                    Company: <span className="text-gray-500">{selectedJob.company}</span>
                                                </h4>
                                                <h4 className="text-lg font-semibold text-gray-800">
                                                    Location: <span className="text-gray-500">{selectedJob.location}</span>
                                                </h4>
                                                <h4 className="text-lg font-semibold text-gray-800">
                                                    Job Type: <span className="text-blue-600">{selectedJob.type}</span>
                                                </h4>
                                            </div>

                                            {/* Description */}
                                            <div className="px-6 pb-4">
                                                <h4 className="text-xl font-semibold text-gray-900 mb-2">Job Description</h4>
                                                <p className="text-gray-700">{selectedJob.description}</p>
                                            </div>

                                            {/* How to Apply */}
                                            <div className="px-6 pb-6">
                                                <h4 className="text-xl font-semibold text-gray-900 mb-2">How to Apply</h4>
                                                <p className="text-gray-700 mb-4">
                                                    Follow the instructions on our website to submit your application.
                                                </p>
                                                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                                                    <li>Step 1: Fill out the application form</li>
                                                    <li>Step 2: Upload your resume</li>
                                                    <li>Step 3: Wait for our confirmation email</li>
                                                </ul>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex justify-center sm:justify-end space-x-4 px-6 py-4">
                                                <button
                                                    className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                                                    onClick={closeModal}
                                                >
                                                    Close
                                                </button>
                                                <button
                                                    className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition"
                                                    onClick={() => setUpdating()}
                                                >
                                                    Update Job
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>

    )
}