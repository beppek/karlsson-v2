import React from 'react';

const PostContent = ({ html }) => <div dangerouslySetInnerHTML={{ __html: html }} />;

export default PostContent;
