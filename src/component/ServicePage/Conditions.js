import React from 'react';

const Conditions = () => {

   const condition = [
        {  name:'1. Low Back Pain', },
        {  name:'1. Low Back Pain', },
        {  name:'1. Low Back Pain', },
        {  name:'1. Low Back Pain', },
        {  name:'1. Low Back Pain', },
        {  name:'1. Low Back Pain', },
        {  name:'1. Low Back Pain', },
        {  name:'9. Low Back Pain', },
        {  name:'10. Low Back Pain', },
        {  name:'11. Low Back Pain', },
        {  name:'1. Low Back Pain', },
        {  name:'1. Low Back Pain', },
        {  name:'1. Low Back Pain', },
        {  name:'1. Low Back Pain', },
        {  name:'1. Low Back Pain', },
        {  name:'17. Low Back Pain', },
        {  name:'18. Low Back Pain', },
        {  name:'19. Low Back Pain', },
        {  name:'1. Low Back Pain', },
        {  name:'1. Low Back Pain', },
        {  name:'1. Low Back Pain', },
        {  name:'1. Low Back Pain', },
        {  name:'1. Low Back Pain', },
        {  name:'1. Low Back Pain', },
    ]
    return (
        <div className='conditions'>
            <div className='container'>
                <div className='heading'>
                    <p className='title'>Conditions</p>
                    <hr />
                    <p className='text'>We emphasize on Evidence Based Manual Therapy and Modern Electrotherapy. We have certified Mulligan Concept™ practitioners here. We also provide Dry needling Therpy for quick and maximum outcome of our patients.</p>
                </div>

                <div className='conditionPoints'>
              {
                condition.map(con=>{
                    return(
                        <div>
                  {con.name}
                        </div>
                    )
                })
              }
            </div>
            </div>
        </div>
    );
};

export default Conditions;