import React from 'react';

const Blog = () => {
    return (
        <div className='blog'>
            <div className='row'>
                <div className='col-12 col-sm-6'>
                    <div className='blogImage'>
                        <div className='contents'>
                            <p className='name'>New Explore</p>
                            <p className='title'>Our Blog</p>
                            <button>learn more</button>
                        </div>
                    </div>

                </div>
                <div className='col-12 col-sm-6'>
                    <div className='blogContent'>
                        <hr />
                        <p className='text'>
                            For your concern and benefits we have been adding largest blogs in Physiotherapy in Bangladesh. Click over the Picure or click on Learn More for details of topic and content of bogs!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;