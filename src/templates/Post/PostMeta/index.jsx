import React from 'react';
import PostTags from '../../../components/PostTags/PostTags';
import SocialLinks from '../../../components/SocialLinks/SocialLinks';

const PostMeta = ({ slug, post, postNode }) => (
  <div className="post-meta">
    <PostTags tags={post.tags} />
    <SocialLinks postPath={slug} postNode={postNode} />
  </div>
);

export default PostMeta;
