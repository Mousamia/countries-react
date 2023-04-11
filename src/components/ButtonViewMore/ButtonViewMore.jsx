import React from 'react';

const ButtonViewMore = ({feature, viewMore}) => {

    const jobDescription = feature.jobDescription;
    const jobResponsibilities = feature.jobResponsibilities;
    const educationalRequirements = feature.educationalRequirements;

    console.log(jobDescription);
    console
    return (
        <div>
             <button  onClick={() => viewMore(jobDescription, jobResponsibilities, educationalRequirements)} className='px-6 py-4 rounded-sm bg-purple-500 text-white font-bold'>View more</button>
        </div>
    );
};

export default ButtonViewMore;