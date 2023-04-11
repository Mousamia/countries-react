import React from 'react';

const Toaster = () => {
    return (
        <div>
            <div class="relative">
                <input type="checkbox" class="peer
    appearance-none cursor-pointer
    border border-gray-300 rounded-full
    checked:border-gray-900 w-12 h-6"/>
                <span class="peer-checked:left-7
    peer-checked:bg-gray-900
    transition-all duration-200
    pointer-events-none w-4 h-4
    block absolute top-1 left-1
    rounded-full bg-gray-300"></span>
            </div>
        </div>
    );
};

export default Toaster;